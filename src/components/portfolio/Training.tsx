import { motion } from "framer-motion";
import Section from "./Section";
import dsaImg from "@/assets/dsa-training.png";

const Training = () => (

  <Section id="training" title="Training">
    <div className="flex justify-center">


  <motion.a
    href="/certificates/dsa-training.pdf"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.03 }}
    className="glass rounded-2xl overflow-hidden max-w-md shadow-lg hover:shadow-2xl transition-all duration-300 group border border-primary/20 hover:border-primary/40"
  >
    
    {/* Image Preview */}
    <div className="overflow-hidden">
      <img
        src={dsaImg}
        alt="DSA Training"
        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Text Section */}
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold">
        Data Structures and Algorithms Training
      </h3>

      <p className="text-sm text-muted-foreground mt-2">
        Covered core DSA topics including arrays, linked lists, trees, graphs, and dynamic programming.<br></br>
        W3Grads • Jun'25 – Jul'25
      </p>

      <div className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
        Problem Solving • Algorithms • Coding Interviews
      </div>
    </div>

  </motion.a>

</div>

  </Section>
);

export default Training;
