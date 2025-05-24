import React from "react";
import { formatDateReadable, timeAgo } from "../utils/generic"; // adjust path as needed

export default function MoodLog({ moods, onDelete }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow space-y-2">
        <h2 className="text-lg font-semibold text-center mb-4">Mood History</h2>
  
        {(!moods || moods.length === 0) ? (
          <p className="text-center text-gray-500">No moods logged yet.</p>
        ) : (
          <ul className="space-y-4">
            {moods.map((entry) => (
              <li
                key={entry.id || entry.date}
                className="relative bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => onDelete(entry.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  title="Delete entry"
                >
                  ✖
                </button>
                <div className="mb-3">
                    <div className="text-2xl mb-2">{entry.mood}</div>
                    {entry.note && <div className="text-gray-800 mt-1">{entry.note}</div>}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{timeAgo(entry.date)}</span>
                    <span>{formatDateReadable(entry.date)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }