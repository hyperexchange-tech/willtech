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
<p className="text-gray-700 text-lg leading-relaxed mb-4">
  We support projects across the public and private sectors:
</p>

<ul className="text-gray-700 text-lg leading-relaxed list-disc pl-6 mb-6 space-y-1">
  <li>Government & public institutions</li>
  <li>Property developers</li>
  <li>Corporate organisations</li>
  <li>Private clients</li>
  <li>Nigerians in diaspora</li>
  <li>NGOs & educational institutions</li>
</ul>

<p className="text-gray-700 text-lg leading-relaxed">
  Whether delivering infrastructure, managing construction or providing technical advisory services, our role is to ensure projects are executed professionally, transparently and efficiently.
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
