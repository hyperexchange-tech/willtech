import { motion } from 'framer-motion';

export default function ServicesHero() {
    return (
        <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/image3.jpg"
                    alt="Construction site"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <motion.div
                    className="text-center px-4 max-w-3xl mx-auto"
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ color: '#F37335' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                    >
                        Our Services
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                    >
                        Comprehensive engineering and quantity surveying solutions for reliable project delivery
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
