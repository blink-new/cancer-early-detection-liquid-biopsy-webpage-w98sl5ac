import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import ScienceSection from './components/ScienceSection'
import OrganCoverageSection from './components/OrganCoverageSection'
import ScheduleSection from './components/ScheduleSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ScienceSection />
      <OrganCoverageSection />
      <ScheduleSection />
      <Footer />
    </div>
  )
}

export default App