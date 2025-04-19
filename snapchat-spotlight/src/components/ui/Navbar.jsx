'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSnapchatGhost } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname(); // Detect the current page

  // Update the active link logic
  const linkClasses = (path) => {
    if (path === '/spotlight') {
      return (pathname === '/' || pathname === '/spotlight')
        ? "font-bold border-b-2 border-black"
        : "hover:underline";
    }
    return pathname === path
      ? "font-bold border-b-2 border-black"
      : "hover:underline";
  };

  return (
    <nav className="flex justify-between items-center p-4 border-b shadow-sm bg-white">
      <div className="flex items-center space-x-4">
        <FaSnapchatGhost size={32} />
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full px-4 py-1"
        />
      </div>

      <div className="flex items-center space-x-6">
        <Link href="/stories" className={linkClasses('/stories')}>
          Stories
        </Link>
        <Link href="/spotlight" className={linkClasses('/spotlight')}>
          Spotlight
        </Link>
        <Link href="/chat" className={linkClasses('/chat')}>
          Chat
        </Link>
        <Link href="/lenses" className={linkClasses('/lenses')}>
          Lenses
        </Link>
        <Link href="/snapchat-plus" className={linkClasses('/snapchat-plus')}>
          Snapchat+
        </Link>
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Download
        </button>
      </div>
    </nav>
  );
}
