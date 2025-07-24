import { Heart, Brain, Zap, Shield, Activity, Target } from 'lucide-react'

export default function OrganCoverageSection() {
  const organs = [
    {
      name: 'Prostate',
      icon: Target,
      accuracy: '98.2%',
      description: 'PSA levels, genetic markers, and ctDNA analysis for prostate cancer detection',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Breast',
      icon: Heart,
      accuracy: '96.8%',
      description: 'BRCA1/2 mutations, tumor markers CA 27.29, and circulating tumor cells',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Colorectal',
      icon: Activity,
      accuracy: '97.5%',
      description: 'CEA levels, Lynch syndrome markers, and ctDNA mutation analysis',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Lung',
      icon: Zap,
      accuracy: '95.3%',
      description: 'Circulating tumor DNA, genetic mutations, and protein biomarkers',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Ovarian',
      icon: Shield,
      accuracy: '94.7%',
      description: 'CA 125 antigen, BRCA mutations, and Roma test indicators',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Pancreatic',
      icon: Brain,
      accuracy: '93.9%',
      description: 'CA 19-9 markers, genetic panels, and early-stage ctDNA detection',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Liver',
      icon: Activity,
      accuracy: '96.1%',
      description: 'AFP levels, genetic mutations, and hepatocellular carcinoma markers',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Stomach',
      icon: Target,
      accuracy: '94.2%',
      description: 'Gastric cancer biomarkers, H. pylori indicators, and genetic analysis',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      name: 'Kidney',
      icon: Zap,
      accuracy: '95.8%',
      description: 'Renal cell carcinoma markers, genetic mutations, and protein analysis',
      color: 'from-teal-500 to-teal-600'
    },
    {
      name: 'Bladder',
      icon: Shield,
      accuracy: '93.4%',
      description: 'Urothelial carcinoma markers, genetic panels, and ctDNA analysis',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      name: 'Thyroid',
      icon: Heart,
      accuracy: '97.1%',
      description: 'Thyroglobulin levels, genetic mutations, and hormone markers',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Esophageal',
      icon: Brain,
      accuracy: '92.6%',
      description: 'Squamous cell markers, genetic analysis, and early detection panels',
      color: 'from-violet-500 to-violet-600'
    }
  ]

  return (
    <section id="organs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organs We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              {' '}Cover
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive liquid biopsy screens for cancer across 13+ organ systems 
            using advanced ctDNA analysis and tumor marker detection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {organs.map((organ, index) => {
            const IconComponent = organ.icon
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${organ.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{organ.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{organ.accuracy}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{organ.description}</p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Detection Rate</span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${organ.color} rounded-full transition-all duration-1000`}
                        style={{ width: organ.accuracy }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Comprehensive Multi-Cancer Detection</h3>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Unlike single-organ screenings, our liquid biopsy provides a complete picture of your cancer risk 
            across all major organ systems in one simple blood test.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">13+</div>
              <div className="text-blue-100">Organ Systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Cancer Subtypes</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-blue-100">Simple Blood Test</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}