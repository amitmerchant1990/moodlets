import React from "react";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="sm:text-3xl md:text-3xl text-2xl font-bold text-gray-800 flex items-center gap-2 font-fraunces">
            <span>Moodlets</span>
          </h1>
          <p className="sm:text-xs text-sm text-gray-500">A Micro Mood Logger</p>
        </div>
        <div>
          <a
            href="https://www.buymeacoffee.com/amitmerchant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold py-2 px-4 rounded-lg transition-all flex items-center gap-2"
          >
            <svg fill="#000000" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,7H5.117L7.008,22.124A1,1,0,0,0,8,23h8a1,1,0,0,0,.992-.876L18.883,7H20a1,1,0,0,0,0-2H18.721l-.772-2.316A1,1,0,0,0,17,2H16a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1H7a1,1,0,0,0-.949.684L5.279,5H4A1,1,0,0,0,4,7ZM15.117,21H8.883L7.133,7h9.734ZM7.721,4h8.558l.334,1H7.387ZM10,12a2,2,0,1,1,2,2A2,2,0,0,1,10,12Z"></path></g></svg>
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </header>
  );
}