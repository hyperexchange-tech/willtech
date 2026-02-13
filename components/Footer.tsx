'use client';
import { footerLinks, contactInfo } from '@/data/dummy-data';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {

    return (
        <motion.footer className="bg-gray-900 border-t border-orange-600/30 pt-10 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 border-b border-orange-600/30">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{contactInfo.company}</h3>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-400 mb-6">
                            {contactInfo.description}
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-orange-400 transition">
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    {contactInfo.phone.map((p, i) => (
                                        <div key={i} className="hover:text-orange-400 transition">
                                            {p}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    {contactInfo.locations.map((loc, i) => (
                                        <div key={i} className="hover:text-orange-400 transition">
                                            {loc}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="grid grid-cols-3 gap-4">
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold text-base text-white mb-4">
                                    {section.title}
                                </h3>
                                <ul className="text-sm space-y-2">
                                    {section.links.map(
                                        (link: { name: string; url: string }, i) => (
                                            <li key={i}>
                                                <a
                                                    href={link.url}
                                                    className="text-gray-400 hover:text-orange-400 transition"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-6 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} WillTech Engineering Ltd. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600 mt-2">
                        Supporting infrastructure development across Nigeria and the UK
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};