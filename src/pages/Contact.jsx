import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useToast } from '../hooks/useToast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWord, setCurrentWord] = useState(25) // All words visible
  
  // All sections are visible by default to prevent blank pages
  const visibleSections = {
    header: true,
    contactInfo: true,
    form: true,
    social: true,
    cta: true
  }
  
  const titleWords = ['Ready', 'to', 'transform', 'your', 'data', 'into', 'actionable', 'insights?', 'Whether', 'you', 'need', 'a', 'dashboard,', 'data', 'analysis,', 'or', 'business', 'intelligence', 'solutions,', 'I\'m', 'here', 'to', 'help.', 'Let\'s', 'connect', 'and', 'unlock', 'the', 'power', 'of', 'your', 'data.']

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
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Formspree endpoint
      const formEndpoint = 'https://formspree.io/f/mzdevlpl';
      
      // Prepare form data
      const formData = new FormData();
      formData.append('name', e.target.name.value);
      formData.append('email', e.target.email.value);
      formData.append('subject', e.target.subject.value);
      formData.append('message', e.target.message.value);
      
      console.log('Sending form data to Formspree:', {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      });
      
      // Send to Formspree
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok) {
        console.log('Form submitted successfully:', result);
        
        setIsSubmitting(false)
        toast({
          title: 'Message Delivered Successfully! 📨',
          description: 'Thank you for reaching out! Your message has been delivered to my inbox. I typically respond within 24-48 hours. Feel free to reach out directly at byamugishanthony@gmail.com if urgent.',
          variant: 'default',
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
      
    } catch (error) {
      console.error('Form submission failed:', error);
      
      setIsSubmitting(false)
      toast({
        title: 'Error Sending Message',
        description: error.message || 'Sorry, there was an error sending your message. Please try again or email me directly.',
        variant: 'destructive',
      })
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'byamugishanthony@gmail.com',
      link: 'mailto:byamugishanthony@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+256748161708',
      link: 'tel:+256748161708'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Makerere, Kampala Uganda',
      link: null
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/anthonybyamugisha',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026.791-.22 1.641-.331 2.501-.337.86.006 1.71.117 2.501.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anthonybyamugisha',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~0186637ac601dd1727',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.065-2.704 2.065zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.004-2.439-5.454-5.439-5.454z"/>
        </svg>
      )
    }
  ]

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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 transform transition-all duration-1000 translate-y-0 opacity-100 scale-100" style={{ 
            color: '#fff',
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.5s',
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
          }}>
            Get In Touch
          </h1>
          <p className="text-xl max-w-3xl mx-auto transform transition-all duration-1000 translate-y-0 opacity-100" style={{ 
            color: '#fff',
            opacity: isLoaded ? 1 : 0,
            transitionDelay: '0.8s',
            textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
          }}>
            <span className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {titleWords.map((word, index) => {
                const isVisible = index <= currentWord
                
                return (
                  <span 
                    key={index}
                    className={`inline-block transition-all duration-700 transform translate-x-0 translate-y-0 opacity-100 rotate-0 ${
                      ['opportunities', 'projects'].includes(word) ? 'text-yellow-300 font-semibold' :
                      ['collaboration'].includes(word) ? 'text-blue-200 font-semibold' :
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
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Let's Connect</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to unlock the value hidden in your data? I specialize in transforming complex datasets into clear, 
              actionable insights through interactive dashboards, statistical analysis, and business intelligence solutions.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-center transition-all duration-1000 hover:transform hover:scale-105"
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
                    style={{ transitionDelay: `${900 + index * 100}ms` }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              
              {/* Toast notifications will be handled by the ToastProvider */}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 focus:shadow-glow"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 focus:shadow-glow"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 focus:shadow-glow"
                  >
                    <option value="">Select a service</option>
                    <option value="Data Analysis">Data Analysis & Insights</option>
                    <option value="Business Intelligence">Business Intelligence Solutions</option>
                    <option value="Dashboard Development">Dashboard Development (Power BI/Excel)</option>
                    <option value="Data Science">Data Science & Predictive Analytics</option>
                    <option value="Consulting">Data Consulting</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 focus:shadow-glow resize-none"
                    placeholder="Tell me about your data challenges or project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary text-primary-foreground py-3 px-6 rounded-lg focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transform hover:scale-105 hover:shadow-glow"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CTA Section */}
      <section className="bg-background py-16 relative overflow-hidden">

        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground relative">
            <span className="text-gradient">
              Ready to Start Something Amazing?
            </span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Whether you need interactive dashboards, in-depth data analysis, or predictive models, I'm here to help you make data-driven decisions with confidence. Let's collaborate and turn your data into a strategic asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:byamugishanthony@gmail.com"
              className="group inline-flex items-center bg-gradient-primary text-primary-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-glow"
            >
              <span className="mr-2">Email Me Directly</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <Link
              to="/resume"
              className="group inline-flex items-center glass text-foreground font-semibold py-4 px-8 rounded-lg transition-all duration-500 transform hover:scale-110 hover:shadow-glow"
            >
              <span className="mr-2">View Resume</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact