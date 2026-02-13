import { motion } from 'framer-motion';
import Title from './Title';
import { Building2, Briefcase, Heart, User } from 'lucide-react';

export default function Clients() {
    const clientTypes = [
        {
            icon: <Building2 className="w-7 h-7" />,
            title: "Government & public sector"
        },
        {
            icon: <Briefcase className="w-7 h-7" />,
            title: "Private developers"
        },
        {
            icon: <Heart className="w-7 h-7" />,
            title: "NGOs & institutions"
        },
        {
            icon: <User className="w-7 h-7" />,
            title: "Individuals executing projects"
        }
    ];

    return (
        <section id="clients" className="py-12 2xl:py-16">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Our Clients"
                    heading="Who We Work With"
                    description="Serving diverse sectors across Nigeria"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {clientTypes.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 40, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.05 + i * 0.08 }}
                            className="bg-white border border-orange-200/60 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="w-12 h-12 rounded-lg bg-orange-100/60 flex items-center justify-center text-orange-600 mx-auto mb-3">
                                {client.icon}
                            </div>
                            <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                {client.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
