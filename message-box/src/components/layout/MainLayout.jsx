'use client'
import Link from 'next/link'

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-[#1a1a1a] p-4 flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/upload">Upload</Link>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
