import { ArrowRight, Droplets } from 'lucide-react'

export default function HeroSection() {
  const scrollToSchedule = () => {
    const element = document.getElementById('schedule')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60"></div>
        <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-orange-200 rounded-full opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="floating-element absolute bottom-20 right-40 w-5 h-5 bg-orange-300 rounded-full opacity-30" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Blood drop icon */}
          <div className="mb-8 flex justify-center">
            <div className="blood-drop p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-lg">
              <Droplets className="w-12 h-12 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We found cancer's greatest weakness—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              early detection
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary liquid biopsy technology detects cancer through a simple blood test. 
            No radiation, no imaging centers—just advanced ctDNA analysis that screens for 13+ cancer types.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToSchedule}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Schedule Your Test
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              Learn How It Works
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">Cancer Types Detected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">15min</div>
              <div className="text-gray-600">Simple Blood Draw</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}