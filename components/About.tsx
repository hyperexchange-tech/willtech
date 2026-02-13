import { motion } from 'framer-motion';
import Title from './Title';
import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="About Willtech"
                    heading="Your Trusted Project Guardian"
                    description="Overseeing Projects with integrity and transparency"
                />

                <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                    className="max-w-3xl mx-auto bg-orange-50/60 border border-orange-200/60 rounded-2xl p-8 md:p-10 shadow-sm"
                >
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        WillTech Engineering Limited is a Nigerian-registered engineering and project management consultancy supporting construction and infrastructure delivery.                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We work with private clients, developers, institutions and public sector teams to provide practical project management, cost control and technical support from concept to completion.                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our focus is on helping clients deliver well-planned, properly costed and responsibly executed projects.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="/about"
                            className="inline-block mt-4 px-5 py-2 bg-blue-800 text-white rounded-md hover:bg-indigo-700"
                        >
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
