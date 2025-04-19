import React from 'react';
import Image from 'next/image';

export default function CameraBox() {
  return (
    <div className="bg-[#3a3a3a] w-72 h-96 flex flex-col items-center justify-center rounded-xl shadow-lg p-4">
      <div className="bg-white p-0 rounded-full shadow-md hover:scale-105 transition-transform duration-200 mb-5">
        <Image src="/Screenshot 2025-04-19 at 6.35.54 PM.png" alt="Camera" width={100} height={100} />
      </div>
      <p className="text-sm text-gray-200 mb-6">Click the Camera to send Snaps</p>
      <div className="flex gap-3">
        <div className="w-4 h-4 bg-black rounded-full" />
        <div className="w-4 h-4 bg-red-600 rounded-full" />
        <div className="w-4 h-4 bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}
