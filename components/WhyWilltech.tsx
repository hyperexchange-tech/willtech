import { motion } from 'framer-motion';
import Title from './Title';
import { CheckCircle } from 'lucide-react';

export default function WhyWillTech() {
    const reasons = [
        "Structured and transparent approach",
        "Strong focus on cost control and accountability",
        "Practical understanding of construction in Nigeria",
        "Experience working with both private and institutional clients",
        "Professional communication and reporting",
        "Balanced technical and management support"
    ];

    return (
        <section id="why-willtech" className="py-20 2xl:py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Why WillTech"
                    heading="Why Clients Work With Us"
                    description="We aim to provide clarity, discipline and confidence throughout the project lifecycle"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="flex gap-4 items-start"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <CheckCircle className="w-6 h-6 text-orange-500" />
                            </div>
                            <p className="text-gray-700 text-lg">{reason}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
