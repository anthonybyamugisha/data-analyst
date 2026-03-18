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
  
  const titleWords = ['Each', 'dashboard', 'and', 'data', 'project', 'represents', 'a', 'unique', 'challenge', 'and', 'analytical', 'journey.', 'From', 'business', 'intelligence', 'solutions', 'to', 'predictive', 'analytics,', 'explore', 'how', 'I', 'transform', 'complex', 'data', 'into', 'actionable', 'insights', 'and', 'strategic', 'decisions.'];

  const projects = [
    {
      id: 8,
      title: 'Daily Sales Dashboard',
      description: 'Interactive dashboard visualizing daily sales metrics, KPIs, and performance trends with drill-down capabilities.',
      longDescription: 'An interactive daily sales dashboard that visualizes key metrics, KPIs, and performance trends. The dashboard features real-time data updates, drill-down capabilities, and customizable views to help stakeholders make informed decisions.',
      techStack: ['Excel'], // Only Excel as requested
      features: [
        'Real-time sales metrics visualization',
        'Interactive filtering and drill-down capabilities',
        'Customizable KPI tracking and alerts',
        'Comparative analysis across time periods',
        'Export functionality for reports'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/Daily sales Dashoard.png', // Using existing image
      category: 'Dashboards',
      liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoi...'
    },
    {
      id: 9,
      title: 'Finance Summary Dashboard',
      description: 'Comprehensive financial dashboard aggregating data from multiple sources to provide strategic insights.',
      longDescription: 'A comprehensive financial dashboard that aggregates data from multiple sources to provide strategic insights. The dashboard enables data-driven decision making through interactive visualizations and automated reporting.',
      techStack: ['Power BI'], // Only Power BI as requested
      features: [
        'Multi-source data aggregation',
        'Automated report generation',
        'Strategic KPI monitoring',
        'Ad-hoc analysis capabilities',
        'Scheduled report distribution'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/Finance summary dashboard.png', // Using existing image
      category: 'Dashboards',
      liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoi...'
    },
    {
      id: 7,
      title: 'Algomind Hive - AI-Powered Beekeeping Intelligence Platform',
      description: 'An advanced AI-powered beekeeping intelligence platform that transforms raw environmental and hive data into practical decisions.',
      longDescription: 'Algomind Hive is an advanced AI-powered beekeeping intelligence platform that transforms raw environmental and hive data into practical decisions. The system combines climate data, bee behavior data, and market signals to predict, analyze, and recommend actions that improve honey yield, reduce colony losses, and optimize market decisions.',
      techStack: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap 5.3', 'SQLite', 'Render'],
      features: [
        'Predictive Analytics for hive conditions, nectar availability, and market trends',
        'Real-time monitoring of hive health and environmental factors with automated alerts',
        'Actionable recommendations based on predictive models and expert knowledge',
        'Climate intelligence integrating weather data and environmental factors',
        'Market insights with price forecasting and optimal selling recommendations',
        'Educational resources with access to best practices and expert knowledge'
      ],
      github: 'https://github.com/anthonybyamugisha/',
      image: '/images/algomind_hive.png',
      category: 'Full Stack',
      liveUrl: 'https://algomindhive.onrender.com'
    },
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

  const categories = ['All', 'Mobile App', 'Frontend', 'Full Stack', 'Chatbots', 'Dashboards'];
  
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
      <section className="bg-gradient-primary text-white py-12 sm:py-16 relative overflow-hidden">
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
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0.8s' }}>
            My Projects
          </h1>
          <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
            <span className="flex flex-wrap justify-center gap-1 sm:gap-2 px-2">
              {titleWords.map((word, index) => {
                const isVisible = index <= currentWord
                
                return (
                  <span 
                    key={index}
                    className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                      ['mobile', 'applications', 'dashboards'].includes(word) ? 'text-primary font-semibold' :
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
      <section className="py-6 sm:py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-1 sm:space-x-2 ${
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
      <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 sm:py-20">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 px-4">No projects found</h3>
              <p className="text-sm sm:text-base text-muted-foreground px-4">There are no projects in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  features={project.features}
                  githubUrl={project.github}
                  liveUrl={project.liveUrl}
                  image={project.image}
                  category={project.category} /* Pass the category prop */
                  delay={index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-6">Let's Work Together</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Ready to transform your data into actionable insights? Let's collaborate to unlock the power of your data through analytics, dashboards, and business intelligence solutions.
          </p>
          <Link to="/contact" className="bg-gradient-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-hover transition-all duration-300 font-semibold shadow-lg transform hover:scale-105 inline-block text-sm sm:text-base">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;