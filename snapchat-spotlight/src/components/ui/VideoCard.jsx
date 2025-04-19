'use client';

import { useRef, useEffect } from 'react';

export default function VideoCard({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.7 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center snap-center overflow-hidden">
      {/* The Video */}
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        className="object-cover w-full h-full"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        
        {/* Username at bottom left */}
        <div className="flex justify-between items-end h-full">
          <div className="text-white">
            <h2 className="text-xl font-bold">@{video.username}</h2>
          </div>

          {/* Buttons on right */}
          <div className="flex flex-col items-center gap-5 mr-3 mb-10">
            <button className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
              ❤️
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
              💬
            </button>
            <button className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-transform">
              ➡️
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
