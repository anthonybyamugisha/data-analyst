import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import anthonyImage from '/images/anthony.jpg'
import { Card, CardContent } from '../components/ui/Card'
import { Alert, AlertTitle, AlertDescription } from '../components/ui/Alert'

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWord, setCurrentWord] = useState(-1) // Start with no words visible
  const [animatedSections, setAnimatedSections] = useState({})
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = [0, 1, 2, 3]
  
  const nameWords = ['BYAMUGISHA', 'ANTHONY']
  const taglineWords = ['Junior','Data', 'Analyst', 'Specializing', 'in', 'data', 'analysis,', 'business', 'intelligence,', 'and', 'visualization.']

  const skills = [
    {
      title: 'Data Analysis & Visualization',
      description: 'Data Analysis, Business Intelligence, Power BI, Excel',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 00-2 2h-2a2 2 0 00-2-2z" />
        </svg>
      )
    },
    {
      title: 'Full Stack Development',
      description: 'React, Django, Flutter',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Data Science & Analytics',
      description: 'Python, Pandas, NumPy',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Database & Backend',
      description: 'Python (Django), MySQL',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    }
  ]

  const beyondAnalysis = [
    {
      title: 'Learning',
      description: 'Always exploring new technologies',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Community',
      description: 'Mentoring other developers',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'Finding creative solutions',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  // Handle scroll animations
  useEffect(() => {
    setIsLoaded(true)
    
    // Animate tagline words sequentially
    const wordTimer = setTimeout(() => {
      let wordIndex = -1
      const wordInterval = setInterval(() => {
        wordIndex++
        setCurrentWord(wordIndex)
        if (wordIndex >= taglineWords.length - 1) {
          clearInterval(wordInterval)
        }
      }, 150)
    }, 1000)
    
    // Handle section animations on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0
        if (isVisible && !animatedSections[index]) {
          setAnimatedSections(prev => ({ ...prev, [index]: true }))
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial positions
    
    return () => {
      clearTimeout(wordTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen flex items-center bg-gradient-primary">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full opacity-95 animate-float transition-all duration-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
            style={{
              backgroundImage: `url(${anthonyImage})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              boxShadow: '0 0 150px rgba(59, 130, 246, 0.6), 0 0 300px rgba(147, 51, 234, 0.5)',
              transitionDelay: '0.5s'
            }}
          ></div>
        </div>
        
        {/* Multi-layered Overlay for Professional Look - Reduced top coverage */}
        <div className="absolute inset-0 bg-gradient-glow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
        
        {/* Backdrop blur for depth - Reduced */}
        <div className="absolute inset-0 backdrop-blur-[0.2px]"></div>
        
        {/* Enhanced Animated background elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-20' : '-translate-y-10 opacity-0'}`} style={{ animationDelay: '2s', transitionDelay: '0.8s' }}></div>
          <div className={`absolute top-20 right-20 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-20' : '-translate-y-10 opacity-0'}`} style={{ animationDelay: '2s', transitionDelay: '1.0s' }}></div>
          <div className={`absolute bottom-20 left-20 w-36 h-36 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-20' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '4s', transitionDelay: '1.2s' }}></div>
          <div className={`absolute top-1/2 right-1/4 w-28 h-28 bg-destructive rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-20' : '-translate-y-10 opacity-0'}`} style={{ animationDelay: '1s', transitionDelay: '1.4s' }}></div>
          <div className={`absolute bottom-10 right-10 w-24 h-24 bg-primary/80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-20' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '3s', transitionDelay: '1.6s' }}></div>
          <div className={`absolute top-1/3 left-1/3 w-20 h-20 bg-secondary/80 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-15' : '-translate-y-10 opacity-0'}`} style={{ animationDelay: '5s', transitionDelay: '1.8s' }}></div>
        </div>
        
        {/* Minimal depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 z-10">
          <div className="text-center">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-gradient">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {nameWords.map((word, index) => (
                    <span 
                      key={index}
                      className={`inline-block transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0'}`}
                      style={{ 
                        transitionDelay: `${0.5 + index * 0.3}s`,
                        textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                        WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </h1>
              <div className={`w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full transition-all duration-1000 shadow-lg ${isLoaded ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} style={{ transitionDelay: '1.3s', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }}></div>
            </div>
            <div className="mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-5xl mx-auto">
                <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
                  {taglineWords.map((word, index) => {
                    const isVisible = index <= currentWord
                    const direction = index % 4
                    let transformClass = ''
                    
                    if (!isVisible) {
                      switch(direction) {
                        case 0: transformClass = '-translate-x-20 -translate-y-10 opacity-0 rotate-12'; break
                        case 1: transformClass = 'translate-x-20 -translate-y-8 opacity-0 -rotate-12'; break
                        case 2: transformClass = '-translate-x-16 translate-y-12 opacity-0 rotate-6'; break
                        case 3: transformClass = 'translate-x-24 translate-y-8 opacity-0 -rotate-6'; break
                      }
                    }
                    
                    return (
                      <span 
                        key={index}
                        className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                          ['innovative', 'digital', 'solutions'].includes(word) ? 'text-yellow-300 font-semibold' :
                          ['modern', 'web', 'technologies'].includes(word) ? 'text-blue-200 font-semibold' :
                          'text-white'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 0.05}s`,
                          color: isVisible ? undefined : 'transparent',
                          textShadow: isVisible ? '1px 1px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)' : 'none'
                        }}
                      >
                        {word}
                        {index < taglineWords.length - 1 && ' '}
                      </span>
                    )
                  })}
                </span>
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '2.5s' }}>
              <Link
                to="/projects"
                className="w-full sm:w-auto group glass hover:bg-card/80 text-foreground font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-100 transform hover:scale-110 hover:shadow-glow"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View My Work
                </span>
              </Link>
              <Link
                to="/resume"
                className="w-full sm:w-auto group glass hover:bg-card/80 text-foreground font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-100 transform hover:scale-110 hover:shadow-glow"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Visit my resume
                </span>
              </Link>
            </div>
            
            {/* Scroll indicator */}
            <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-70' : 'translate-y-10 opacity-0'}`} style={{ 
              transitionDelay: '3s',
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.8))'
            }}>
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{
                  textShadow: '0 0 10px rgba(0,0,0,0.8)',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.8))'
                }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className={`py-20 bg-background relative overflow-hidden transform transition-all duration-1000 ${animatedSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="section-title mb-4 relative transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '200ms' }}>
                What I Do
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></div>
              </h2>
            </div>
            <p className="section-subtitle max-w-3xl mx-auto transform transition-all duration-1000 hover:text-foreground translate-y-0 opacity-100" style={{ transitionDelay: '400ms' }}>
              I specialize in building modern, scalable solutions across multiple platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.title}
                className={`group p-6 rounded-xl transition-all duration-100 transform hover:-translate-y-4 card-hover relative overflow-hidden hover:shadow-hover hover:border-primary/30 ${animatedSections[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                <CardContent className="p-0 relative z-10">
                  {/* Icon container with enhanced animation */}
                  <div className="text-primary mb-4 transform transition-all duration-100 group-hover:scale-110 group-hover:text-secondary">
                    <div className="p-3 bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-100">
                      {skill.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-100">{skill.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-100">{skill.description}</p>
                  
                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-100 origin-left"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-100 rounded-bl-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Coding Section */}
      <section className={`py-20 bg-background relative overflow-hidden transform transition-all duration-1000 ${animatedSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4 relative inline-block transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '500ms' }}>
              Beyond Analysis
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-primary rounded-full"></div>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto transform transition-all duration-1000 hover:text-foreground translate-y-0 opacity-100" style={{ transitionDelay: '700ms' }}>
              My commitment to growth and community extends beyond just Data Analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {beyondAnalysis.map((item, index) => (
              <Card
                key={item.title}
                className={`group text-center p-6 rounded-xl card-hover transform hover:-translate-y-2 hover:scale-105 hover:shadow-hover hover:border-primary/30 transition-all duration-100 ${animatedSections[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transitionDelay: `${900 + index * 100}ms`
                }}
              >
                <CardContent className="p-0">
                  {/* Enhanced icon container */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="absolute w-16 h-16 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-100 transform group-hover:scale-125"></div>
                    <div className="text-primary group-hover:text-secondary flex justify-center transform transition-all duration-100 group-hover:scale-125 group-hover:rotate-6 z-10">
                      <div className="p-3 bg-card rounded-full transition-shadow duration-100">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary mb-3 transition-colors duration-100">{item.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-100">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={`py-20 bg-background relative overflow-hidden transform transition-all duration-1000 ${animatedSections[3] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping ${animatedSections[3] ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0s', transitionDelay: '0.5s' }}></div>
          <div className={`absolute top-3/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-ping ${animatedSections[3] ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1s', transitionDelay: '0.7s' }}></div>
          <div className={`absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full animate-ping ${animatedSections[3] ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '2s', transitionDelay: '0.9s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Alert className={`glass rounded-2xl p-8 transform transition-all duration-1000 hover:scale-105 border-border/50 hover:shadow-glow ${animatedSections[3] ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <AlertTitle className="text-2xl font-bold text-foreground mb-4 relative transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '1000ms' }}>
              <span className="text-gradient">
                Ready to Unlock the Power of Your Data?
              </span>
            </AlertTitle>
            <AlertDescription className="text-xl mb-6 max-w-3xl mx-auto text-muted-foreground transform transition-all duration-1000 hover:text-foreground translate-y-0 opacity-100" style={{ transitionDelay: '1200ms' }}>
              Let’s work together to transform your data into actionable insights, interactive dashboards, and smart business decisions.
            </AlertDescription>
            <Link
              to="/contact"
              className="group inline-flex items-center bg-gradient-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-100 transform hover:scale-110 hover:shadow-glow"
              style={{ transitionDelay: '1400ms' }}
            >
              <span className="mr-2">Let's Talk</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Alert>
        </div>
      </section>
    </div>
  )
}

export default AboutMe