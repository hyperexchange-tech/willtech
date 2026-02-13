import { Check } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import Title from './Title';
import { plansData } from '@/data/dummy-data';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Services"
                    heading="What we offer"
                    description="Comprehensive engineering and quantity surveying solutions tailored to your project needs."
                />

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {plansData.map((plan, i) => (
                        <motion.div
                            key={i}

                            ref={(el) => {
                                refs.current[i] = el;
                            }}
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            onAnimationComplete={() => {
                                const card = refs.current[i];
                                if (card) {
                                    card.classList.add("transition", "duration-500", "hover:scale-102");
                                }
                            }}
                            className={`relative p-6 rounded-xl border backdrop-blur ${plan.popular
                                ? 'border-orange-400/70 bg-white/60'
                                : 'border-orange-300/60 bg-white/50'
                                }`}
                        >
                            {plan.popular && (
                                <p className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-orange-700 rounded-md text-xs text-white font-semibold">
                                    Core service
                                </p>
                            )}

                            <div className="mb-6">
                                <p className="text-black font-semibold text-lg">{plan.name}</p>
                                <div className="flex items-end gap-3">
                                    <span className="text-3xl font-extrabold text-black">{plan.price}</span>
                                    <span className="text-sm text-gray-700">
                                        {plan.credits}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-800 mt-2">
                                    {plan.desc}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feat, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-3 text-sm text-gray-800"
                                    >
                                        <Check className="w-4 h-4 text-orange-700" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <div>
                                {plan.popular ? (
                                    <PrimaryButton className="w-full">
                                        Get in touch
                                    </PrimaryButton>
                                ) : (
                                    <GhostButton className="w-full justify-center">
                                        Learn more
                                    </GhostButton>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};