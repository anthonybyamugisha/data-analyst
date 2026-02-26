import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "./ui/AlertDialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/anthonybyamugisha", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anthonybyamugisha", label: "LinkedIn" },
    { icon: Mail, href: "mailto:byamugishanthony@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-20 border-t border-border/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">BA</span>
              </div>
              <span className="font-semibold text-foreground">Byamugisha Anthony</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Aspiring Computer Scientist & Data Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-8">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/resume" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </Link>
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <AlertDialog key={social.label}>
                <AlertDialogTrigger asChild>
                  <button
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                    aria-label={`Open ${social.label}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Leaving the site</AlertDialogTitle>
                    <AlertDialogDescription>
                      You are about to leave this site and open {social.label}. Are you sure you want to continue?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Byamugisha Anthony. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer