import { CheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { detailedServicesData, clientTypesData, costPlanStepsData } from '@/data/dummy-data';
import { PrimaryButton, GhostButton } from './Buttons';
import Title from './Title';

export default function ServicesDetail() {
    return (
        <>
            {/* Services Overview */}
            <section className="py-20 2xl:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <Title
                        title="Our Services"
                        heading="Complete Protection for Your Nigerian Projects"
                        description="From planning to completion, we provide comprehensive oversight ensuring your investment is safe, transparent, and delivered as promised."
                    />

                    <div className="space-y-12">
                        {detailedServicesData.map((service, i) => (
                            <motion.div
                                key={service.id}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.05 }}
                                className="p-8 rounded-2xl border border-orange-200/60 bg-orange-50/60 shadow-sm"
                            >
                                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                                <p className="text-gray-700 mb-6 max-w-2xl">{service.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.services.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ x: -20, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 250, damping: 70, delay: 0.1 + idx * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckIcon className="w-5 h-5 text-[#F37335] flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-20 2xl:py-32 bg-white/1 border-t border-white/6">
                <div className="max-w-6xl mx-auto px-4">
                    <Title
                        title="Our Clients"
                        heading="Who we work with"
                        description="We serve diverse client types across the public and private sectors."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        {clientTypesData.map((client, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, delay: 0.1 + i * 0.1 }}
                                className="p-6 rounded-xl border border-orange-300/60 bg-orange-100/40 text-center hover:border-orange-600/70 transition shadow-sm"
                            >
                                <p className="font-semibold text-gray-900">{client}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost Planning CTA */}
            <section className="py-20 2xl:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        className="rounded-3xl bg-linear-to-b from-[#F37335]/20 to-[#F37335]/10 border border-[#F37335]/40 p-12 md:p-16 text-center relative overflow-hidden shadow-sm"
                    >
                        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
                        <div className="relative z-10">
                            <motion.h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                            >
                                Planning a Project in Nigeria?
                            </motion.h2>
                            <motion.p className="max-sm:text-sm text-gray-800 mb-8 max-w-xl mx-auto font-medium"
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                            >
                                Start with a clear plan. We help diaspora investors understand real project costs, prevent budget surprises, and plan with confidence.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-10">
                                {costPlanStepsData.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                        className="p-4 rounded-lg bg-white/70 border border-[#F37335]/30"
                                    >
                                        <p className="font-semibold text-gray-900">{step}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-sm text-gray-800 mb-8 font-medium">We support diaspora investors, private home builders, and organizations planning Nigerian projects.</p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <PrimaryButton>Chat with an advisor</PrimaryButton>
                                {/* <GhostButton>Chat with an advisor</GhostButton> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
