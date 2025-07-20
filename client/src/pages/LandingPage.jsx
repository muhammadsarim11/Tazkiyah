import { Link } from "react-router-dom";
import { FaBook, FaBell, FaPrayingHands, FaDharmachakra, FaQuran, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="flex items-center">
              <div className="bg-green-600 p-1.5 sm:p-2 rounded-lg mr-2 sm:mr-3">
                <FaQuran className="text-white" size={16} />
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-green-800">﷽ Tazkiyah</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link
                to="/login"
                className="text-green-700 hover:text-green-800 font-medium transition-colors px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-green-50 text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">Login</span>
              </Link>
              <Link
                to="/register"
                className="bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md text-sm sm:text-base"
              >
                <span className="hidden sm:inline">Get Started</span>
                <span className="sm:hidden">Join</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Your Digital Islamic Companion
            </h2>
            <p className="text-lg text-green-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Strengthen your faith with daily Quranic verses, prayer tracking, Islamic reminders, 
              and spiritual notes. Built for the modern Muslim seeking closeness to Allah.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-4 max-w-xl mx-auto border border-green-200">
              <p className="text-green-800 italic text-base font-arabic" dir="rtl">
                ذَّرْ فَّ الذِّكْرْ
              </p>
              <p className="text-green-600 text-xs mt-2">
                "And remind, for indeed, the reminder benefits the believers." - Quran 51:55
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center"
            >
              Start Your Journey <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/login"
              className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-xl hover:bg-green-50 transition-all font-semibold text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-green-800 mb-4">
              Everything You Need for Spiritual Growth
            </h3>
            <p className="text-green-600 text-lg">
              Comprehensive tools designed to enhance your Islamic lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Daily Ayah */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-green-500 p-3 rounded-full w-fit mb-4">
                <FaQuran className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3">Daily Ayah</h4>
              <p className="text-green-600">
                Start each day with a beautiful verse from the Quran, complete with translation and reflection.
              </p>
            </div>

            {/* Prayer Tracking */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-blue-500 p-3 rounded-full w-fit mb-4">
                <FaPrayingHands className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3">Prayer Tracking</h4>
              <p className="text-green-600">
                Keep track of your five daily prayers and maintain consistency in your worship.
              </p>
            </div>

            {/* Digital Tasbeeh */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-purple-500 p-3 rounded-full w-fit mb-4">
                <FaDharmachakra className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3">Digital Tasbeeh</h4>
              <p className="text-green-600">
                Count your dhikr and tasbih with customizable counters and spiritual goals.
              </p>
            </div>

            {/* Islamic Calendar */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-indigo-500 p-3 rounded-full w-fit mb-4">
                <FaCalendarAlt className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3">Hijri Calendar</h4>
              <p className="text-green-600">
                Stay connected with Islamic dates and important religious events throughout the year.
              </p>
            </div>

            {/* Spiritual Notes */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-emerald-500 p-3 rounded-full w-fit mb-4">
                <FaBook className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3">Spiritual Notes</h4>
              <p className="text-green-600">
                Document your Islamic learning, reflections, and spiritual insights in one place.
              </p>
            </div>

            {/* Smart Reminders */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="bg-orange-500 p-3 rounded-full w-fit mb-4">
                <FaBell className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-3">Smart Reminders</h4>
              <p className="text-green-600">
                Set personalized reminders for prayers, dhikr, Quran reading, and Islamic events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Islamic Quote Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <p className="text-2xl md:text-3xl font-arabic mb-4 leading-relaxed" dir="rtl">
              نَّادِي اللَّهَ جَّ
            </p>
            <p className="text-xl italic mb-2">
              "And whoever fears Allah - He will make for him a way out."
            </p>
            <p className="text-green-100">
              Quran 65:2
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-green-800 mb-6">
            Begin Your Spiritual Journey Today
          </h3>
          <p className="text-green-600 text-lg mb-8">
            Join thousands of Muslims who are strengthening their faith with Tazkiyah
          </p>
          <Link
            to="/register"
            className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl font-semibold text-lg inline-flex items-center"
          >
            Create Free Account <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-600 p-2 rounded-lg mr-3">
              <FaQuran className="text-white" size={16} />
            </div>
            <h4 className="text-xl font-bold">﷽ Tazkiyah</h4>
          </div>
          <p className="text-green-200 text-sm italic">
            "And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth." - Quran 6:73
          </p>
          <p className="text-green-300 text-xs mt-4">
            © 2024 Tazkiyah. Built with love for the Muslim Ummah.
          </p>
        </div>
      </footer>
    </div>
  );
}


