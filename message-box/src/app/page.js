import ChatList from '@/components/ui/ChatList';
import CameraBox from '@/components/ui/CameraBox';
import Image from 'next/image';
import { FiUserPlus, FiSettings } from 'react-icons/fi'; // ✅ Add settings icon

export default function Home() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#1a1a1a] p-5 flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* ⚙️ Replace avatar with settings icon button */}
          <button className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white p-2 rounded-full transition duration-200">
            <FiSettings size={20} />
          </button>

          {/* Friend Add Button stays */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-all duration-200 shadow">
            <FiUserPlus size={20} />
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="bg-[#2a2a2a] text-white p-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow mb-5"
        />

        {/* Chats */}
        <ChatList />
      </aside>

      {/* Camera */}
      <main className="flex-1 bg-[#2a2a2a] flex items-center justify-center p-3">
        <CameraBox />
      </main>

      {/* Right Panel */}
      <aside className="w-1/4 bg-[#2a2a2a] flex items-center justify-center p-5">
        <Image src="/avatar.png" alt="Bitmoji Full" width={320} height={520} />
      </aside>
    </div>
  );
}
