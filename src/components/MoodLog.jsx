import React, { useState } from "react";
import { formatDateReadable, timeAgo } from "../utils/generic";

const PAGE_SIZE = 8;

export default function MoodLog({ moods, onDelete }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(moods.length / PAGE_SIZE);
  const visibleMoods = moods.slice(0, page * PAGE_SIZE);

  return (
    <div className="bg-white p-6 rounded-lg shadow space-y-2">
      <h2 className="text-lg font-semibold text-center mb-4">Mood History</h2>

      {(!moods || moods.length === 0) ? (
        <p className="text-center text-gray-500">No moods logged yet.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {visibleMoods.map((entry) => (
              <li
                key={entry.id || entry.date}
                className="relative bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => onDelete(entry.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  title="Delete entry"
                >
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
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

          {page < totalPages && (
            <div className="text-center flex justify-center !mt-4">
              <button
                className="text-black-600 font-medium flex items-center justify-center gap-2 bg-yellow-100 hover:bg-yellow-200 transition-colors px-4 py-2 rounded-lg"
                onClick={() => setPage((prev) => prev + 1)}
              >
                Load more
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}