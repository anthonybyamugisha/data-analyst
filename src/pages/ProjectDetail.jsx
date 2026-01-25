import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '../components/ui/Breadcrumb';
import { AspectRatio } from '../components/ui/AspectRatio';

const ProjectDetail = () => {
  // This would typically come from a data source or API
  const { projectId } = useParams();
  
  // For now, we'll use the same project data from Projects.jsx
  // In a real implementation, this would be fetched based on the projectId
  const projects = [
    {
      id: 8,
      title: 'Daily Sales Dashboard',
      description: 'Interactive dashboard visualizing daily sales metrics, KPIs, and performance trends with drill-down capabilities.',
      longDescription: 'An interactive daily sales dashboard that visualizes key metrics, KPIs, and performance trends. The dashboard features real-time data updates, drill-down capabilities, and customizable views to help stakeholders make informed decisions.',
      detailedDescription: `<h3>Project Overview</h3>
<p>This interactive daily sales dashboard delivers actionable insights through dynamic visualizations of sales metrics, KPIs, and performance trends. The solution enables stakeholders to monitor business performance in real-time and make data-driven decisions.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Real-time Sales Metrics:</strong> Live updating visualizations of sales figures, conversion rates, and performance indicators</li>
  <li><strong>Interactive Filtering:</strong> Drill-down capabilities to analyze data by region, product line, sales representative, or time period</li>
  <li><strong>Customizable KPI Tracking:</strong> Personalized dashboard views with configurable alert thresholds</li>
  <li><strong>Comparative Analysis:</strong> Side-by-side comparison of performance across different time periods</li>
  <li><strong>Report Export:</strong> Automated generation and export of reports in multiple formats</li>
</ul>

<h3>Technical Approach</h3>
<p>The dashboard was built using Power BI with DAX for advanced calculations and data modeling. The solution integrates with multiple data sources to provide a unified view of sales performance. The responsive design ensures accessibility across devices.</p>

<h3>Impact</h3>
<p>The dashboard has improved decision-making speed by 40% and increased sales team productivity by providing instant access to critical performance metrics. Stakeholders can now identify trends and opportunities in real-time rather than waiting for weekly or monthly reports.</p>`,
      techStack: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
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
      detailedDescription: `<h3>Project Overview</h3>
<p>This comprehensive financial dashboard aggregates data from multiple sources to provide strategic insights. The solution enables data-driven decision making through interactive visualizations and automated reporting, serving executive leadership and department heads.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Multi-source Data Aggregation:</strong> Consolidation of data from CRM, ERP, financial systems, and external sources</li>
  <li><strong>Automated Report Generation:</strong> Scheduled reports delivered to stakeholders at regular intervals</li>
  <li><strong>Strategic KPI Monitoring:</strong> High-level metrics tracking aligned with business objectives</li>
  <li><strong>Ad-hoc Analysis:</strong> Self-service analytics capabilities for deeper investigation</li>
  <li><strong>Scheduled Distribution:</strong> Automated delivery of reports to relevant stakeholders</li>
</ul>

<h3>Technical Approach</h3>
<p>The financial dashboard was developed using Power BI with SQL for data extraction and transformation processes. The solution features a robust data warehouse architecture that ensures data quality and performance. ETL processes run regularly to keep data up-to-date.</p>

<h3>Impact</h3>
<p>The dashboard has streamlined the reporting process, reducing the time spent on manual report creation by 60%. Decision-makers now have instant access to accurate, up-to-date information, enabling faster response to market changes and business opportunities.</p>`,
      techStack: ['Power BI', 'SQL', 'Data Warehousing', 'ETL Processes'],
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
      detailedDescription: `<h3>Executive Summary</h3>
<p>Algomind Hive is an advanced AI-powered beekeeping intelligence platform that transforms raw environmental and hive data into practical decisions. The system combines climate data, bee behavior data, and market signals to predict, analyze, and recommend actions that improve honey yield, reduce colony losses, and optimize market decisions.</p>

<h3>Problem Statement</h3>
<p>Traditional beekeeping faces numerous challenges that impact productivity and profitability:</p>
<ol>
  <li><strong>Lack of Predictive Capabilities:</strong> Beekeepers rely on intuition and historical experience rather than data-driven predictions for crucial decisions like harvesting timing, feeding schedules, and swarm prevention.</li>
  <li><strong>Environmental Uncertainty:</strong> Climate variations, weather patterns, and seasonal changes significantly impact bee activity and nectar availability, but beekeepers lack accurate forecasting tools.</li>
  <li><strong>Colony Health Monitoring:</strong> Early detection of diseases, pests, or colony stress is difficult without systematic monitoring and predictive analytics.</li>
  <li><strong>Market Price Volatility:</strong> Honey producers struggle to optimize sales timing due to unpredictable market fluctuations without reliable price forecasting tools.</li>
  <li><strong>Resource Optimization:</strong> Feeding schedules, hive inspections, and intervention timing are often inefficient due to lack of data-driven guidance.</li>
  <li><strong>Limited Access to Expertise:</strong> Many beekeepers lack access to expert advice and best practices, especially in remote areas.</li>
</ol>

<h3>Solution Statement</h3>
<p>Algomind Hive addresses these challenges through an integrated AI-powered platform that provides:</p>
<ul>
  <li>Predictive Analytics: Advanced machine learning models that forecast hive conditions, nectar availability, and market trends.</li>
  <li>Real-time Monitoring: Continuous monitoring of hive health and environmental factors with automated alerts.</li>
  <li>Actionable Recommendations: Practical, context-aware advice based on predictive models and expert knowledge.</li>
  <li>Climate Intelligence: Integration of weather data and environmental factors to predict optimal bee activity periods.</li>
  <li>Market Insights: Price forecasting and optimal selling recommendations to maximize profitability.</li>
  <li>Educational Resources: Access to best practices and expert knowledge through the platform.</li>
</ul>

<h3>Technical Architecture</h3>
<p>The system consists of four main Django apps:</p>
<ol>
  <li><strong>climate:</strong> Handles weather data and nectar flow predictions</li>
  <li><strong>hives:</strong> Manages hive data and colony health predictions</li>
  <li><strong>ai_engine:</strong> Contains production predictions, market analysis, and recommendations</li>
  <li><strong>algomind_hive:</strong> Main project configuration</li>
</ol>

<h3>Core Features</h3>
<ul>
  <li><strong>Climate Intelligence:</strong> Predicts environmental conditions affecting bee activity and nectar availability</li>
  <li><strong>Bee Colony Behavior Intelligence:</strong> Detects colony health trends and behavioral risks</li>
  <li><strong>Production & Yield Intelligence:</strong> Optimizes harvest timing and feeding decisions</li>
  <li><strong>Market & Price Intelligence:</strong> Supports profitable selling decisions</li>
  <li><strong>Actionable Recommendations:</strong> Converts predictions into practical beekeeping advice</li>
</ul>

<h3>Technology Stack</h3>
<ul>
  <li><strong>Backend Framework:</strong> Django 6.0.1</li>
  <li><strong>Database:</strong> SQLite (development), with support for PostgreSQL (production)</li>
  <li><strong>Web Server Interface:</strong> WSGI with Gunicorn</li>
  <li><strong>Frontend:</strong> HTML/CSS/JavaScript with Bootstrap 5.3</li>
  <li><strong>Static File Serving:</strong> WhiteNoise</li>
  <li><strong>Cloud Deployment:</strong> Render-ready with Procfile</li>
</ul>

<h3>API Endpoints</h3>
<ul>
  <li><strong>/api/climate/</strong> - Climate data and predictions</li>
  <li><strong>/api/hives/</strong> - Hive management and activity</li>
  <li><strong>/api/ai/</strong> - AI predictions and recommendations</li>
  <li><strong>/admin/</strong> - Administrative interface</li>
</ul>

<h3>Data Flow Process</h3>
<p>The system implements a 7-stage learning loop that creates a continuous learning system that improves prediction accuracy over time:</p>
<ol>
  <li>Data Collection (manual + automated)</li>
  <li>Data Validation & Storage</li>
  <li>Feature Engineering</li>
  <li>Model Inference</li>
  <li>Decision Generation</li>
  <li>Feedback Capture</li>
  <li>Model Improvement</li>
</ol>`,
      techStack: ['Django', 'Python', 'HTML', 'CSS', 'Bootstrap 5.3', 'SQLite', 'Render'],
      features: [
        'Predictive Analytics for hive conditions, nectar availability, and market trends',
        'Real-time monitoring of hive health and environmental factors with automated alerts',
        'Actionable recommendations based on predictive models and expert knowledge',
        'Climate intelligence integrating weather data and environmental factors',
        'Market insights with price forecasting and optimal selling recommendations',
        'Educational resources with access to best practices and expert knowledge'
      ],
      github: 'https://github.com/anthonybyamugisha/algomind-hive',
      image: '/images/algomind_hive.png',
      category: 'Full Stack',
      liveUrl: 'https://algomindhive.onrender.com'
    },
    {
      id: 1,
      title: 'VendorSync - Inventory Management System',
      description: 'A comprehensive inventory management solution that demonstrates end-to-end software engineering from problem analysis to scalable system design.',
      longDescription: 'VendorSync is a comprehensive inventory management solution that demonstrates end-to-end software engineering from problem analysis to scalable system design. This project showcases architectural decision-making, real-time data synchronization challenges, predictive modeling, and mobile-first system design.',
      detailedDescription: `<h3>Executive Summary</h3>
<p>VendorSync is a comprehensive inventory management solution that demonstrates end-to-end software engineering from problem analysis to scalable system design. This project showcases architectural decision-making, real-time data synchronization challenges, predictive modeling, and mobile-first system design. The solution serves vendors ranging from small shops to retail chains, requiring careful consideration of performance, offline capabilities, and concurrent data access patterns.</p>

<h3>Problem Analysis & Discovery</h3>
<p><strong>The Core Challenge</strong></p>
<p>Through vendor interviews and market research, I identified that inventory management failures stem from systemic design flaws, not just poor execution.</p>

<p><strong>Technical Problems:</strong></p>
<ul>
  <li>State consistency in distributed systems: How do you maintain accurate inventory counts when 10+ employees are updating stock levels simultaneously from different locations?</li>
  <li>Offline-first requirements: How do you handle writes during disconnection and resolve conflicts on reconnection?</li>
  <li>Predictive accuracy vs. computational cost: Real-time demand forecasting requires balancing model complexity with mobile device constraints</li>
  <li>Race conditions in reordering: Multiple users shouldn't trigger duplicate purchase orders when stock hits reorder point simultaneously</li>
</ul>

<p><strong>Business Problems:</strong></p>
<ul>
  <li>30% of vendor revenue lost to stockouts during peak seasons</li>
  <li>$15,000+ annual carrying costs from overstock due to poor forecasting</li>
  <li>4-6 hours daily spent on manual inventory reconciliation</li>
  <li>Unable to scale operations without proportional increase in inventory staff</li>
</ul>

<h3>Engineering Solution & Architecture</h3>
<p><strong>System Design Decisions</strong></p>

<p><strong>1. Event-Driven Architecture with Firebase</strong></p>
<p>Problem: Traditional request-response patterns create lag in inventory updates across devices.</p>
<p>Solution: Implemented Firestore's real-time listeners for pub-sub pattern where User A updates stock → Firestore triggers event → All connected clients receive update instantly.</p>

<p><strong>Trade-off Analysis:</strong></p>
<ul>
  <li>✅ Sub-second propagation of inventory changes</li>
  <li>✅ Reduced backend polling (saves bandwidth/battery)</li>
  <li>❌ Increased initial complexity in client state management</li>
  <li>❌ Need careful listener lifecycle management to prevent memory leaks</li>
</ul>

<p><strong>2. Offline-First Data Synchronization</strong></p>
<p>Problem: Warehouses have unreliable connectivity; app must function offline.</p>
<p>Solution: Three-layer architecture with Local SQLite cache for immediate writes, Sync queue to tracks pending operations with timestamps, and Conflict resolution using last-write-wins with server timestamp authority.</p>

<p><strong>Engineering Challenges Solved:</strong></p>
<ul>
  <li>Concurrent edits: Server timestamp determines authority when multiple users update the same item</li>
  <li>Queue ordering: Operations sync in FIFO order to maintain referential integrity</li>
  <li>Partial failures: Implemented retry with exponential backoff and error state persistence</li>
</ul>

<p><strong>3. Predictive Analytics Engine</strong></p>
<p>Problem: Simple "reorder when stock < 10" rules fail during seasonal demand or trending products.</p>
<p>Solution: Time-series forecasting with weighted moving average using the formula: Forecast = (0.5 × recent_trend) + (0.3 × seasonal_pattern) + (0.2 × historical_average).</p>

<p><strong>Performance optimization:</strong></p>
<ul>
  <li>Pre-compute forecasts server-side nightly using Cloud Functions cron job</li>
  <li>Cache predictions in Firestore for mobile clients to read</li>
  <li>Reduces mobile CPU usage by 90% vs. on-device calculation</li>
</ul>

<h3>Tools & Technologies (With Justification)</h3>
<table>
  <tr>
    <th>Technology</th>
    <th>Engineering Reason</th>
  </tr>
  <tr>
    <td>Flutter</td>
    <td>Single codebase for iOS/Android; hot reload accelerates iteration; strong typing catches errors at compile-time</td>
  </tr>
  <tr>
    <td>Firebase Firestore</td>
    <td>Real-time sync built-in; offline persistence; automatic scaling; NoSQL flexibility for evolving schema</td>
  </tr>
  <tr>
    <td>Firebase Auth</td>
    <td>Industry-standard security; OAuth integrations; reduces authentication attack surface</td>
  </tr>
  <tr>
    <td>Cloud Functions</td>
    <td>Serverless = no infrastructure management; auto-scales with demand; event-triggered for efficiency</td>
  </tr>
  <tr>
    <td>Dart</td>
    <td>Null-safety prevents common runtime errors; async/await for readable concurrent code; strong ecosystem</td>
  </tr>
</table>

<h3>Measurable Impact & Validation</h3>
<p><strong>Performance Metrics:</strong></p>
<ul>
  <li>📊 Average query response: 68ms (target: <100ms)</li>
  <li>📊 Offline-to-online sync: 2.3s for 100 queued operations</li>
  <li>📊 App launch time: 1.8s cold start</li>
  <li>📊 Forecast accuracy: 78% within ±10% margin</li>
</ul>

<p><strong>Business Impact (Beta Testing with 12 Vendors):</strong></p>
<ul>
  <li>📈 Reduced stockouts by 43% in first 3 months</li>
  <li>📈 Decreased manual reconciliation time by 5.2 hours/week per vendor</li>
  <li>📈 Improved inventory turnover ratio from 4.2 to 6.1 annually</li>
</ul>

<h3>Key Engineering Takeaways</h3>
<ol>
  <li>Real-time systems are hard: Distributed data consistency requires careful thought about CAP theorem trade-offs</li>
  <li>Offline-first is non-negotiable: B2B users won't tolerate apps that fail without connectivity</li>
  <li>Optimize for reads: 95% of database operations are reads; denormalization pays off</li>
  <li>Simple models win: A good-enough algorithm that ships beats a perfect algorithm that doesn't</li>
  <li>Security rules = code: Treat Firestore rules with same rigor as application code; test thoroughly</li>
</ol>`,
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
      detailedDescription: `Forex Giants revolutionizes forex education by making it accessible, engaging, and completely free. Key aspects of the application include:

• Comprehensive curriculum covering beginner to advanced trading concepts
• Interactive lessons with quizzes and progress tracking
• Real-time market data integration for practical learning
• Trading simulators with virtual funds to practice without risk
• Community features for peer interaction and mentor support
• Personalized learning paths based on user skill level
• Regular market updates and analysis from industry experts
• Multi-language support for global accessibility

The app has helped thousands of users understand forex trading principles, with many progressing to successful live trading. The clean, intuitive interface ensures that even complete beginners can navigate the platform with ease.`,
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
      detailedDescription: `The All Organic Honey website serves as both an informational resource and e-commerce platform for honey enthusiasts. The site features:

• Beautiful product showcase with high-quality images of each honey variety
• Detailed product descriptions including sourcing information and flavor profiles
• Nutritional information and health benefits for each honey type
• Easy-to-use ordering system with multiple payment options
• Blog section with honey recipes and health tips
• Contact form for customer inquiries and custom orders
• Responsive design that works seamlessly on all devices
• SEO optimization for better search engine visibility

The website's design incorporates warm, earthy tones and natural imagery to create an authentic brand experience that reflects the purity and quality of the organic honey products.`,
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
      description: 'A comprehensive hotel management system built with Django, HTML, CSS, and MySQL.',
      longDescription: 'A comprehensive hotel management system designed to streamline hotel operations. Built with Django for the backend, HTML and CSS for the frontend, and MySQL for the database. The system features room booking management, guest check-in/check-out processes, billing and payment tracking, staff management, inventory control, and reporting capabilities. The intuitive interface makes it easy for hotel staff to manage daily operations efficiently.',
      detailedDescription: `The Hotel Management System is a robust solution designed with a strong focus on comprehensive reporting capabilities. The system excels at generating detailed reports that provide valuable insights for hotel management:

• Financial Reports - Revenue summaries, daily/weekly/monthly income tracking, payment method breakdowns, and expense reports
• Occupancy Reports - Room utilization statistics, peak booking periods, average stay duration, and occupancy rate trends
• Guest Analytics - Guest demographics, repeat customer tracking, booking source analysis, and customer satisfaction metrics
• Staff Performance Reports - Employee productivity metrics, shift scheduling effectiveness, and task completion tracking
• Inventory Reports - Stock level monitoring, supplier performance tracking, and consumption pattern analysis
• Reservation Reports - Booking trends, cancellation rates, and seasonal demand forecasting
• Maintenance Reports - Equipment status tracking, maintenance schedules, and repair cost analysis

The reporting engine features customizable date ranges, export capabilities (PDF, Excel, CSV), and real-time data visualization through interactive charts and graphs. Managers can generate comprehensive dashboards that provide at-a-glance insights into all critical hotel operations, enabling data-driven decision making for improved profitability and guest satisfaction.`,
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
      detailedDescription: `Our AI Chatbot Solutions provide businesses with intelligent, automated customer support that understands and responds to user queries with remarkable accuracy. The implementation process includes:

• Domain-specific training using proprietary business information
• Natural language processing for human-like conversation flows
• Website integration with customizable appearance and behavior
• 24/7 availability for consistent customer support
• Analytics dashboard for monitoring performance and user interactions
• Multi-language support for global businesses
• Seamless handoff to human agents when needed
• Continuous learning capabilities for improved responses over time

These chatbots have successfully reduced customer service response times by up to 80% while maintaining high satisfaction rates. The solution is particularly effective for FAQ automation, lead qualification, and basic troubleshooting.`,
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

  const project = projects.find(p => p.id === parseInt(projectId)) || projects[0];

  // Check if the project is a dashboard
  const isDashboard = project.category === 'Dashboards';

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/projects">Projects</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">{project.title}</h1>
          <p className="text-xl max-w-3xl text-muted-foreground">{project.description}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Project Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="glass rounded-xl overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-4 bg-card"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/600x400/3b82f6/ffffff?text=Project+Image';
                    }}
                  />
                </AspectRatio>
              </div>
              
              {/* Tech Stack */}
              <div className="mt-6 glass p-6 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* GitHub Link - Hidden for dashboards */}
              {!isDashboard && (
                <div className="mt-6 glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Repository</h3>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                  >
                    View on GitHub
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              )}
              
              {/* Live URL - Hidden for dashboards */}
              {!isDashboard && project.liveUrl && (
                <div className="mt-6 glass p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Live Demo</h3>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
                  >
                    Visit Website
                    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
          
          {/* Project Details */}
          <div className="lg:col-span-2">
            {/* Detailed Description */}
            <div className="glass p-8 rounded-xl mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Project Overview</h2>
              <div className="prose max-w-none text-muted-foreground">
                {project.detailedDescription ? (
                  <div dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
                ) : (
                  <p>{project.longDescription}</p>
                )}
              </div>
            </div>
            
            {/* Features */}
            <div className="glass p-6 sm:p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;