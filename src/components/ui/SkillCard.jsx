import { motion } from "framer-motion";
import { Badge } from "./Badge";

const SkillCard = ({ title, icon: Icon, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group glass rounded-2xl p-6 transition-all duration-300 hover:shadow-hover hover:border-primary/30"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-all">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;