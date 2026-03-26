import { motion } from "framer-motion";
import Section from "./Section";

import nptelImg from "../../assets/certificates/nptel.png";
import oracleImg from "../../assets/certificates/oracle.png";
import networkImg from "../../assets/certificates/JP MORGAN.png";
import computerImg from "../../assets/certificates/computer-network.png";

const certs = [
{
name: "Privacy Security in Social Media",
issuer: "NPTEL",
image: nptelImg,
link: "/certificates/nptel-security.pdf",
},
{
name: "Master Generative AI & Generative AI tools",
issuer: "Infosys",
image: oracleImg,
link: "/certificates/oracle-foundation.pdf",
},
{
name: "Computational Theory",
issuer: "Infosys",
image: networkImg,
link: "/certificates/JP MORGAN.pdf",
},
{
name: "The Bits and Bytes of Computer Networking",
issuer: "Coursera",
image: computerImg,
link: "/certificates/computer-networking.pdf",
},
];

const Certifications = () => (

  <Section id="certifications" title="Certifications">
    <div className="grid gap-8 sm:grid-cols-2">


  {certs.map((c, i) => (
    <motion.a
      key={i}
      href={c.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >

      {/* Preview Image */}
      <div className="overflow-hidden">
        <img
          src={c.image}
          alt={c.name}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text */}
      <div className="p-5 text-center">
        <h3 className="font-bold">{c.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{c.issuer}</p>
      </div>

    </motion.a>
  ))}

</div>


  </Section>
);

export default Certifications;
