import React from 'react'

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {children}
    </div>
  )
}

const PageHeader = ({ 
  title, 
  subtitle, 
  isVisible = true, 
  gradient = 'from-blue-600 via-purple-600 to-indigo-600',
  children 
}) => {
  return (
    <section className={`bg-gradient-to-br ${gradient} text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-20 right-20 w-32 h-32 sm:w-40 sm:h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 sm:w-36 sm:h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`} style={{ color: '#fff' }}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`} style={{ color: '#fff' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

const PageSection = ({ 
  children, 
  className = '', 
  background = 'bg-white',
  isVisible = true,
  delay = 0
}) => {
  return (
    <section className={`py-12 sm:py-16 lg:py-20 ${background} relative overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    } ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

const SectionTitle = ({ 
  title, 
  subtitle = '', 
  alignment = 'center',
  isVisible = true,
  delay = 0
}) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  }
  
  return (
    <div className={`mb-12 sm:mb-16 ${alignmentClasses[alignment]}`}>
      <h2 className={`section-header inline-block transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`} style={{ transitionDelay: `${delay}ms` }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg sm:text-xl text-gray-600 max-w-3xl ${
          alignment === 'center' ? 'mx-auto' : ''
        } mt-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`} style={{ transitionDelay: `${delay + 200}ms` }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

const AnimatedCard = ({ 
  children, 
  className = '',
  isVisible = true,
  delay = 0,
  hoverEffect = true
}) => {
  return (
    <div className={`card ${hoverEffect ? 'card-hover' : ''} transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    } ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

const ResponsiveGrid = ({ 
  children, 
  columns = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4
  },
  gap = 6,
  className = ''
}) => {
  const gridClasses = `grid grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg} xl:grid-cols-${columns.xl} gap-${gap} ${className}`
  
  return (
    <div className={gridClasses}>
      {children}
    </div>
  )
}

// Export components
PageLayout.Header = PageHeader
PageLayout.Section = PageSection
PageLayout.Title = SectionTitle
PageLayout.Card = AnimatedCard
PageLayout.Grid = ResponsiveGrid

export default PageLayout