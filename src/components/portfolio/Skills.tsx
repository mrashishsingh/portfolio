import { motion } from "framer-motion";
import {
  Code2, FileCode, Terminal, Database, Brain,
  Server, Container, GitBranch, Cloud, Layers,
  Users, Lightbulb, Zap, Target
} from "lucide-react";
import Section from "./Section";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "C", icon: Code2 },
      { name: "C++", icon: Code2 },
      { name: "Python", icon: FileCode },
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: FileCode },
      { name: "JavaScript", icon: Terminal },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", icon: Server },
      { name: "Bootstrap", icon: Layers },
    ],
  },
  {
    title: "Tools / Platforms",
    items: [
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch },
      { name: "AWS", icon: Cloud },
      // { name: "Apache Kafka", icon: Zap },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Analytical Thinking", icon: Brain },
      { name: "Problem Solving", icon: Target },
      { name: "Quick Learning", icon: Lightbulb },
      { name: "Team Collaboration", icon: Users },
    ],
  },
];

const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: ci * 0.1 }}
          className="glass rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
        >
          <h3 className="text-lg font-bold mb-4 text-accent">{cat.title}</h3>
          <div className="flex flex-wrap gap-3">
            {cat.items.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg text-sm font-medium text-secondary-foreground cursor-default"
                >
                  <Icon size={28} className="text-primary" />
                  {skill.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default Skills;
