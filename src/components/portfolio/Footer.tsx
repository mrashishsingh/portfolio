import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ashish Kumar Singh. Built with passion.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/mrashishsingh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github size={18} />
        </a>
        <a href="www.linkedin.com/in/ashish702singh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:ashishkumar702@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
