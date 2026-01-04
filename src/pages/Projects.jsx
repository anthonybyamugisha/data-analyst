import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ui/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWord, setCurrentWord] = useState(15); // All words visible
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = {
    header: true,
    projects: Array.from({length: 20}, (_, i) => i), // Enough indices for all projects
    cta: true
  };
  
  const titleWords = ['Each', 'project', 'represents', 'a', 'unique', 'challenge', 'and', 'learning', 'experience.', 'From', 'mobile', 'applications', 'to', 'innovative', 'solutions,', 'explore', 'how', 'I', 'turn', 'ideas', 'into', 'reality.'];

  const projects = [
    {
      id: 1,
      title: 'VendorSync - Inventory Management System',
      description: 'A comprehensive inventory management solution that demonstrates end-to-end software engineering from problem analysis to scalable system design.',
      longDescription: 'VendorSync is a comprehensive inventory management solution that demonstrates end-to-end software engineering from problem analysis to scalable system design. This project showcases architectural decision-making, real-time data synchronization challenges, predictive modeling, and mobile-first system design.',
      techStack: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Cloud Functions'],
      features: [
        'Event-driven architecture for real-time inventory updates across distributed clients',
        'Offline-first synchronization with conflict resolution strategy',
        'Predictive demand forecasting using time-series analysis',
        'Role-based access control with Firebase security rules',
        'Optimized database queries for sub-100ms response times',
        'Cross-platform mobile app'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/Vendor sync.jpeg',
      category: 'Mobile App'
    },
    {
      id: 2,
      title: 'Forex Giants Mobile App',
      description: 'A comprehensive forex trading education application designed to teach people forex trading free of charge.',
      longDescription: 'Forex Giants is an innovative forex trading education application developed by Algo FX, designed to teach people forex trading completely free of charge. Built with Flutter, this app provides an intuitive and engaging learning experience for both beginners and experienced traders. The application features interactive lessons, real-time market analysis, trading simulations, and a community of traders to enhance the learning experience. With its beautiful interface and user-friendly design, Forex Giants makes forex education accessible to everyone.',
      techStack: ['Flutter', 'Dart'],
      features: [
        'Comprehensive forex trading courses',
        'Progress tracking and achievements',
        'Beautiful and intuitive UI/UX design'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/forex giants mobile app.jpeg',
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'All Organic Honey Website',
      description: 'A responsive website for All Organic Honey built with React, HTML, and Tailwind CSS.',
      longDescription: 'A beautiful and responsive website for All Organic Honey. Built with React for the frontend, HTML for structure, and Tailwind CSS for styling. The site showcases organic honey products with detailed descriptions, nutritional information, and ordering options. Designed with a nature-inspired color palette to reflect the organic and natural qualities of the honey products.',
      techStack: ['React', 'HTML', 'Tailwind CSS'],
      features: [
        'Responsive design for all devices',
        'Product showcase with detailed descriptions',
        'Nutritional information display',
        'Online ordering system',
        'Contact form for inquiries',
        'Nature-inspired UI/UX design'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/all organic  honey.jpeg',
      category: 'Frontend'
    },
    {
      id: 5,
      title: 'Hotel Management System',
      description: 'A comprehensive hotel management system with advanced reporting capabilities built with Django, HTML, CSS, and MySQL.',
      longDescription: 'A comprehensive hotel management system designed with a strong focus on advanced reporting capabilities. Built with Django for the backend, HTML and CSS for the frontend, and MySQL for the database. The system excels at generating detailed financial, occupancy, and operational reports that provide valuable insights for hotel management.',
      techStack: ['Django', 'HTML', 'CSS', 'MySQL'],
      features: [
        'Advanced Reporting Engine',
        'Financial Performance Analytics',
        'Occupancy Rate Monitoring',
        'Guest Behavior Analysis',
        'Staff Performance Tracking',
        'Inventory Management Reports',
        'Reservation Trend Analysis'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/hotel management system.jpeg',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'AI Chatbot Solutions',
      description: 'Intelligent chatbots built and trained on specific information to respond to user questions and embedded in websites.',
      longDescription: 'Custom AI chatbot solutions designed and developed to understand and respond to user queries based on specific domain knowledge. These chatbots are trained on targeted information sources to provide accurate and relevant responses. The chatbots can be seamlessly embedded into websites to enhance user experience, provide 24/7 customer support, and automate common inquiries. Built with natural language processing and machine learning technologies.',
      techStack: ['Jotform', 'Web Integration'],
      features: [
        'Custom chatbot training on domain-specific data',
        'Natural language understanding and processing',
        'Website integration capabilities',
        '24/7 automated customer support',
        'Conversation flow design',
        'Analytics and usage reporting',
        'Multi-platform deployment'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/ai chat bot.jpeg',
      category: 'Chatbots'
    }
  ];

  const categories = ['All', 'Mobile App', 'Frontend', 'Full Stack', 'Chatbots'];
  
  const getFilteredProjects = () => {
    if (filter === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === filter);
  };

  const getCategoryCount = (category) => {
    if (category === 'All') {
      return projects.length;
    }
    return projects.filter(project => project.category === category).length;
  };

  const filteredProjects = getFilteredProjects();

  // Handle text animations
  useEffect(() => {
    setIsLoaded(true)
    
    // Animate title words sequentially (similar to About page)
    const wordTimer = setTimeout(() => {
      let wordIndex = -1
      const wordInterval = setInterval(() => {
        wordIndex++
        setCurrentWord(wordIndex)
        if (wordIndex >= titleWords.length - 1) {
          clearInterval(wordInterval)
        }
      }, 100)
    }, 500)
    
    return () => {
      clearTimeout(wordTimer)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-primary text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
            <div className="absolute top-20 right-20 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-20 w-36 h-36 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-destructive rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl sm:text-6xl font-bold mb-6 text-foreground transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
            My Projects
          </h1>
          <p className={`text-xl max-w-3xl mx-auto text-muted-foreground transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
            <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {titleWords.map((word, index) => {
                const isVisible = index <= currentWord
                
                return (
                  <span 
                    key={index}
                    className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                      ['mobile', 'applications'].includes(word) ? 'text-primary font-semibold' :
                      ['innovative', 'solutions'].includes(word) ? 'text-accent font-semibold' :
                      'text-muted-foreground'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 0.05}s`,
                      color: isVisible ? undefined : 'transparent',
                      textShadow: isVisible ? '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' : 'none'
                    }}
                  >
                    {word}
                    {index < titleWords.length - 1 && ' '}
                  </span>
                )
              })}
            </span>
          </p>
        </div>
      </section>

      {/* Projects Filter */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                  filter === category
                    ? 'bg-gradient-primary text-primary-foreground shadow-lg'
                    : 'glass text-foreground hover:bg-card/80 hover:border-primary/50'
                }`}
              >
                <span>{category}</span>
                <span className={`text-xs px-2 py-1 rounded-full min-w-[24px] text-center ${
                  filter === category
                    ? 'bg-primary-foreground text-primary font-bold'
                    : 'bg-muted text-foreground'
                }`}>
                  {getCategoryCount(category)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No projects found</h3>
              <p className="text-muted-foreground">There are no projects in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  features={project.features}
                  githubUrl={project.github}
                  image={project.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects and bring innovative ideas to life.
          </p>
          <Link to="/contact" className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl hover:shadow-hover transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;