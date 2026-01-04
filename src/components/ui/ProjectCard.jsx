import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  features = [],
  githubUrl,
  liveUrl,
  image,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-hover hover:border-primary/30"
    >
      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        {features.length > 0 && (
          <ul className="text-sm text-muted-foreground mb-4 space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-border/50">
          <Link 
            to={`/projects/${id}`}
            className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Details
            <ExternalLink className="w-4 h-4" />
          </Link>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted transition-colors duration-300 flex items-center justify-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;