import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ArrowRight, Stethoscope, Baby, Activity, Heart, Brain } from 'lucide-react';

const iconMap: any = {
    'Stethoscope': Stethoscope,
    'Baby': Baby,
    'Activity': Activity,
    'Heart': Heart,
    'Brain': Brain
};

const CarePrograms = () => {
    const [programs, setPrograms] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'programs'));
                const programsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPrograms(programsData);
            } catch (error) {
                console.error("Error fetching programs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-medical-900 pt-24 flex justify-center">
                <div className="w-10 h-10 border-4 border-heritage-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-medical-900 pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4">Care <span className="text-innovation-teal">Programs</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Structured guidance for every step of your journey. Select a program to start learning.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {programs.map((program) => {
                        const Icon = iconMap[program.icon] || Stethoscope;
                        return (
                            <Link
                                to={`/program/${program.id}`}
                                key={program.id}
                                className="card-glass p-6 group hover:border-heritage-gold/50 transition-all duration-300 block relative overflow-hidden"
                            >
                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-32 h-32 ${program.color?.replace('text-', 'bg-')}/10 blur-3xl rounded-full -z-10 group-hover:bg-opacity-20 transition-all`}></div>

                                <div className="flex items-start justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${program.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-heritage-gold transition-colors">{program.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2">{program.description}</p>

                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">{program.modules?.length || 0} Modules</span>
                                    <span className="flex items-center gap-1 text-innovation-teal font-medium group-hover:gap-2 transition-all">
                                        Start <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CarePrograms;
