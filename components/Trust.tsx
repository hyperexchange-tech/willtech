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

                {/* Hero image */}
                <div className="mb-8 overflow-hidden rounded-lg shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80&auto=format&fit=crop"
                        alt="Trust and professionalism"
                        className="w-full h-64 md:h-96 object-cover"
                    />
                </div>

                {/* Compact bulleted list */}
                <ul className="space-y-4">
                    {trustReasons.map((reason, i) => (
                        <motion.li
                            key={i}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.05 + i * 0.04 }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100/60 flex items-center justify-center text-orange-600">
                                {reason.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
