import React from 'react';
import { MdOutlineCameraAlt } from 'react-icons/md';

export default function CameraBox() {
  return (
    <div className="bg-[#3a3a3a] w-72 h-96 flex flex-col items-center justify-center rounded-xl shadow-lg p-4">
      <button
        className="bg-gray-700 w-24 h-24 rounded-full shadow-md hover:scale-105 transition-transform duration-200 mb-5 flex items-center justify-center"
        aria-label="Open Camera"
      >
        <MdOutlineCameraAlt size={56} className="text-white" />
      </button>
      <p className="text-sm text-gray-200 mb-6">Click the Camera to send Snaps</p>
      <div className="flex gap-3">
        <div className="w-4 h-4 bg-black rounded-full" />
        <div className="w-4 h-4 bg-red-600 rounded-full" />
        <div className="w-4 h-4 bg-gray-600 rounded-full" />
      </div>
    </div>
  );
}
