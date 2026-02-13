import { motion } from 'framer-motion';
import Link from 'next/link';
import Title from './Title';
import { teamData } from '@/data/dummy-data';

interface TeamMember {
    id: string | number;
    name: string;
    role: string;
    description: string;
    image: string;
}

export default function Team() {
    return (
        <section id="team" className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Leadership"
                    heading="Our Team"
                    description="WillTech Engineering Limited is led by a Director with professional experience across Nigeria and the United Kingdom, bringing a balanced perspective to project management, cost consultancy and construction support."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {(teamData as TeamMember[]).map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            className="text-center"
                        >
                            {/* Image */}
                            <motion.div
                                className="mb-4 overflow-hidden rounded-xl border border-orange-200/60 bg-orange-50/60"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-72 object-cover"
                                />
                            </motion.div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#F37335] font-medium text-sm mb-3">
                                    {member.role}
                                </p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link href="" className="inline-block px-8 py-3 bg-blue-800 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300">
                        View Full Team
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
