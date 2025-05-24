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
    </div>
  );
}

export default App;