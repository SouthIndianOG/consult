import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Booking = () => {
    const { t } = useTranslation();

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", {
                "styles": {
                    "branding": {
                        "brandColor": "#0F172A" // Medical Blue
                    }
                },
                "hideEventTypeDetails": false,
                "layout": "month_view"
            });
        })();
    }, []);

    return (
        <div className="min-h-screen bg-medical-900 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> {t('header.home')}
                    </Link>

                    <h1 className="text-3xl font-bold text-white mb-8 text-center font-heading">
                        {t('header.bookAppointment')}
                    </h1>
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                        <Cal
                            namespace="30min"
                            calLink="south-indian-og/30min"
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                            config={{ layout: 'month_view' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
