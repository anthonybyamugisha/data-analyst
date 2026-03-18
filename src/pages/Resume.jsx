import React, { useEffect, useState } from 'react'
import anthonyImage from '/images/anthony.jpg'
import SkillCard from '../components/ui/SkillCard'
import TimelineItem from '../components/ui/TimelineItem'
import { Badge } from '../components/ui/Badge'
import { Code, Cpu, Zap, Download } from 'lucide-react'

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWord, setCurrentWord] = useState(18) // All words visible
  const [animatedSections, setAnimatedSections] = useState({})
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = [0, 1, 2, 3, 4, 5]
  
  const nameWords = ['BYAMUGISHA', 'ANTHONY']
  const titleWords = ['Junior', 'Data', 'BI', ',', 'Analyst', 'and', 'Data', 'Scientist']
  
  const education = [
    {
      period: 'Dec 2025 – Present',
      institution: 'WorldQuant University',
      degree: 'Applied Data Science Lab',
      status: 'Current',
      description: 'Working on hands on projects involving data analysis, exploratory data analysis, and applied machine learning using Python.'
    },
    {
      period: '2024-Present',
      institution: 'Makerere University',
      degree: 'Bachelor Of Science in Computer Science',
      status: 'Current'
    },
    {
      period: '2021-2023',
      institution: 'Buddo Secondary School',
      degree: 'Uganda Advanced Certificate of Education , Physics Economics and Mathematics',
      status: 'Completed',
      description: 'Grade: 20 points out of 20'
    },
    {
      period: '2017-2020',
      institution: 'Mwizi Secondary School',
      degree: "Uganda Certificate of Education, O'level",
      status: 'Completed',
      description: 'Grade: 14 agg (First grade)'
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
                        ['Junior', 'Data', 'Scientist'].includes(word) ? 'text-yellow-300 font-semibold' :
                        ['BI', 'Analyst'].includes(word) ? 'text-blue-200 font-semibold' :
                        'text-white'
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
            </h2>
            
            {/* Download Resume Button - Added here */}
            <div className="mt-8 transform transition-all duration-1000 translate-y-0 opacity-100" style={{ transitionDelay: '1.6s' }}>
              <a 
                href="/documents/my_resume.pdf" 
                download="Anthony_Byamugisha_Resume.pdf"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
                <span className="ml-2 text-sm opacity-75">(PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the content remains the same */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Education Section */}
        <section className="mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-8 border-b-2 border-border pb-2 relative group">
            Education
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <TimelineItem 
                key={index}
                period={edu.period}
                title={edu.institution}
                institution={edu.degree}
                description={edu.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className="mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-8 border-b-2 border-border pb-2 relative group">
            Awards & Recognition
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <TimelineItem 
                key={index}
                period={award.year}
                title={award.title}
                subtitle={award.institution}
                description={award.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-8 border-b-2 border-border pb-2 relative group">
            Technical Skills
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                title={skill.title}
                icon={skill.icon}
                skills={skill.skills}
                delay={skill.delay}
              />
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h3 className="section-title mb-8 border-b-2 border-border pb-2 relative group">
            Certifications
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
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">Artificial Intelligence for Business</h4>
                    <p className="text-sm text-muted-foreground mb-2">Simplilearn</p>
                    <p className="text-sm text-muted-foreground">Issued: Sep 2025</p>
                    <a href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MzA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODgxMDk3NV85MTgzMTU5MTc1NTUzNzk3MjU1OS5wbmciLCJ1c2VybmFtZSI6IkJZQU1VR0lTSEEgQU5USE9OWSJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8810975_91831591755537972559.png&_branch_match_id=1535602664010078382&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1i%2BIqnJNcapydA5Psq8rSk1LLSrKzEuPTyrKLy9OLbJ1zijKz00FAAAw0d89AAAA" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline font-medium">Show Credential</a>
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