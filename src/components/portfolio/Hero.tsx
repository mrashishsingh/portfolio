import { motion } from "framer-motion";
import { Github, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => (

  <section
    id="about"
    className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-16 relative overflow-hidden"
  >
    {/* Decorative blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo/10 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />


<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="text-center max-w-3xl relative z-10"
>
  
  {/* Profile Image */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="w-60 h-60 rounded-full overflow-hidden mx-auto mb-10 border-4 border-primary/30 shadow-2xl"
  >
    <img
      src="/profile.jpeg"
      alt="Ashish Kumar Singh"
      className="w-full h-full object-cover"
    />
  </motion.div>

  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
    Hi, I'm <span className="gradient-text">Ashish Kumar Singh</span>
  </h1>

  <p className="text-lg md:text-xl text-accent font-medium code-font mb-4">
  <TypeAnimation
    sequence={[
      "Computer Science Student",
      2000,
      "Aspiring Software Developer",
      2000,
      "Aspiring Cloud Engineer",
      2000,
    ]}
    wrapper="span"
    speed={80}
    repeat={Infinity}
  />
</p>

  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
    A highly motivated Computer Science student with strong problem-solving skills and a
    passion for building scalable software systems and data-driven applications.
    Proficient in C++ and Python with experience in modern web technologies, real-time data pipelines,
    cloud platforms, and algorithmic problem solving.
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap gap-4 justify-center">
    <a
      href="/CVAshish.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
    >
      <FileText size={18} /> View Resume
    </a>

    <a
      href="https://github.com/mrashishsingh"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
    >
      <Github size={18} /> GitHub
    </a>
  </div>
</motion.div>


  </section>
);

export default Hero;
