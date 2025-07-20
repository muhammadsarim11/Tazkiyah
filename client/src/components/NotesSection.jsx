import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTimes, FaTrash, FaEdit } from "react-icons/fa";

export default function NotesSection() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [showModal, setShowModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null); // Track which note is being edited

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/note",
        newNote,
        { withCredentials: true }
      );
      setNotes((prev) => [...prev, res.data.data]);
      setNewNote({ title: "", content: "" });
      setShowModal(false);
    } catch (err) {
      console.error("Error creating note:", err);
    }
  };

  const handleUpdateNote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/note/${editingNote._id}`,
        newNote,
        { withCredentials: true }
      );
      // Update the note in state
      setNotes((prev) => 
        prev.map(note => 
          note._id === editingNote._id ? res.data.data : note
        )
      );
      setNewNote({ title: "", content: "" });
      setEditingNote(null);
      setShowModal(false);
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  const handleEditClick = (note) => {
    setEditingNote(note);
    setNewNote({ title: note.title, content: note.content });
    setShowModal(true);
  };

  const handleDeleteNote = async (noteId) => {
    if (!confirm("Are you sure you want to delete this note?")) {
      return;
    }
    
    try {
      await axios.delete(`http://localhost:5000/note/${noteId}`, {
        withCredentials: true,
      });
      setNotes((prev) => prev.filter(note => note._id !== noteId));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingNote(null);
    setNewNote({ title: "", content: "" });
  };

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/note", {
          withCredentials: true,
        });
        const notesData = res.data.note || [];
        const validNotes = notesData.filter(note => 
          note && 
          typeof note === 'object' && 
          note._id && 
          note.title !== undefined && 
          note.content !== undefined
        );
        setNotes(validNotes);
      } catch (err) {
        console.error("Error fetching notes:", err);
        setNotes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  if (loading) return <p className="text-center py-8">Loading notes...</p>;

  return (
    <div className="p-4 sm:p-6">
      {/* Header with Plus Icon - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-800">📖 My Notes</h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 text-white p-3 sm:p-2 rounded-full hover:bg-green-700 transition-colors self-start sm:self-auto shadow-lg"
          title="Add New Note"
        >
          <FaPlus size={16} />
        </button>
      </div>

      {/* Notes Display - Responsive Grid */}
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {notes.map((note) => {
            if (!note || typeof note !== 'object' || !note._id) {
              return null;
            }
            return (
              <div key={note._id} className="bg-gradient-to-br from-green-50 to-emerald-50 shadow-md hover:shadow-xl p-4 sm:p-5 rounded-lg relative border border-green-200 transition-all duration-300 hover:border-green-300">
                <h3 className="font-semibold text-green-800 pr-12 sm:pr-16 mb-2 text-sm sm:text-base line-clamp-2">
                  {note.title || 'No title'}
                </h3>
                <p className="text-green-700 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-2">
                  {note.content || 'No content'}
                </p>
                
                <p className="text-xs text-green-500">
                  {new Date(note.createdAt).toLocaleDateString()}
                </p>
                
                {/* Action Buttons - Responsive */}
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex gap-1 sm:gap-2">
                  <button
                    onClick={() => handleEditClick(note)}
                    className="text-green-600 hover:text-green-800 p-1 hover:bg-green-100 rounded transition-colors"
                    title="Edit Note"
                  >
                    <FaEdit size={12} className="sm:w-3.5 sm:h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note._id)}
                    className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors"
                    title="Delete Note"
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
          <div className="text-6xl mb-4">📚</div>
          <p className="text-green-600 text-lg mb-4">No notes found.</p>
          <p className="text-green-500 text-sm mb-6 italic">"Read! In the name of your Lord who created." - Quran 96:1</p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Create Your First Note
          </button>
        </div>
      )}

      {/* Modal Popup - Responsive */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto border-t-4 border-green-600">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                ✍️ {editingNote ? 'Edit Note' : 'Add New Note'}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <FaTimes size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <form onSubmit={editingNote ? handleUpdateNote : handleCreateNote} className="space-y-4">
              <input
                type="text"
                name="title"
                value={newNote.title}
                onChange={handleNoteChange}
                placeholder="Note Title *"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                required
              />
              <textarea
                name="content"
                value={newNote.content}
                onChange={handleNoteChange}
                placeholder="Note Content *"
                rows="4"
                className="w-full p-3 sm:p-4 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-sm sm:text-base"
                required
              ></textarea>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:flex-1 bg-green-600 text-white py-3 sm:py-2 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg"
                >
                  {editingNote ? 'Update Note' : 'Add Note'}
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
              <p className="text-xs text-green-600 italic">"And We made from them leaders guiding by Our command when they were patient and were certain of Our signs." - Quran 32:24</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}







