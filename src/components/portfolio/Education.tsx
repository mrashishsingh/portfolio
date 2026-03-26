import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Section from "./Section";

const timeline = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology – Computer Science",
    detail: "CGPA: 6.90",
    period: "Aug 2023 – Present",
  },
  {
    school: "Raghunath Pd. Sharma College",
    degree: "Intermediate (Class XII)",
    detail: "64%",
    period: "2021 - 2023",
  },
  {
    school: "Patna Convent School",
    degree: "Matriculation (Class X)",
    detail: "68%",
    period: "2019 - 2020",
  },
];

const Education = () => (
  <Section id="education" title="Education">
    <div className="relative max-w-2xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-10">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-16"
          >
            <div className="absolute left-3 top-1 w-7 h-7 rounded-full gradient-bg flex items-center justify-center shadow-md">
              <GraduationCap size={14} className="text-primary-foreground" />
            </div>
            <div className="glass rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg">{item.school}</h3>
              <p className="text-muted-foreground text-sm">{item.degree}</p>
              {item.detail && (
                <p className="text-accent text-sm font-medium mt-1">{item.detail}</p>
              )}
              {item.period && (
                <p className="text-xs text-muted-foreground mt-1 code-font">{item.period}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
);

export default Education;
