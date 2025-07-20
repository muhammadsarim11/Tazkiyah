import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function PrayersSection() {
  const [prayers, setPrayers] = useState({
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false,
  });
  const [loading, setLoading] = useState(true);

  const prayerNames = [
    { key: 'fajr', name: 'Fajr', arabic: 'الفجر', time: 'Dawn', icon: '🌅' },
    { key: 'dhuhr', name: 'Dhuhr', arabic: 'الظهر', time: 'Midday', icon: '☀️' },
    { key: 'asr', name: 'Asr', arabic: 'العصر', time: 'Afternoon', icon: '🌤️' },
    { key: 'maghrib', name: 'Maghrib', arabic: 'المغرب', time: 'Sunset', icon: '🌅' },
    { key: 'isha', name: 'Isha', arabic: 'العشاء', time: 'Night', icon: '🌙' },
  ];

  const handlePrayerToggle = async (prayerKey) => {
    const updatedPrayers = {
      ...prayers,
      [prayerKey]: !prayers[prayerKey]
    };

    try {
      await axios.post(
        "http://localhost:5000/user/prayers",
        { prayers: updatedPrayers },
        { withCredentials: true }
      );
      setPrayers(updatedPrayers);
    } catch (err) {
      console.error("Error updating prayer:", err);
    }
  };

  useEffect(() => {
    const fetchTodayPrayers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/prayers", {
          withCredentials: true,
        });
        if (res.data.record && res.data.record.prayers) {
          setPrayers(res.data.record.prayers);
        }
      } catch (err) {
        console.error("Error fetching prayers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTodayPrayers();
  }, []);

  const completedPrayers = Object.values(prayers).filter(Boolean).length;
  const progressPercentage = (completedPrayers / 5) * 100;

  if (loading) return <p className="text-center py-8">Loading prayers...</p>;

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">🕌 Daily Prayers</h2>
        <p className="text-green-600 italic text-sm">"And establish prayer and give zakah and bow with those who bow." - Quran 2:43</p>
      </div>

      {/* Progress Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-green-800 mb-2">Today's Progress</h3>
          <div className="text-3xl font-bold text-green-700">
            {completedPrayers}/5
          </div>
          <p className="text-green-600 text-sm">Prayers Completed</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-green-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="text-center">
          {completedPrayers === 5 ? (
            <p className="text-green-700 font-semibold">🎉 Alhamdulillah! All prayers completed!</p>
          ) : (
            <p className="text-green-600">Keep going! {5 - completedPrayers} prayers remaining</p>
          )}
        </div>
      </div>

      {/* Prayer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
        {prayerNames.map((prayer) => (
          <div
            key={prayer.key}
            className={`relative rounded-xl p-6 border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              prayers[prayer.key]
                ? 'bg-gradient-to-br from-green-100 to-emerald-100 border-green-400 shadow-lg'
                : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 hover:border-green-300'
            }`}
            onClick={() => handlePrayerToggle(prayer.key)}
          >
            {/* Status Icon */}
            <div className="absolute top-3 right-3">
              {prayers[prayer.key] ? (
                <div className="bg-green-500 text-white rounded-full p-1">
                  <FaCheck size={12} />
                </div>
              ) : (
                <div className="bg-gray-300 text-gray-600 rounded-full p-1">
                  <FaTimes size={12} />
                </div>
              )}
            </div>

            {/* Prayer Info */}
            <div className="text-center">
              <div className="text-3xl mb-2">{prayer.icon}</div>
              <h3 className={`text-lg font-bold mb-1 ${prayers[prayer.key] ? 'text-green-800' : 'text-gray-700'}`}>
                {prayer.name}
              </h3>
              <p className={`text-sm mb-1 ${prayers[prayer.key] ? 'text-green-600' : 'text-gray-500'}`}>
                {prayer.arabic}
              </p>
              <p className={`text-xs ${prayers[prayer.key] ? 'text-green-500' : 'text-gray-400'}`}>
                {prayer.time}
              </p>
            </div>

            {/* Completion Status */}
            <div className="mt-4 text-center">
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                prayers[prayer.key]
                  ? 'bg-green-200 text-green-800'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {prayers[prayer.key] ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Inspiration */}
      <div className="mt-8 text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
        <p className="text-green-700 italic text-sm mb-2">
          "Verily, in the remembrance of Allah do hearts find rest." - Quran 13:28
        </p>
        <p className="text-green-600 text-xs">
          May Allah accept your prayers and grant you consistency in worship.
        </p>
      </div>
    </div>
  );
}