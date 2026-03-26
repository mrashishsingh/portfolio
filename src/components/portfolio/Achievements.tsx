import { motion } from "framer-motion";
import Section from "./Section";
import CountUp from "react-countup";

import leetcodeLogo from "@/assets/logos/leetcode.png";
import hackerrankLogo from "@/assets/logos/hackerrank.png";
import awsLogo from "@/assets/logos/aws.png";

const Achievements = () => (

  <Section id="achievements" title="Achievements">
    <div className="grid gap-8 md:grid-cols-3">


  {/* LeetCode */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
  >
    <img
      src={leetcodeLogo}
      alt="LeetCode"
      className="w-12 h-12 mx-auto mb-4"
    />

    <p className="text-lg font-semibold">
      <CountUp end={150} duration={2} />+
    </p>

    <p className="text-muted-foreground text-sm mt-2">
      DSA problems solved on LeetCode
    </p>
  </motion.div>

  {/* AWS */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
  >
    <img
      src={awsLogo}
      alt="AWS"
      className="w-12 h-12 mx-auto mb-4"
    />

    <p className="text-lg font-semibold">
      AWS Cloud Foundations
    </p>

    <p className="text-muted-foreground text-sm mt-2">
      Badge earned on Credly
    </p>
  </motion.div>

  {/* HackerRank */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3 }}
    whileHover={{ scale: 1.05 }}
    className="glass rounded-2xl p-8 text-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
  >
    <img
      src={hackerrankLogo}
      alt="HackerRank"
      className="w-12 h-12 mx-auto mb-4"
    />

    <p className="text-lg font-semibold">
      5 ⭐
    </p>

    <p className="text-muted-foreground text-sm mt-2">
      C++ badge on HackerRank
    </p>
  </motion.div>

</div>


  </Section>
);

export default Achievements;
