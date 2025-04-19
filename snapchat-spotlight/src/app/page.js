'use client';

import LoginForm from '@/components/ui/LoginForm';
import SnapInfo from '@/components/ui/SnapInfo';
import VideoCard from '@/components/ui/VideoCard';

const videos = [
  { src: '/videos/video1.mp4', username: 'Pema Dorji' },
  { src: '/videos/video2.mp4', username: 'Sonam Choden' },
  { src: '/videos/video3.mp4', username: 'Tandin Wangchuk' },
];

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 h-screen">
        
        {/* Left side - Login Form */}
        <div className="overflow-hidden">
          <LoginForm />
        </div>

        {/* Middle - Spotlight Videos (scrolling video by video) */}
        <div className="overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar flex flex-col items-center h-full">
          {videos.map((video, index) => (
            <div key={index} className="snap-center flex justify-center py-6">
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        {/* Right side - Snap Info */}
        <div className="overflow-hidden">
          <SnapInfo />
        </div>

      </div>
    </main>
  );
}
