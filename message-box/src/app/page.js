import ChatList from '@/components/ui/ChatList';
import CameraBox from '@/components/ui/CameraBox';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#1a1a1a] p-5 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Image
            src="/bitmoji.png"
            alt="Bitmoji"
            width={44}
            height={44}
            className="rounded-full"
          />
          <div className="relative">
            <Image src="/snapchat-icon.png" alt="Snapchat" width={26} height={26} />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-[10px] leading-none w-5 h-5 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
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
      <main className="flex-1 bg-[#2a2a2a] flex items-center justify-center p-5">
        <CameraBox />
      </main>

      {/* Bitmoji Full */}
      <aside className="w-1/4 bg-[#1a1a1a] flex items-center justify-center p-5">
        <Image src="/bitmoji-full.png" alt="Bitmoji Full" width={220} height={420} />
      </aside>
    </div>
  );
}
