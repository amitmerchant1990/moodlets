import React from "react";
import { DateTime } from "luxon";
import { emojiMoods } from "../common";

export default function WeeklySummary({ moods }) {
  const weekAgo = DateTime.now().minus({ days: 6 }).startOf("day");

  const weekMoods = moods.filter((entry) =>
    DateTime.fromISO(entry.date) >= weekAgo
  );

  const moodCounts = weekMoods.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  const sortedMoods = Object.entries(moodCounts).sort((a, b) => b[1] - a[1]);

  const getMoodLabel = (emoji) =>
    emojiMoods.find((item) => item.emoji === emoji)?.label || "";

  return (
    <div className="bg-yellow-50 p-6 rounded-lg shadow space-y-2">
      <h2 className="text-lg font-semibold text-center mb-4">This Week's Moods</h2>
      {sortedMoods.length === 0 ? (
        <p className="text-center text-gray-500">No moods logged yet this week.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
          {sortedMoods.map(([mood, count]) => (
            <li key={mood} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <span className="font-bold flex gap-3"><span>{mood}</span><span>{getMoodLabel(mood)}</span></span>
              <span className="font-medium">{count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}