'use client';

import { motion } from 'framer-motion';
import Title from '@/components/Title';
import { teamData } from '@/data/dummy-data';

const teamDepartments = [
    {
        department: 'Founder / Initiator',
        description: 'Vision and strategy for WillTech',
        members: []
    },
    {
        department: 'Director',
        description: 'Overall leadership and project oversight',
        members: []
    },
    {
        department: 'Design',
        description: 'Technical design and planning',
        members: []
    },
    {
        department: 'Project Management',
        description: 'Project coordination and delivery',
        members: []
    },
    {
        department: 'Legal',
        description: 'Legal compliance and documentation',
        members: []
    },
    {
        department: 'Sales',
        description: 'Client relations and business development',
        members: []
    }
];

export default function TeamPage() {
    return (
        <section className="py-20 2xl:py-32">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Our Team"
                    heading="Meet WillTech Team"
                    description="Experienced professionals dedicated to delivering excellence in project management and engineering consultancy."
                />

                <div className="space-y-16 mt-12">
                    {teamDepartments.map((dept, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.05 }}
                            className="border-t pt-12"
                        >
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                                    {dept.department}
                                </h2>
                                <p className="text-gray-600">{dept.description}</p>
                            </div>

                            {dept.members.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {dept.members.map((member, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ y: 40, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 + idx * 0.05 }}
                                            className="text-center"
                                        >
                                            <div className="mb-4 overflow-hidden rounded-xl border border-orange-200/60 bg-orange-50/60">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-64 object-cover"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {member.name}
                                            </h3>
                                            <p className="text-[#F37335] font-medium text-sm mb-2">
                                                {member.role}
                                            </p>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {member.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600 italic">Team members to be announced</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
