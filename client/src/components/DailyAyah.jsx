import { useState, useEffect } from "react";
import axios from "axios";
import { FaQuran, FaSpinner } from "react-icons/fa";

export default function DailyAyah() {
  const [ayah, setAyah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDailyAyah = async () => {
      try {
        const res = await axios.get("http://localhost:5000/ayah/today");
        setAyah(res.data.data);
      } catch (err) {
        console.error("Error fetching daily ayah:", err);
        setError("Failed to load daily ayah");
      } finally {
        setLoading(false);
      }
    };

    fetchDailyAyah();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 mb-3 border border-green-200 max-w-2xl mx-auto">
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin text-green-600 mr-1" size={12} />
          <span className="text-green-700 text-xs">Loading daily ayah...</span>
        </div>
      </div>
    );
  }

  if (error || !ayah) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 mb-3 border border-green-200 max-w-2xl mx-auto">
        <div className="text-center text-green-600">
          <FaQuran className="mx-auto mb-1" size={12} />
          <p className="text-xs">Daily ayah will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">📖 Daily Ayah</h2>
        <p className="text-green-600 italic text-sm">"And We send down of the Quran that which is healing and mercy for the believers." - Quran 17:82</p>
      </div>

      {/* Main Ayah Card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-green-200 shadow-lg">
          {/* Arabic Text */}
          <div className="text-center mb-6">
            <p className="text-2xl md:text-3xl text-green-900 font-arabic leading-relaxed" dir="rtl">
              {ayah.arabic}
            </p>
          </div>

          {/* Translation */}
          <div className="text-center mb-6">
            <p className="text-green-700 italic text-lg md:text-xl leading-relaxed">
              "{ayah.translation}"
            </p>
          </div>

          {/* Reference */}
          <div className="text-center">
            <div className="inline-flex items-center bg-green-200 px-4 py-2 rounded-full">
              <FaQuran className="text-green-700 mr-2" size={16} />
              <span className="text-green-800 font-semibold">
                {ayah.surah} - Ayah {ayah.numberInsurah}
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Inspiration */}
      <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 max-w-2xl mx-auto">
        <p className="text-green-700 italic text-sm mb-2">
          "So remember Me; I will remember you. And be grateful to Me and do not deny Me." - Quran 2:152
        </p>
        <p className="text-green-600 text-xs">
          May this ayah bring peace and guidance to your day.
        </p>
      </div>
    </div>
  );
}





