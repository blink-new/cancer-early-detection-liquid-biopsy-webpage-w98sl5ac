import { Calendar, TestTube, FileText, Target } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Schedule',
      description: 'Create an account and choose a time and location that works best for you.',
      details: 'Book online in minutes. Choose from hundreds of certified labs nationwide.'
    },
    {
      icon: TestTube,
      title: 'Blood Test',
      description: 'Get your liquid biopsy test — it takes as little as 15 minutes and screens for cancer in up to 13 organs.',
      details: 'Simple blood draw using advanced ctDNA and tumor marker analysis.'
    },
    {
      icon: FileText,
      title: 'Results',
      description: 'Receive comprehensive analysis of circulating tumor DNA, genetic markers, and cancer indicators.',
      details: 'Results typically available within 7-10 business days with detailed explanations.'
    },
    {
      icon: Target,
      title: 'Action Plan',
      description: 'You will receive an easy-to-interpret report with actionable next steps.',
      details: 'Personalized recommendations and direct connection to specialists when needed.'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Screening is our best defense against cancer.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              And we've perfected it.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary liquid biopsy process makes cancer screening as simple as a routine blood test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-6 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-blue-600 font-medium">{step.details}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-orange-300"></div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Why Liquid Biopsy?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">No Radiation</div>
                <div className="text-blue-100">Unlike CT or MRI scans</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">No Fasting</div>
                <div className="text-blue-100">Simple blood draw anytime</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">No Prep</div>
                <div className="text-blue-100">Walk in, walk out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}