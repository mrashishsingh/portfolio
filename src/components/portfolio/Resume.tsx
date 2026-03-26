import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import Section from "./Section";

const Resume = () => (
  <Section id="resume" title="Resume">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-lg mx-auto glass rounded-2xl p-8 text-center shadow-xl"
    >
      <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
        <FileText className="text-primary-foreground" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-2">Anshu Priya — Resume</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Download or view my latest resume highlighting my skills, experience, and education.
      </p>
      <a
        href="/Aryan_CV.pdf"
        className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        <Download size={18} /> Download Resume
      </a>
    </motion.div>
  </Section>
);

export default Resume;
