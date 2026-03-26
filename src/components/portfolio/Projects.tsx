import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Section from "./Section";
import clickstreamImg from "@/assets/project-clickstream.png";
import portfolioImg from "@/assets/project-portfolio.png";
import schedulerImg from "@/assets/project-scheduler.jpg";

const projects = [
{
title: "🚇 Metro Ticket Booking System",
tech: ["Java", "JDBC", "MySQL", "OOP"],
desc: "A console-based metro ticket booking application developed using Core Java and OOP principles. The system allows users to register, log in, select routes, calculate fares, and generate tickets. It integrates with MySQL using JDBC to store user data, booking details, and transaction logs, along with an admin module for system management.",
github: "https://github.com/mrashishsingh/MetroTicketBooking/tree/main/MetroTicketBooking-main",
image: clickstreamImg,
},
{
title: "Portfolio Website",
tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
desc: "A responsive personal portfolio website built using HTML, CSS, and JavaScript featuring smooth scroll navigation, dark/light mode toggle, animated section transitions, and interactive skill icons. Deployed on GitHub Pages with mobile-first design and SEO optimization.",
github: "https://github.com/",
image: portfolioImg,
},
// {
// title: "CPU Scheduler Simulator",
// tech: ["Python", "Matplotlib", "Simulation"],
// desc: "A CPU scheduling simulator implementing FCFS, SJF, Priority, and Round Robin algorithms using Python. Generates visual Gantt charts for each algorithm and calculates key metrics like average waiting time, turnaround time, and response time for performance comparison.",
// github: "https://github.com/aryan0726/CPU-Scheduler-Final",
// image: schedulerImg,
// },
];

const Projects = () => (

  <Section id="projects" title="Projects">
    <div className="flex flex-col gap-32">
      {projects.map((p, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16 min-h-[80vh]`}
          >
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                {p.title}
              </h3>


          <p className="text-base text-muted-foreground leading-relaxed">
            {p.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl gradient-bg text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 w-full"
        >
          <div className="glass rounded-2xl p-3 shadow-lg hover:shadow-2xl transition-shadow group overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-auto rounded-xl object-cover aspect-video group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </motion.div>
    );
  })}
</div>


  </Section>
);

export default Projects;
