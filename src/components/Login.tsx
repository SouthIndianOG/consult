import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (user) {
            navigate('/care-programs');
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen bg-medical-900 flex items-center justify-center px-4">
            <div className="card-glass p-8 max-w-md w-full text-center">
                <div className="w-16 h-16 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <LogIn className="w-8 h-8 text-heritage-gold" />
                </div>

                <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                <p className="text-gray-400 mb-8">Sign in to access your personalized care programs and progress.</p>

                <button
                    onClick={signInWithGoogle}
                    className="w-full bg-white text-gray-900 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
                >
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
