'use client';

import { ArrowRightIcon, PlayIcon, ZapIcon, CheckIcon } from 'lucide-react';
import { PrimaryButton, GhostButton } from './Buttons';
import { motion } from 'framer-motion';

export default function Hero() {
    const trustedUserImages = [
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50',
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop'
    ];

    const galleryStripImages = [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=100',
        'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=100',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100',
    ];

    const trustedLogosText = [
        'Engineering',
        'Quantity Surveying',
        'Infrastructure',
        'Public Programmes',
        'Cost Control'
    ];

    return (
        <>
            <section id="home" className="relative z-10 w-full">
                {/* Full Width Image */}
                <motion.div className="w-full mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                >
                    <motion.div className="w-full overflow-hidden border-b border-white/6 shadow-2xl bg-linear-to-b from-black/50 to-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-video md:aspect-[16/8] bg-gray-900 w-full">
                            <img
                                src="/image6.jpg"
                                alt="engineering-projects"
                                className="w-full h-full object-cover object-center"
                            />

                            <div className="absolute left-4 top-22 px-3 py-1 rounded-full bg-black/15 backdrop-blur-sm text-xs">
                                Engineering • Consultancy • Project Delivery
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center pt-16">
                                <h2 className="text-base md:text-4xl font-bold text-white text-center max-w-2xl px-6 drop-shadow-lg">
                                    Delivering structured construction, cost management and infrastructure advisory across Nigeria.
                                </h2>
                            </div>

                            <div className="absolute right-4 bottom-4">
                                <a href="/services" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/6 backdrop-blur-sm hover:bg-white/10 transition focus:outline-none">
                                    <PlayIcon className="size-4" />
                                    <span className="text-xs">View services</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Content Section with max-width */}
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mt-4 flex gap-3 items-center justify-start">
                        {galleryStripImages.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                                className="w-14 h-10 rounded-lg overflow-hidden border border-white/6"
                            >
                                <img
                                    src={src}
                                    alt="project-thumbnail"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                        <motion.div className="text-sm text-gray-400 ml-2 flex items-center gap-2"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                        >
                            <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300" />
                                <span className="relative inline-flex size-2 rounded-full bg-green-600" />
                            </div>
                            Active projects & partnerships
                        </motion.div>
                    </div>

                    {/* Text Content - Below Image */}
                    <div className="text-left">
                        <motion.a href="#!" className="inline-flex items-center gap-3 pl-3 pr-4 py-1.5 rounded-full bg-orange-100/50 mb-6 justify-start"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        >
                            <div className="flex -space-x-2">
                                {trustedUserImages.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`Client ${i + 1}`}
                                        className="size-6 rounded-full border border-orange-300/50"
                                        width={40}
                                        height={40}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-gray-700">
                                Supporting individuals, developers, organisations & government initiatives
                            </span>
                        </motion.a>

                        <motion.h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-xl text-gray-900"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                        >
                            Project Management & Engineering Consultancy  <br />
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#F37335] to-[#E05920]">
                                For Reliable Projects
                            </span>
                        </motion.h1>

                        <motion.p className="text-gray-700 max-w-lg mb-8"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                        >
                            WillTech Engineering Limited provides project management, cost consultancy and construction support services for private, institutional and public sector projects across Nigeria.
                            We support clients from early planning through delivery with structured, transparent and professional guidance.
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row items-center gap-4 mb-8"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                        >
                            <a href="https://wa.me/+447535951042" className="w-full sm:w-auto">
                                <PrimaryButton className="max-sm:w-full py-3 px-7">
                                    Request consultation
                                    <ArrowRightIcon className="size-4" />
                                </PrimaryButton>
                            </a>

                            <GhostButton className="max-sm:w-full max-sm:justify-center py-3 px-5">
                                <PlayIcon className="size-4" />
                                Our Services
                            </GhostButton>
                        </motion.div>

                        <motion.div className="flex sm:inline-flex overflow-hidden items-center max-sm:justify-center text-sm text-gray-900 bg-orange-100/40 rounded"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-orange-200/40 transition-colors">
                                <ZapIcon className="size-4" style={{ color: '#F37335' }} />
                                <div>
                                    <div className="text-gray-900 font-semibold">Independent Oversight</div>
                                    <div className="text-xs text-gray-600">
                                        Full project Management
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:block h-6 w-px bg-orange-300/30" />

                            <div className="flex items-center gap-2 p-2 px-3 sm:px-6.5 hover:bg-orange-200/40 transition-colors">
                                <CheckIcon className="size-4" style={{ color: '#F37335' }} />
                                <div>
                                    <div className="text-gray-900 font-semibold">Cost Management</div>
                                    <div className="text-xs text-gray-600">
                                        Complete Transparency
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LOGO MARQUEE */}
            <motion.section className="border-y border-white/6 bg-white/1 max-md:mt-10"
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className="max-w-6xl mx-auto px-6">
                    <div className="w-full overflow-hidden py-6">
                        <div className="flex gap-14 items-center justify-center animate-marquee whitespace-nowrap">
                            {trustedLogosText.concat(trustedLogosText).map((logo, i) => (
                                <span
                                    key={i}
                                    className="mx-6 text-sm md:text-base font-semibold text-gray-400 hover:text-gray-300 tracking-wide transition-colors"
                                >
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};