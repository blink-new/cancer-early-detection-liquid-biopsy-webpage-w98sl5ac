import { useState } from 'react'
import { Calendar, MapPin, Clock, User, Phone, Mail } from 'lucide-react'

export default function ScheduleSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    time: '',
    insurance: ''
  })

  const locations = [
    'New York, NY - Manhattan Lab',
    'Los Angeles, CA - Beverly Hills Center',
    'Chicago, IL - Downtown Clinic',
    'Houston, TX - Medical District',
    'Phoenix, AZ - Scottsdale Lab',
    'Philadelphia, PA - Center City',
    'San Antonio, TX - North Side',
    'San Diego, CA - La Jolla Center'
  ]

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! Your appointment request has been submitted. We will contact you within 24 hours to confirm your liquid biopsy test.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              {' '}Liquid Biopsy Test
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards early cancer detection. Book your appointment at one of our 
            certified lab locations nationwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Preferred Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a location</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    Preferred Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Insurance Provider (Optional)
                </label>
                <select
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select insurance provider</option>
                  <option value="aetna">Aetna</option>
                  <option value="anthem">Anthem</option>
                  <option value="cigna">Cigna</option>
                  <option value="humana">Humana</option>
                  <option value="kaiser">Kaiser Permanente</option>
                  <option value="medicare">Medicare</option>
                  <option value="united">United Healthcare</option>
                  <option value="other">Other</option>
                  <option value="self-pay">Self Pay</option>
                </select>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What to Expect:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Simple 15-minute blood draw</li>
                  <li>• No fasting or special preparation required</li>
                  <li>• Results available in 7-10 business days</li>
                  <li>• Comprehensive report with actionable insights</li>
                  <li>• Direct connection to specialists if needed</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule My Liquid Biopsy Test
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Questions about the process?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1-800-BIOPSY" className="text-blue-600 hover:text-blue-700 font-medium">
                Call: 1-800-BIOPSY
              </a>
              <a href="mailto:info@liquidbiopsy.com" className="text-blue-600 hover:text-blue-700 font-medium">
                Email: info@liquidbiopsy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}