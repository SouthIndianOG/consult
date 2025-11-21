import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Program {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const AdminDashboard = () => {
    const [programs, setPrograms] = useState<Program[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, authLoading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
            return;
        }

        const fetchPrograms = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'programs'));
                const programsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Program[];
                setPrograms(programsData);
            } catch (error) {
                console.error("Error fetching programs:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchPrograms();
        }
    }, [user, authLoading, navigate]);

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this program?')) {
            try {
                await deleteDoc(doc(db, 'programs', id));
                setPrograms(programs.filter(p => p.id !== id));
            } catch (error) {
                console.error("Error deleting program:", error);
                alert("Failed to delete program");
            }
        }
    };

    const handleLogout = () => {
        auth.signOut();
        navigate('/');
    };

    if (loading || authLoading) {
        return <div className="min-h-screen flex items-center justify-center text-white">Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-24">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <div className="flex gap-4">
                    <Link to="/admin/new" className="btn-primary flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Add Program
                    </Link>
                    <button onClick={handleLogout} className="btn-secondary flex items-center gap-2">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </div>

            <div className="grid gap-6">
                {programs.map((program) => (
                    <div key={program.id} className="card-glass p-6 flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                            <p className="text-gray-400 text-sm line-clamp-1">{program.description}</p>
                        </div>
                        <div className="flex gap-3">
                            <Link to={`/admin/edit/${program.id}`} className="p-2 hover:bg-white/10 rounded-lg text-innovation-teal transition-colors">
                                <Edit className="w-5 h-5" />
                            </Link>
                            <button onClick={() => handleDelete(program.id)} className="p-2 hover:bg-white/10 rounded-lg text-alert-red transition-colors">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}

                {programs.length === 0 && (
                    <div className="text-center text-gray-400 py-12">
                        No programs found. Create one to get started.
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
