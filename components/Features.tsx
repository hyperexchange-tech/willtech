import { useRef } from 'react';
import Link from 'next/link';
import { featuresData } from '@/data/dummy-data';
import Title from './Title';
import { motion } from 'framer-motion';

export default function Features() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="features" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="How We Manage Your Project"
                    heading="Complete Project Oversight"
                    description="Three layers of Operation for your Projects"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuresData.map((feature, i) => (
                        <motion.div
                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            key={i}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-300", "hover:border-orange-300", "hover:-translate-y-1");
                                }
                            }}
                            className="rounded-2xl overflow-hidden border border-orange-200/60 bg-orange-50/60 shadow-sm flex flex-col"
                        >
                            {/* Image Section */}
                            <div className="w-full h-40 overflow-hidden">
                                <img 
                                    src={feature.image} 
                                    alt={feature.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-5 flex flex-col justify-start flex-1">
                                <div className="w-10 h-10 rounded-lg bg-orange-200/40 flex items-center justify-center mb-3 text-orange-600">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* More Services Button */}
                <div className="flex justify-center mt-12">
                    <Link href="/services">
                        <button className="px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors duration-300">
                            More Services
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};