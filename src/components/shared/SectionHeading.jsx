import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {label && (
        <span className="inline-block text-primary text-xs font-mono uppercase tracking-[0.2em] mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-accent" />
    </motion.div>
  );
}