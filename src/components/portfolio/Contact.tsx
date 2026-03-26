import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Section from "./Section";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out, Ashish will get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 shadow-md space-y-4"
        >
          <div>
            <label className="text-sm font-medium block mb-1">Name</label>
            <input
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input
              required
              type="email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Message</label>
            <textarea
              required
              maxLength={1000}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity w-full justify-center"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h3 className="text-xl font-bold">Let's Connect</h3>
          <p className="text-muted-foreground text-sm">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>

          <div className="space-y-4">
            <a
              href="https://github.com/mrashishsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Github size={18} />
              </div>
              github.com/ashish
            </a>
            <a
              href="www.linkedin.com/in/ashish702singh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Linkedin size={18} />
              </div>
              linkedin.com/in/ashish702singh
            </a>
            <a
              href="mailto:ashish@gmail.com"
              className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Mail size={18} />
              </div>
              ashishkumarsingh@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
