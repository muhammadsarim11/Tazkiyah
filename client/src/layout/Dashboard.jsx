// File: src/pages/Dashboard.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaBell,
  FaPrayingHands,
  FaDharmachakra,
  FaQuran,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaUniversity,
  FaStar,
  FaCrown,
  FaKaaba,
} from "react-icons/fa";
import NotesSection from "../components/NotesSection";
import Reminder from "../components/Reminder";
import PrayersSection from "../components/PrayersSection";
import TasbeehSection from "../components/TasbeehSection";
import DailyAyah from "../components/DailyAyah";
import HijriDate from "../components/HijriDate";
import IslamicHistory from "../components/IslamicHistory";
import AshraMushabara from "../components/AshraMushabara";
import KhulfaRashideen from "../components/KhulfaRashideen";
import PillarsOfIslam from "../components/PillarsOfIslam";

const renderSection = (activeSection) => {
  switch (activeSection) {
    case "notes":
      return <NotesSection />;
    case "reminders":
      return <Reminder/>;
    case "prayers":
      return <PrayersSection />;
    case "tasbeeh":
      return <TasbeehSection />;
    case "ayah":
      return <DailyAyah />;
    case "history":
      return <IslamicHistory />;
    case "ashra":
      return <AshraMushabara />;
    case "khulfa":
      return <KhulfaRashideen />;
    case "pillars":
      return <PillarsOfIslam />;
    default:
      return <NotesSection />;
  }
};

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("notes");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      });
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
      // Force logout even if request fails
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4 flex justify-between items-center bg-green-700 text-white">
        <h1 className="text-xl font-semibold">Tazkiyah Dashboard</h1>
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-green-100 border-r border-green-200 min-h-screen transition-all duration-300 z-10 flex flex-col`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-green-800 mb-6 text-center hidden md:block">
            ﷽ Tazkiyah
          </h2>
          <nav className="space-y-4">
            <SidebarItem
              label="Notes"
              icon={<FaBook />}
              active={activeSection === "notes"}
              onClick={() => {
                setActiveSection("notes");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Reminders"
              icon={<FaBell />}
              active={activeSection === "reminders"}
              onClick={() => {
                setActiveSection("reminders");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Prayers"
              icon={<FaPrayingHands />}
              active={activeSection === "prayers"}
              onClick={() => {
                setActiveSection("prayers");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Tasbeeh"
              icon={<FaDharmachakra />}
              active={activeSection === "tasbeeh"}
              onClick={() => {
                setActiveSection("tasbeeh");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Daily Ayah"
              icon={<FaQuran />}
              active={activeSection === "ayah"}
              onClick={() => {
                setActiveSection("ayah");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Islamic History"
              icon={<FaUniversity />}
              active={activeSection === "history"}
              onClick={() => {
                setActiveSection("history");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Ashra Mubashra"
              icon={<FaStar />}
              active={activeSection === "ashra"}
              onClick={() => {
                setActiveSection("ashra");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Khulfa-e-Rashideen"
              icon={<FaCrown />}
              active={activeSection === "khulfa"}
              onClick={() => {
                setActiveSection("khulfa");
                setSidebarOpen(false);
              }}
            />
            <SidebarItem
              label="Pillars of Islam"
              icon={<FaKaaba />}
              active={activeSection === "pillars"}
              onClick={() => {
                setActiveSection("pillars");
                setSidebarOpen(false);
              }}
            />
          </nav>
        </div>
        
        {/* Logout Button - Always at bottom */}
        <div className="mt-auto p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 border border-red-200 hover:border-red-300 shadow-sm hover:shadow-md font-medium text-sm"
            title="Logout"
          >
            <FaSignOutAlt size={14} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6">
        {/* Top Widget - Hijri Date Only for Notes Section */}
        {activeSection === "notes" && (
          <div className="mb-6">
            <HijriDate />
          </div>
        )}
        {renderSection(activeSection)}
      </main>
    </div>
  );
}

function SidebarItem({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2 rounded-md text-left ${
        active
          ? "bg-green-600 text-white"
          : "text-green-800 hover:bg-green-200 transition"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
