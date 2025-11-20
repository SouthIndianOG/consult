import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { User } from 'firebase/auth';

export interface UserProfile {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    currentProgramId?: string;
    joinedDate: any;
    lastLogin: any;
}

export const syncUserProfile = async (user: User) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        // Update last login
        await updateDoc(userRef, {
            lastLogin: serverTimestamp()
        });
    } else {
        // Create new profile
        const newProfile: UserProfile = {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || 'User',
            photoURL: user.photoURL || '',
            currentProgramId: 'pre-pregnancy', // Default start
            joinedDate: serverTimestamp(),
            lastLogin: serverTimestamp()
        };
        await setDoc(userRef, newProfile);
    }
};
