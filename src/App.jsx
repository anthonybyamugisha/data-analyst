import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import AboutMe from './pages/About Me'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import ImageTest from './components/ImageTest'
import { ToastProvider, ToastViewport } from './components/ui/Toast'

function App() {
  return (
    <ToastProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/image-test" element={<ImageTest />} />
          </Routes>
        </Layout>
      </Router>
      <ToastViewport />
    </ToastProvider>
  )
}

export default App