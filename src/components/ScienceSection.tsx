import { Dna, Microscope, Activity, Shield } from 'lucide-react'

export default function ScienceSection() {
  const technologies = [
    {
      icon: Dna,
      title: 'ctDNA Analysis',
      description: 'Circulating tumor DNA detection using advanced genomic sequencing',
      details: 'SENTIS™ Cancer+ Discovery Panel and Oseq™ ctDNA panel technology'
    },
    {
      icon: Microscope,
      title: 'Tumor Markers',
      description: 'Comprehensive panel including CA 125, CEA, CA 19-9, CA 27.29, PSA',
      details: 'Specialized biomarker detection for breast, ovarian, colorectal, pancreatic, prostate cancers'
    },
    {
      icon: Activity,
      title: 'Genetic Panels',
      description: 'BRCA1/2, Lynch syndrome, and hereditary cancer gene analysis',
      details: 'Multi-cancer early detection (MCED) technology similar to Galleri and Guardant360'
    },
    {
      icon: Shield,
      title: 'BGI Genomics',
      description: 'World-leading genomic sequencing and liquid biopsy technology',
      details: 'Clinical-grade accuracy with comprehensive genetic profiling'
    }
  ]

  return (
    <section id="science" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Science Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              {' '}Liquid Biopsy
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced liquid biopsy technology analyzes circulating tumor DNA, genetic markers, 
            and biomarkers in your blood to detect cancer at its earliest stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-xl mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                <p className="text-sm text-blue-600 font-medium">{tech.details}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Clinical Validation</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.5%</div>
              <div className="text-gray-600">Specificity Rate</div>
              <div className="text-sm text-gray-500 mt-1">Low false positives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95.8%</div>
              <div className="text-gray-600">Sensitivity Rate</div>
              <div className="text-sm text-gray-500 mt-1">Early stage detection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">Patients Tested</div>
              <div className="text-sm text-gray-500 mt-1">Clinical validation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
              <div className="text-gray-600">Cancer Types</div>
              <div className="text-sm text-gray-500 mt-1">Multi-organ screening</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Liquid Biopsy vs Traditional Imaging</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-orange-200">Traditional Methods</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Radiation exposure (CT, PET scans)</li>
                  <li>• Expensive imaging equipment</li>
                  <li>• Time-consuming procedures</li>
                  <li>• Limited to visible tumors</li>
                  <li>• Requires multiple appointments</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-orange-200">Liquid Biopsy</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• No radiation or imaging needed</li>
                  <li>• Simple 15-minute blood draw</li>
                  <li>• Detects microscopic cancer cells</li>
                  <li>• Single test, multiple organs</li>
                  <li>• Convenient lab locations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}