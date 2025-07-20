import { useEffect, useState } from "react";
import axios from "axios";

function NotesSection() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/note", {
          withCredentials: true,
        });
        setNotes(res.data.notes);
      } catch (err) {
        console.error("Error fetching notes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      {loading ? (
        <p>Loading notes...</p>
      ) : notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note._id}
              className="bg-white dark:bg-gray-800 shadow rounded p-4"
            >
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">{note.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{note.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
}

export default NotesSection;
