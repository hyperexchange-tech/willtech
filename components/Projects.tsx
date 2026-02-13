import { motion } from 'framer-motion';
import Title from './Title';
import { Users, Building2, Heart } from 'lucide-react';

export default function Projects() {
    const projectsData = [
        {
            id: 'community',
            title: 'Safe School Transport Initiative',
            category: 'Community Infrastructure',
            description: 'Concept design and costing support for safe pupil transport schemes and community infrastructure.',
            icon: <Users className="w-8 h-8" />
        },
        {
            id: 'infrastructure',
            title: 'Residential Construction Oversight',
            category: 'Diaspora Home Projects',
            description: 'Engineering and cost advisory for small to mid-scale construction and infrastructure initiatives.',
            icon: <Building2 className="w-8 h-8" />
        },
        {
            id: 'health',
            title: 'EdoCare Safe Motherhood Programme',
            category: 'Health Infrastructure',
            description: 'Programme design and cost-control framework improving antenatal access, safe delivery, and emergency referrals.',
            icon: <Heart className="w-8 h-8" />
        }
    ];

    return (
        <section id="projects" className="py-20 2xl:py-32 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <Title
                    title="Success Stories"
                    heading="Conceptual Project Portfolio"
                    // description="Real examples of diaspora investments protected and delivered successfully"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 + i * 0.1 }}
                            className="bg-white border border-orange-200/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-orange-100/60 flex items-center justify-center text-[#F37335]">
                                    {project.icon}
                                </div>
                                <span className="text-xs font-semibold text-[#F37335] uppercase tracking-wide">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <p className="text-gray-600 text-sm">
                        Detailed information available on request.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}