import { motion } from "framer-motion";
import { ReactNode } from "react";

const Section = ({ children, className = "", id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-16 md:py-24 bg-background ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;