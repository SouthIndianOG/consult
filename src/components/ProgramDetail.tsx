import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ArrowLeft, PlayCircle, FileText, CheckSquare, Clock, ArrowRight, Stethoscope, Baby, Activity, Heart, Brain } from 'lucide-react';

const iconMap: any = {
    'Stethoscope': Stethoscope,
    'Baby': Baby,
    'Activity': Activity,
    'Heart': Heart,
    'Brain': Brain
};

const ProgramDetail = () => {
    const { id } = useParams();
    const [program, setProgram] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProgram = async () => {
            if (!id) return;
            try {
                const docRef = doc(db, 'programs', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProgram({ id: docSnap.id, ...docSnap.data() });
                }
            } catch (error) {
                console.error("Error fetching program:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProgram();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-medical-900 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-heritage-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!program) {
        return (
            <div className="min-h-screen bg-medical-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Program Not Found</h2>
                    <Link to="/care-programs" className="btn-primary">Back to Programs</Link>
                </div>
            </div>
        );
    }

    const Icon = iconMap[program.icon] || Stethoscope;

    return (
        <div className="min-h-screen bg-medical-900 pt-24 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header */}
                <Link to="/care-programs" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Programs
                </Link>

                <div className="card-glass p-8 mb-8 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-64 h-64 ${program.color?.replace('text-', 'bg-')}/10 blur-3xl rounded-full -z-10`}></div>

                    <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${program.color}`}>
                            <Icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-3">{program.title}</h1>
                            <p className="text-gray-300 text-lg leading-relaxed">{program.description}</p>
                        </div>
                    </div>
                </div>

                {/* Modules List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold mb-6 px-2">Program Modules</h2>

                    {program.modules?.map((module: any, index: number) => {
                        // Helper to extract YouTube ID
                        const getYouTubeId = (url: string) => {
                            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                            const match = url?.match(regExp);
                            return (match && match[2].length === 11) ? match[2] : null;
                        };

                        const videoId = module.videoUrl ? getYouTubeId(module.videoUrl) : null;

                        return (
                            <div key={module.id} className="card-glass p-4 flex flex-col gap-4 group hover:bg-white/10 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-medical-900 flex items-center justify-center text-sm font-bold text-gray-500 border border-white/10">
                                        {index + 1}
                                    </div>

                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${module.type === 'video' ? 'bg-red-500/10 text-red-500' :
                                        module.type === 'article' ? 'bg-blue-500/10 text-blue-500' :
                                            'bg-green-500/10 text-green-500'
                                        }`}>
                                        {module.type === 'video' ? <PlayCircle className="w-5 h-5" /> :
                                            module.type === 'article' ? <FileText className="w-5 h-5" /> :
                                                <CheckSquare className="w-5 h-5" />}
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="font-semibold group-hover:text-heritage-gold transition-colors">{module.title}</h3>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                            <span className="capitalize">{module.type}</span>
                                            {module.duration && (
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {module.duration}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* YouTube Video Player */}
                                {videoId && (
                                    <div className="w-full aspect-video rounded-xl overflow-hidden mt-2 bg-black/50">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={module.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default ProgramDetail;
