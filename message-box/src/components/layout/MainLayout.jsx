'use client'
import Link from 'next/link'

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen w-screen bg-black text-white">

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
