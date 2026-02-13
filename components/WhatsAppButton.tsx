'use client';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
    const whatsappNumber = '447535951042'; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg hover:shadow-xl transition-shadow"
        >
            <MessageCircle className="w-7 h-7 text-white" />
        </motion.a>
    );
}
