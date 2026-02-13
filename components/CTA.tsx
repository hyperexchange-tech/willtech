import { ArrowRightIcon } from 'lucide-react';
import { GhostButton } from './Buttons';
import { motion } from 'framer-motion';
import { PrimaryButton } from './Buttons';

export default function CTA() {
    return (
        <section className="py-20 2xl:pb-32 px-4">
            <div className="container mx-auto max-w-3xl">
                <div className="rounded-3xl bg-linear-to-b from-[#F37335]/20 to-[#F37335]/10 border border-[#F37335]/40 p-12 md:p-16 text-center relative overflow-hidden shadow-sm">
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20" />
                    <div className="relative z-10">
                        <motion.h2 className="text-2xl sm:text-4xl font-semibold mb-6 text-gray-900"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                        >
                            Planning a project or seeking professional support?
                        </motion.h2>
                        <motion.p className="max-sm:text-sm text-gray-800 mb-10 max-w-xl mx-auto font-medium"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                        >
                            Whether you're building a home, funding community infrastructure, or managing a major construction project in Nigeria, let WillTech provide the oversight and security you need. Avoid scams. Ensure progress. Get peace of mind.
                        </motion.p>
                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <PrimaryButton>Talk To Us</PrimaryButton>
                            {/* <GhostButton>Schedule a consultation</GhostButton> */}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}