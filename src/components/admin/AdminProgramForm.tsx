import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, addDoc, updateDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ArrowLeft, Save, Plus, Trash2 } from 'lucide-react';

const ICONS = ['Heart', 'Baby', 'Activity', 'Brain', 'Stethoscope', 'ShieldCheck', 'Clock', 'Calendar'];

const AdminProgramForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, authLoading] = useAuthState(auth);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        icon: 'Heart',
        features: [''],
        modules: [{ title: '', duration: '', type: 'video' }]
    });

    useEffect(() => {
        if (!authLoading && !user) {
            navigate('/login');
            return;
        }

        const fetchProgram = async () => {
            if (id) {
                setLoading(true);
                try {
                    const docRef = doc(db, 'programs', id);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setFormData({
                            title: data.title || '',
                            description: data.description || '',
                            icon: data.icon || 'Heart',
                            features: data.features || [],
                            modules: data.modules || []
                        });
                    }
                } catch (error) {
                    console.error("Error fetching program:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProgram();
    }, [id, user, authLoading, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (id) {
                await updateDoc(doc(db, 'programs', id), formData);
            } else {
                await addDoc(collection(db, 'programs'), formData);
            }
            navigate('/admin');
        } catch (error) {
            console.error("Error saving program:", error);
            alert("Failed to save program");
        } finally {
            setLoading(false);
        }
    };

    const updateFeature = (index: number, value: string) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData({ ...formData, features: newFeatures });
    };

    const addFeature = () => {
        setFormData({ ...formData, features: [...formData.features, ''] });
    };

    const removeFeature = (index: number) => {
        const newFeatures = formData.features.filter((_, i) => i !== index);
        setFormData({ ...formData, features: newFeatures });
    };

    // Simplified module management for MVP
    const updateModule = (index: number, field: string, value: string) => {
        const newModules = [...formData.modules];
        newModules[index] = { ...newModules[index], [field]: value };
        setFormData({ ...formData, modules: newModules });
    };

    const addModule = () => {
        setFormData({ ...formData, modules: [...formData.modules, { title: '', duration: '', type: 'video' }] });
    };

    const removeModule = (index: number) => {
        const newModules = formData.modules.filter((_, i) => i !== index);
        setFormData({ ...formData, modules: newModules });
    };

    if (authLoading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-24">
            <button onClick={() => navigate('/admin')} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </button>

            <div className="card-glass p-8 max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-8">{id ? 'Edit Program' : 'New Program'}</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-heritage-gold outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Icon</label>
                            <select
                                value={formData.icon}
                                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-heritage-gold outline-none"
                            >
                                {ICONS.map(icon => (
                                    <option key={icon} value={icon} className="bg-medical-900">{icon}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-heritage-gold outline-none h-32"
                            required
                        />
                    </div>

                    {/* Features */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Features</label>
                        <div className="space-y-3">
                            {(formData.features || []).map((feature, index) => (
                                <div key={index} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={feature}
                                        onChange={(e) => updateFeature(index, e.target.value)}
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-heritage-gold outline-none"
                                        placeholder="Feature description"
                                    />
                                    <button type="button" onClick={() => removeFeature(index)} className="p-2 text-alert-red hover:bg-white/5 rounded-lg">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                            <button type="button" onClick={addFeature} className="text-sm text-innovation-teal hover:text-white flex items-center gap-1">
                                <Plus className="w-4 h-4" /> Add Feature
                            </button>
                        </div>
                    </div>

                    {/* Modules */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Modules</label>
                        <div className="space-y-4">
                            {(formData.modules || []).map((module, index) => (
                                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-sm font-medium text-gray-400">Module {index + 1}</h4>
                                        <button type="button" onClick={() => removeModule(index)} className="text-alert-red hover:text-white">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            value={module.title}
                                            onChange={(e) => updateModule(index, 'title', e.target.value)}
                                            placeholder="Module Title"
                                            className="bg-black/20 border border-white/10 rounded px-3 py-2 text-white text-sm"
                                        />
                                        <input
                                            type="text"
                                            value={module.duration}
                                            onChange={(e) => updateModule(index, 'duration', e.target.value)}
                                            placeholder="Duration (e.g. 10 mins)"
                                            className="bg-black/20 border border-white/10 rounded px-3 py-2 text-white text-sm"
                                        />
                                    </div>
                                </div>
                            ))}
                            <button type="button" onClick={addModule} className="text-sm text-innovation-teal hover:text-white flex items-center gap-1">
                                <Plus className="w-4 h-4" /> Add Module
                            </button>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary flex items-center gap-2"
                        >
                            <Save className="w-4 h-4" />
                            {loading ? 'Saving...' : 'Save Program'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminProgramForm;
