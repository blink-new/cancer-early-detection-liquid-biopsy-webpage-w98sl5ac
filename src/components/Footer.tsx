import { Mail, Phone, MapPin, Shield, Award, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">LiquidBiopsy</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary cancer early detection through advanced liquid biopsy technology.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Liquid Biopsy Testing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">ctDNA Analysis</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tumor Marker Screening</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Genetic Panel Testing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">BRCA Analysis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Scientific Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Insurance Coverage</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Patient Portal</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>1-800-BIOPSY</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@liquidbiopsy.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>Nationwide Lab Network</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">CLIA Certified</div>
              <div className="text-gray-300 text-sm">Clinical Laboratory Improvement Amendments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">CAP Accredited</div>
              <div className="text-gray-300 text-sm">College of American Pathologists</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">FDA Approved</div>
              <div className="text-gray-300 text-sm">Food and Drug Administration</div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p className="mb-4">
              <strong>Medical Disclaimer:</strong> This test is for informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. 
              Results should be interpreted by a qualified healthcare professional. Always consult with your physician regarding any medical concerns.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2024 LiquidBiopsy. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors">HIPAA Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}