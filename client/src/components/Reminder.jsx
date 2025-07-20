import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTimes, FaTrash, FaEdit, FaClock } from "react-icons/fa";

export default function Reminder() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newReminder, setNewReminder] = useState({ title: "", message: "", time: "" });
  const [showModal, setShowModal] = useState(false);
  const [editingReminder, setEditingReminder] = useState(null);

  const handleReminderChange = (e) => {
    const { name, value } = e.target;
    setNewReminder((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateReminder = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/reminder",
        newReminder,
        { withCredentials: true }
      );
      setReminders((prev) => [...prev, res.data.data]);
      setNewReminder({ title: "", message: "", time: "" });
      setShowModal(false);
    } catch (err) {
      console.error("Error creating reminder:", err);
    }
  };

  const handleUpdateReminder = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/reminder/${editingReminder._id}`,
        newReminder,
        { withCredentials: true }
      );
      setReminders((prev) => 
        prev.map(reminder => 
          reminder._id === editingReminder._id ? res.data.data : reminder
        )
      );
      setNewReminder({ title: "", message: "", time: "" });
      setEditingReminder(null);
      setShowModal(false);
    } catch (err) {
      console.error("Error updating reminder:", err);
    }
  };

  const handleEditClick = (reminder) => {
    setEditingReminder(reminder);
    setNewReminder({ 
      title: reminder.title, 
      message: reminder.message || "", 
      time: reminder.time || "" 
    });
    setShowModal(true);
  };

  const handleDeleteReminder = async (reminderId) => {
    if (!confirm("Are you sure you want to delete this reminder?")) {
      return;
    }
    
    try {
      await axios.delete(`http://localhost:5000/reminder/${reminderId}`, {
        withCredentials: true,
      });
      setReminders((prev) => prev.filter(reminder => reminder._id !== reminderId));
    } catch (err) {
      console.error("Error deleting reminder:", err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingReminder(null);
    setNewReminder({ title: "", message: "", time: "" });
  };

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/reminder", {
          withCredentials: true,
        });
        const remindersData = res.data.data || [];
        setReminders(remindersData);
      } catch (err) {
        console.error("Error fetching reminders:", err);
        setReminders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchReminders();
  }, []);

  if (loading) return <p className="text-center py-8">Loading reminders...</p>;

  return (
    <div className="p-4 sm:p-6">
      {/* Header with Plus Icon - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-800">📿 My Reminders</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white p-3 sm:p-2 rounded-full hover:bg-green-700 transition-colors self-start sm:self-auto shadow-lg"
          title="Add New Reminder"
        >
          <FaPlus size={16} />
        </button>
      </div>

      {/* Reminders Display - Responsive Grid */}
      {reminders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {reminders.map((reminder) => {
            if (!reminder || typeof reminder !== 'object' || !reminder._id) {
              return null;
            }
            return (
              <div key={reminder._id} className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-md hover:shadow-xl p-4 sm:p-5 rounded-lg relative border border-green-200 transition-all duration-300 hover:border-green-300">
                <h3 className="font-semibold text-green-800 pr-12 sm:pr-16 mb-2 text-sm sm:text-base line-clamp-2">
                  {reminder.title || 'No title'}
                </h3>
                
                {reminder.message && (
                  <p className="text-green-700 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-2">
                    {reminder.message}
                  </p>
                )}
                
                {reminder.time && (
                  <div className="flex items-center text-emerald-600 text-xs sm:text-sm mb-2 bg-green-100 px-2 py-1 rounded-full w-fit">
                    <FaClock size={12} className="mr-1" />
                    <span>{reminder.time}</span>
                  </div>
                )}
                
                <p className="text-xs text-green-500">
                  {new Date(reminder.createdAt).toLocaleDateString()}
                </p>
                
                {/* Action Buttons - Responsive */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2">
                  <button
                    onClick={() => handleEditClick(reminder)}
                    className="text-green-600 hover:text-green-800 p-1 hover:bg-green-100 rounded transition-colors"
                    title="Edit Reminder"
                  >
                    <FaEdit size={12} className="sm:w-3.5 sm:h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteReminder(reminder._id)}
                    className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                    title="Delete Reminder"
                  >
                    <FaTrash size={12} className="sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🕌</div>
          <p className="text-green-600 text-lg mb-4">No reminders found.</p>
          <p className="text-green-500 text-sm mb-6 italic">"And remind, for indeed, the reminder benefits the believers." - Quran 51:55</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Create Your First Reminder
          </button>
        </div>
      )}

      {/* Modal Popup - Responsive */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto border-t-4 border-green-600">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                🤲 {editingReminder ? 'Edit Reminder' : 'Add New Reminder'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <FaTimes size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <form onSubmit={editingReminder ? handleUpdateReminder : handleCreateReminder} className="space-y-4">
              <input
                type="text"
                name="title"
                value={newReminder.title}
                onChange={handleReminderChange}
                placeholder="Reminder Title *"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                required
              />
              
              <textarea
                name="message"
                value={newReminder.message}
                onChange={handleReminderChange}
                placeholder="Reminder Message (Optional)"
                rows="3"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
              ></textarea>
              
              <input
                type="time"
                name="time"
                value={newReminder.time}
                onChange={handleReminderChange}
                placeholder="Time (Optional)"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 bg-green-600 text-white py-3 sm:py-2 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg"
                >
                  {editingReminder ? 'Update Reminder' : 'Add Reminder'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:flex-1 bg-gray-300 text-gray-700 py-3 sm:py-2 rounded-lg hover:bg-gray-400 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-green-600 italic">"And it is He who created the heavens and earth in truth. And the day He says, 'Be,' and it is, His word is the truth." - Quran 6:73</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
