import React, { useState, useEffect } from "react";
import MoodPicker from "./components/MoodPicker";
import MoodLog from "./components/MoodLog";
import { loadMoods, saveMood, deleteMood } from "./utils/storage";
import Header from "./components/Header";
import MoodChart from "./components/MoodChart";
import WeeklySummary from "./components/WeeklySummary";
import WeeklyActions from "./components/WeeklyActions";

function App() {
  const [moods, setMoods] = useState([]);

  useEffect(() => {
    async function fetchAndSortMoods() {
      const all = await loadMoods();
      const sorted = all.sort((a, b) => new Date(b.date) - new Date(a.date));
      setMoods(sorted);
    }
  
    fetchAndSortMoods();
  }, []);

  const handleMood = async (entry) => {
    await saveMood(entry);
    const all = await loadMoods();
    setMoods(all.sort((a, b) => new Date(b.date) - new Date(a.date))); 
  };

  const handleDelete = async (id) => {
    await deleteMood(id);
    const all = await loadMoods();
    setMoods(all.sort((a, b) => new Date(b.date) - new Date(a.date))); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <Header />
      <main className="p-6 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-6 space-y-6">
          <MoodPicker onSelect={handleMood} />
          <MoodChart moods={moods} />
          <WeeklySummary moods={moods} />
          <WeeklyActions moods={moods} />
          <MoodLog moods={moods} onDelete={handleDelete} />
        </div>
      </main>
      <footer className="text-center text-sm text-gray-500 py-4 mb-4">
        <a
          href="https://github.com/amitmerchant1990/moodlets"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline flex items-center justify-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg>
          View Source on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;