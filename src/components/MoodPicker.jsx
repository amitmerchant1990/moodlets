import React, { useState } from "react";
import { emojiMoods } from "../common";

export default function MoodPicker({ onSelect }) {
    const [note, setNote] = useState("");
    const [plusOnes, setPlusOnes] = useState([]);

    const handleSelect = (mood) => (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const newPlusOne = {
            id: Date.now() + Math.random(), // unique ID
            x: rect.left + rect.width / 2 - 10,
            y: rect.top - 40,
        };

        setPlusOnes((prev) => [
            ...prev, 
            newPlusOne
        ]);

        onSelect({ 
            mood, 
            note, 
            date: new Date().toISOString() 
        });

        setTimeout(() => {
            setPlusOnes((prev) => prev.filter((p) => p.id !== newPlusOne.id));
        }, 800);

        setNote("");
    };

    return (
        <div className="w-full max-w-md mx-auto text-center space-y-6 relative">
            <div className="flex justify-center gap-3">
                {emojiMoods.map(({ emoji, label }) => (
                    <button
                        key={emoji}
                        title={label}
                        className="sm:text-4xl md:sm:text-4xl lg:sm:text-4xl text-3xl hover:scale-125 transition-transform"
                        onClick={handleSelect(emoji)}
                    >
                        {emoji}
                    </button>
                ))}
            </div>
            {plusOnes.map(({ id, x, y }) => (
                <div
                    key={id}
                    className="plus-one text-lg"
                    style={{
                        left: x,
                        top: y,
                        position: "fixed",
                        transform: "translate(-50%, 0)",
                    }}
                >
                    +1
                </div>
            ))}
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