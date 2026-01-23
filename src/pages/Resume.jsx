import React, { useEffect, useState } from 'react'
import anthonyImage from '/images/anthony.jpg'
import SkillCard from '../components/ui/SkillCard'
import TimelineItem from '../components/ui/TimelineItem'
import { Badge } from '../components/ui/Badge'
import { Code, Cpu, Zap } from 'lucide-react'

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWord, setCurrentWord] = useState(18) // All words visible
  const [animatedSections, setAnimatedSections] = useState({})
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = [0, 1, 2, 3, 4, 5]
  
  const nameWords = ['BYAMUGISHA', 'ANTHONY']
  const titleWords = ['Junior', 'Data', 'BI', ',','Analyst', 'and', 'Data', 'Scientist']
  
  const education = [
    {
      period: '2024-Present',
      institution: 'Makerere University',
      degree: 'Bachelor of Science in Computer Science',
      status: 'Current'
    },
    {
      period: 'Dec 2025-Present',
      institution: 'WorldQuant University',
      degree: 'Data Science Lab',
      status: 'Current'
    },
    {
      period: '2021-2023',
      institution: 'Buddo Secondary School',
      degree: 'UACE (20/20 points, all Distinctions)',
      status: 'Completed'
    },
    {
      period: '2017-2020',
      institution: 'Mwizi Secondary School',
      degree: 'UCE (14 aggregates in 8 subjects)',
      status: 'Completed'
    },
    {
      period: '2009-2016',
      institution: 'Akashabo Primary School',
      degree: 'PLE (8 aggregates)',
      status: 'Completed'
    }
  ]

  const awards = [
    {
      title: 'Best Student Overall Award',
      year: '2024',
      institution: 'Buddo Secondary School',
      description: 'Recognized as the Best Student Overall in the Uganda Advanced Certificate of Education (UACE) examinations at Buddo S.S. Scored the maximum 20/20 points (all Distinctions, including ICT D1 and General Paper D2). Earned the prestigious title of "Achiever", an honor reserved exclusively for students attaining the highest academic distinction at Buddo S.S. Featured among the top students in Uganda (New Vision, March 2024).'
    },
    {
      title: 'Outstanding Academic Performance Award',
      year: '2021',
      institution: 'Mwizi Secondary School',
      description: 'Recognized as the Best Student Overall at Mwizi Secondary School in the Uganda Certificate of Education (UCE) examinations. Scored 14 aggregates in 8 subjects, the highest performance in the school and across the county. Ranked 2nd in Rwampara District and among the top students.'
    },
    {
      title: 'Best Student Overall Award',
      year: '2017',
      institution: 'Akashabo Primary School',
      description: 'Awarded for being the best student in the school during Primary Leaving Examination (PLE). Scored 8 aggregates, getting D2 in each paper.'
    }
  ]

  const skills = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'SQL'],
      delay: 0.1
    },
    {
      title: 'Data Science & Analytics',
      icon: Cpu,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI'],
      delay: 0.2
    },
    {
      title: 'Web & Application Development',
      icon: Zap,
      skills: ['React', 'Django', 'Flutter', 'HTML', 'CSS'],
      delay: 0.3
    }
  ]

  const languages = [
    { language: 'English', proficiency: 'Proficient', level: 4 },
    { language: 'Runyankole, Rukiga', proficiency: 'Native', level: 5 },
    { language: 'Luganda', proficiency: 'Proficient', level: 4 }
  ]

  // Handle scroll animations
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
      {/* Header Section */}
      <section className="bg-gradient-primary text-white py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-destructive rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Circular Image - Top Right */}
          <div className="absolute top-4 -right-2 md:-right-8 lg:-right-12 z-20">
            <div 
              className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-cover bg-center border-4 border-white shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float"
              style={{
                backgroundImage: `url(${anthonyImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.5)'
              }}
            ></div>
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="text-center pr-16 md:pr-20 lg:pr-24">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 transform transition-all duration-1000 translate-y-0 opacity-100 scale-100" style={{ 
              color: '#fff', 
              opacity: isLoaded ? 1 : 0,
              textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
            }}>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {nameWords.map((word, index) => (
                  <span 
                    key={index}
                    className={`inline-block transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0'}`}
                    style={{ 
                      transitionDelay: `${0.5 + index * 0.3}s`,
                      color: '#fff', 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
                      WebkitTextStroke: '1px rgba(255,255,255,0.1)'
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </h1>
            <h2 className="text-xl sm:text-2xl mb-6 transform transition-all duration-1000 translate-y-0 opacity-100" style={{ 
              color: '#fff', 
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '1.3s',
              textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
            }}>
              <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {titleWords.map((word, index) => {
                  const isVisible = index <= currentWord
                  
                  return (
                    <span 
                      key={index}
                      className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                        ['Computer', 'Scientist'].includes(word) ? 'text-yellow-300 font-semibold' :
                        ['Data', 'Enthusiast'].includes(word) ? 'text-blue-200 font-semibold' :
                        'text-white'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 0.1}s`,
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
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 transform transition-all duration-1000 translate-y-0 opacity-100" style={{ 
              color: '#fff', 
              opacity: isLoaded ? 1 : 0,
              transitionDelay: '2.5s'
            }}>
              <div className="flex items-center space-x-2 transform transition-all duration-500 hover:scale-105 translate-x-0 opacity-100" style={{ transitionDelay: '2.7s' }}>
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Makerere, Kampala Uganda</span>
              </div>
              <div className={`flex items-center space-x-2 transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '2.9s' }}>
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '0.5s' }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+256748161708 / +256769864032</span>
              </div>
              <div className={`flex items-center space-x-2 transform transition-all duration-500 hover:scale-105 ${
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`} style={{ transitionDelay: '3.1s' }}>
                <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20" style={{ animationDelay: '1s' }}>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:byamugishanthony@gmail.com" className="hover:text-blue-300 transition-all duration-300 hover:underline" style={{ color: '#fff', opacity: 1 }}>
                  byamugishanthony@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Personal Statement */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Personal Statement
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <div className="glass p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-border relative z-10">
              <p className="text-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                Data analytics driven person with a good foundation in data analysis, business intelligence, and visualization, focused on turning raw data into clear, actionable insights. Currently advancing my skills through the Data Science Lab at WorldQuant University, where I work with real world datasets to perform data cleaning, analysis, and statistical exploration, and to apply data driven approaches to solve practical problems. I am actively learning Power BI, where I design interactive dashboards and reports that help stakeholders track KPIs, understand performance, and make informed decisions. Alongside analytics, I bring solid full stack web and mobile development experience. I build responsive web interfaces using React, HTML, and CSS, develop cross-platform mobile applications with Flutter, and create scalable backend systems using Python (Django) with MySQL. This technical background allows me to understand data at its source and build reliable, end to end data powered solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Education Timeline
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="space-y-2">
            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                institution={edu.institution}
                period={edu.period}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Awards and Honors */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Outstanding Academic Achievements
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="space-y-2">
            {awards.map((award, index) => (
              <TimelineItem
                key={index}
                title={award.title}
                institution={award.institution}
                period={award.year}
                description={award.description}
                achievement="Outstanding Achievement"
                delay={index * 0.1 + 0.3}
              />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Technical Expertise
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory) => (
              <SkillCard 
                key={skillCategory.title}
                title={skillCategory.title}
                icon={skillCategory.icon}
                skills={skillCategory.skills}
                delay={skillCategory.delay}
              />
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Tools
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">Microsoft Excel</span>
                  <span className="text-sm font-medium text-primary">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">SQL</span>
                  <span className="text-sm font-medium text-primary">65%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">Power BI</span>
                  <span className="text-sm font-medium text-primary">70%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">Python and Data Science libraries</span>
                  <span className="text-sm font-medium text-primary">50%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-gradient-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Certificates
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Business Analysis Basics</h4>
                    <p className="text-sm text-muted-foreground mb-2">Simplilearn</p>
                    <p className="text-sm text-muted-foreground">Issued: Jan 2026</p>
                    <a href="https://simpli.app.link/ZqQLZq6aNZb" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">Show Credential</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Data Science and Analytics</h4>
                    <p className="text-sm text-muted-foreground mb-2">HP Life</p>
                    <p className="text-sm text-muted-foreground">Issued: Dec 2025</p>
                    <a href="https://www.life-global.org/certificate/39092993-e762-457a-97e6-39193cfc8163" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">Show Credential</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Artificial intelligence for Business</h4>
                    <p className="text-sm text-muted-foreground mb-2">Simplilearn</p>
                    <p className="text-sm text-muted-foreground">Issued: Sep 2025</p>
                    <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MDY3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODk2ODk0MV85MTgzMTU5MTc1Nzc0ODIxMjM1Mi5wbmciLCJ1c2VybmFtZSI6IkJZQU1VR0lTSEEgQU5USE9OWSJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8968941_91831591757748212352.png&_branch_match_id=1535602664010078382&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1jeMDHK2MDT2cA5Psq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FACxPkLA9AAAA" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">Show Credential</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <div className="glass rounded-xl p-6 border border-border hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Prompt Engineering</h4>
                    <p className="text-sm text-muted-foreground mb-2">Simplilearn</p>
                    <p className="text-sm text-muted-foreground">Issued: Aug 2025</p>
                    <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MjgzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODgxMDk3NF85MTgzMTU5MTc1NTUzNzk3MjU1OS5wbmciLCJ1c2VybmFtZSI6IkJZQU1VR0lTSEEgQU5USE9OWSJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8810974_91831591755537972559.png&_branch_match_id=1535602664010078382&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1i%2BIqnJNcapydA5Psq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAAAw0d89AAAA" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">Show Credential</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-6 border-b-2 border-border pb-2 relative group">
            Languages
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="glass rounded-xl p-6 border border-border hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1 relative z-10">
                  <div className="text-center">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">{lang.language}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{lang.proficiency}</p>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${dotIndex < lang.level
                            ? 'bg-gradient-primary shadow-md'
                            : 'bg-muted hover:bg-muted-foreground'
                          }`}
                          style={{ 
                            animationDelay: `${dotIndex * 0.1}s`,
                            boxShadow: dotIndex < lang.level ? '0 2px 4px rgba(99, 102, 241, 0.3)' : 'none'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
