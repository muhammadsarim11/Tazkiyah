import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash, FaTimes, FaUndo } from "react-icons/fa";

export default function TasbeehSection() {
  const [tasbeehs, setTasbeehs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newTasbeeh, setNewTasbeeh] = useState({ title: "", goal: 100 });
  const [editingTasbeeh, setEditingTasbeeh] = useState(null);

  const handleTasbeehChange = (e) => {
    const { name, value } = e.target;
    setNewTasbeeh(prev => ({
      ...prev,
      [name]: name === 'goal' ? parseInt(value) || 0 : value
    }));
  };

  const handleCreateTasbeeh = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/tasbeeh",
        newTasbeeh,
        { withCredentials: true }
      );
      setTasbeehs(prev => [...prev, res.data.data]);
      setNewTasbeeh({ title: "", goal: 100 });
      setShowModal(false);
    } catch (err) {
      console.error("Error creating tasbeeh:", err);
    }
  };

  const handleIncrement = async (tasbeehId) => {
    console.log("Attempting to increment tasbeeh:", tasbeehId); // Debug log
    try {
      const res = await axios.patch(
        `http://localhost:5000/tasbeeh/${tasbeehId}`,
        { increment: true },
        { withCredentials: true }
      );
      console.log("Server response:", res.data); // Debug log
      setTasbeehs(prev => 
        prev.map(tasbeeh => 
          tasbeeh._id === tasbeehId ? res.data.data : tasbeeh
        )
      );
    } catch (err) {
      console.error("Error incrementing tasbeeh:", err);
      console.error("Error response:", err.response?.data); // Debug log
    }
  };

  const handleReset = async (tasbeehId) => {
    if (!confirm("Are you sure you want to reset this tasbeeh counter?")) {
      return;
    }
    
    try {
      const res = await axios.delete(`http://localhost:5000/tasbeeh/${tasbeehId}`, {
        withCredentials: true,
      });
      setTasbeehs(prev => 
        prev.map(tasbeeh => 
          tasbeeh._id === tasbeehId ? res.data.data : tasbeeh
        )
      );
    } catch (err) {
      console.error("Error resetting tasbeeh:", err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setNewTasbeeh({ title: "", goal: 100 });
  };

  const handleUpdateTasbeeh = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/tasbeeh/${editingTasbeeh._id}`,
        newTasbeeh,
        { withCredentials: true }
      );
      setTasbeehs(prev => 
        prev.map(tasbeeh => 
          tasbeeh._id === editingTasbeeh._id ? res.data.data : tasbeeh
        )
      );
      setNewTasbeeh({ title: "", goal: 100 });
      setEditingTasbeeh(null);
      setShowModal(false);
    } catch (err) {
      console.error("Error updating tasbeeh:", err);
    }
  };

  const handleEditClick = (tasbeeh) => {
    setEditingTasbeeh(tasbeeh);
    setNewTasbeeh({ title: tasbeeh.title, goal: tasbeeh.goal });
    setShowModal(true);
  };

  useEffect(() => {
    const fetchTasbeehs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/tasbeeh", {
          withCredentials: true,
        });
        setTasbeehs(res.data.tasbeeh || []);
      } catch (err) {
        console.error("Error fetching tasbeehs:", err);
        setTasbeehs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTasbeehs();
  }, []);

  if (loading) return <p className="text-center py-8">Loading tasbeeh...</p>;

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-800">📿 Digital Tasbeeh</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white p-3 sm:p-2 rounded-full hover:bg-green-700 transition-colors self-start sm:self-auto shadow-lg"
          title="Add New Tasbeeh"
        >
          <FaPlus size={16} />
        </button>
      </div>

      {/* Tasbeehs Display */}
      {tasbeehs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {tasbeehs.map((tasbeeh) => {
            const progress = (tasbeeh.count / tasbeeh.goal) * 100;
            const isCompleted = tasbeeh.count >= tasbeeh.goal;
            
            return (
              <div key={tasbeeh._id} className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg hover:shadow-xl p-6 rounded-xl border border-green-200 transition-all duration-300">
                {/* Header with actions */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-green-800 text-lg flex-1 pr-2">
                    {tasbeeh.title}
                  </h3>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleReset(tasbeeh._id)}
                      className="text-orange-500 hover:text-orange-700 p-1 hover:bg-orange-50 rounded transition-colors"
                      title="Reset Counter"
                    >
                      <FaUndo size={12} />
                    </button>
                  </div>
                </div>

                {/* Counter Display */}
                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold mb-2 ${isCompleted ? 'text-green-600' : 'text-green-800'}`}>
                    {tasbeeh.count}
                  </div>
                  <div className="text-green-600 text-sm">
                    Goal: {tasbeeh.goal}
                  </div>
                  {isCompleted && (
                    <div className="text-green-600 text-sm font-semibold mt-1">
                      🎉 Alhamdulillah! Goal Reached!
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-green-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gradient-to-r from-green-400 to-green-500'
                      }`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-xs text-green-600">
                    {Math.round(progress)}% Complete
                  </div>
                </div>

                {/* Counter Button */}
                <button
                  onClick={() => handleIncrement(tasbeeh._id)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg transform hover:scale-105 active:scale-95"
                >
                  <span className="text-2xl mr-2">📿</span>
                  Tap to Count
                </button>

                {/* Creation Date */}
                <div className="text-center mt-3">
                  <p className="text-xs text-green-500">
                    Created: {new Date(tasbeeh.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📿</div>
          <p className="text-green-600 text-lg mb-4">No tasbeeh counters found.</p>
          <p className="text-green-500 text-sm mb-6 italic">"And remember your Lord much and exalt [Him with praise] in the evening and the morning." - Quran 3:41</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Create Your First Tasbeeh
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto border-t-4 border-green-600">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                📿 {editingTasbeeh ? 'Edit Tasbeeh' : 'Add New Tasbeeh'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <form onSubmit={editingTasbeeh ? handleUpdateTasbeeh : handleCreateTasbeeh} className="space-y-4">
              <input
                type="text"
                name="title"
                value={newTasbeeh.title}
                onChange={handleTasbeehChange}
                placeholder="Tasbeeh Title (e.g., SubhanAllah, Alhamdulillah) *"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                required
              />
              
              <input
                type="number"
                name="goal"
                value={newTasbeeh.goal}
                onChange={handleTasbeehChange}
                placeholder="Goal (Default: 100)"
                min="1"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
              />
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 bg-green-600 text-white py-3 sm:py-2 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg"
                >
                  {editingTasbeeh ? 'Update Tasbeeh' : 'Create Tasbeeh'}
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
              <p className="text-xs text-green-600 italic">"So remember Me; I will remember you." - Quran 2:152</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








