import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton'
import { NewHome } from './pages/NewHome'
import { NewAbout } from './pages/NewAbout'
import { Services } from './pages/Services'
import { Team } from './pages/Team'
import { NewProjects } from './pages/NewProjects'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<NewHome />} />
            <Route path="/about" element={<NewAbout />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<NewProjects />} />

          </Routes>
        </main>
        <Footer />
        <WhatsAppFloatingButton phoneNumber="60196226068" />
      </div>
    </Router>
  )
}

export default App