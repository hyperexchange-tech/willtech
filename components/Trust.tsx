import { motion } from 'framer-motion';
import Title from './Title';
import { CheckCircle2, Building2, Globe, FileText, Users } from 'lucide-react';

export default function Trust() {
    const trustReasons = [
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Nigerian-registered company",
            description: "Legally established and compliant with local regulations"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "UK & Nigeria experience",
            description: "Professional practice across two continents"
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Structured project delivery",
            description: "Clear processes, transparent documentation, reliable outcomes"
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "Transparent cost control",
            description: "Independent oversight, verified expenses, no hidden costs"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Community-focused",
            description: "Supporting public interest projects and institutional development"
        }
    ];

    return (
        <section id="trust" className="py-12 2xl:py-16 bg-orange-50/40">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Credibility"
                    heading="Why Clients Choose WillTech"
                    description="Building trust through professionalism, transparency, and proven delivery"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
                    {trustReasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.05 + i * 0.05 }}
                            className="bg-white border border-orange-200/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-10 h-10 rounded-lg bg-orange-100/60 flex items-center justify-center text-orange-600 mb-3">
                                {reason.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-xs">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 text-xs leading-relaxed">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
