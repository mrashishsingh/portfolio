import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-20 px-4 sm:px-6 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text"
        >
          {title}
        </motion.h2>
      )}
      {children}
    </div>
  </section>
);

export default Section;
