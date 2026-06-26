"use client";

import { motion } from "framer-motion";

export default function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/971509013058"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-brand flex items-center justify-center shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.92 }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    </motion.a>
  );
}
