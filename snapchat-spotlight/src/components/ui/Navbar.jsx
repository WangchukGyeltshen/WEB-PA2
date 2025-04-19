'use client';

import { FaSnapchatGhost } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b shadow-sm">
      <div className="flex items-center space-x-4">
        <FaSnapchatGhost size={32} />
        <input type="text" placeholder="Search" className="border rounded-full px-4 py-1" />
      </div>
      <div className="flex items-center space-x-6">
        <span>Stories</span>
        <span className="font-bold border-b-2 border-black">Spotlight</span>
        <span>Chat</span>
        <span>Lenses</span>
        <span>Snapchat+</span>
        <button className="bg-black text-white px-4 py-2 rounded-md">Download</button>
      </div>
    </nav>
  );
}
