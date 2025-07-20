import { useState, useEffect } from "react";
import axios from "axios";
import { FaCalendarAlt, FaSpinner } from "react-icons/fa";

export default function HijriDate() {
  const [hijriData, setHijriData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHijriDate = async () => {
      try {
        const res = await axios.get("http://localhost:5000/date");
        setHijriData(res.data.data);
      } catch (err) {
        console.error("Error fetching Hijri date:", err);
        setError("Failed to load Hijri date");
      } finally {
        setLoading(false);
      }
    };

    fetchHijriDate();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-3 border border-blue-200 shadow-sm max-w-2xl mx-auto">
        <div className="flex items-center justify-center">
          <FaSpinner className="animate-spin text-blue-600 mr-1" size={12} />
          <span className="text-blue-700 text-xs">Loading date...</span>
        </div>
      </div>
    );
  }

  if (error || !hijriData) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 mb-3 border border-blue-200 shadow-sm max-w-2xl mx-auto">
        <div className="text-center text-blue-600">
          <FaCalendarAlt className="mx-auto mb-1" size={12} />
          <p className="text-xs">Islamic date will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-lg p-3 mb-3 border border-blue-200 shadow-sm max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center mb-2">
        <FaCalendarAlt className="text-blue-600 mr-1" size={12} />
        <h3 className="text-sm font-medium text-blue-800">Islamic Date</h3>
      </div>

      {/* Hijri Date */}
      <div className="text-center mb-2">
        <p className="text-base text-blue-900 font-semibold leading-snug">
          {hijriData.hijriDate}
        </p>
      </div>

      {/* Weekday */}
      <div className="text-center mb-2">
        <p className="text-blue-700 text-xs">
          {hijriData.weekday}
        </p>
      </div>

      {/* Events (if any) */}
      {hijriData.events && hijriData.events.length > 0 && (
        <div className="text-center">
          <p className="text-blue-600 text-xs font-medium">
            🎉 {hijriData.events[0]}
          </p>
        </div>
      )}
    </div>
  );
}