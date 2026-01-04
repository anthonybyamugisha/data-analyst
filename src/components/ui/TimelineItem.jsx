import { motion } from "framer-motion";
import { Calendar, Award } from "lucide-react";

const TimelineItem = ({
  title,
  institution,
  period,
  description,
  achievement,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary shadow-glow" />

      <div className="glass rounded-xl p-5 transition-all duration-300 hover:shadow-hover hover:border-primary/30">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {period}
          </span>
        </div>
        <p className="text-primary font-medium mb-2">{institution}</p>
        {description && (
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
        )}
        {achievement && (
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">{achievement}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TimelineItem;