import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { Button } from "../components/ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const isMobile = useIsMobile()

  const navItems = [
    { label: "About", path: "/" },
    { label: "Resume", path: "/resume" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong shadow-card" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center overflow-hidden">
                <span className="text-primary-foreground font-bold text-lg">BA</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-100" />
              </div>
              <span className="hidden sm:block font-semibold text-foreground">
                ALGOMIND
              </span>
            </Link>

            {/* Desktop Navigation */}
            {!isMobile && (
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active text-foreground" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            )}

            {/* CTA Button - Placeholder for now */}
            {/* Removed the Let's Talk button as requested */}

            {/* Mobile Menu Button */}
            {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-lg"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 glass-strong rounded-2xl p-6 shadow-card"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 border-t border-border"
                >
                  <Button variant="gradient" className="w-full" asChild>
                    <Link to="/contact">
                      Let's Talk
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar