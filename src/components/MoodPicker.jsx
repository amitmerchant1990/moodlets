import React, { useState } from "react";
import { emojiMoods } from "../common";

export default function MoodPicker({ onSelect }) {
  const [note, setNote] = useState("");

  const handleSelect = (mood) => {
    onSelect({ mood, note, date: new Date().toISOString() });
    setNote("");
  };

  return (
    <div className="w-full max-w-md mx-auto text-center space-y-6">
      <div className="flex justify-center gap-3">
        {emojiMoods.map(({ emoji, label }) => (
          <button
            key={emoji}
            title={label}
            className="sm:text-4xl md:sm:text-4xl lg:sm:text-4xl text-3xl hover:scale-125 transition-transform"
            onClick={() => handleSelect(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Describe how are you feeling (optional)..."
        rows={2}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}