import React from 'react';

const chats = [
  { name: 'SWE ge psychos', newSnap: true },
  { name: 'Jimmy Choden', time: '21m', emoji: '🔥', reply: true },
  { name: 'Chimi Wangmo', time: '25m', emoji: '223🔥', reply: true },
  { name: 'Kinley Tshering', time: '28m', emoji: '32😜', reply: true },
  { name: 'Lucky Py', time: '54m', emoji: '16🔥', reply: true },
  { name: 'Sherab', time: '1h', type: 'screenshot' },
  { name: 'Namgay Lhamo', time: '1h', emoji: '205🔥', type: 'screenshot' },
  { name: 'Kuenga Choden', time: '1h', emoji: '96🔥', type: 'screenshot' },
];

export default function ChatList() {
  return (
    <div className="flex-1 overflow-y-auto space-y-2 px-1 scrollbar-thin scrollbar-thumb-gray-700">
      {chats.map((chat, i) => (
        <div
          key={i}
          className="flex items-center justify-between p-3 hover:bg-[#333] rounded-lg transition-colors duration-150"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-600 flex-shrink-0" />
            <div>
              <p className="font-medium">{chat.name}</p>
              <p className="text-gray-400 text-xs mt-0.5">
                {chat.newSnap
                  ? 'New Snap on mobile'
                  : `${chat.type === 'screenshot' ? 'Screenshot' : 'Received'} · ${chat.time} ${chat.emoji || ''}`}
              </p>
            </div>
          </div>
          {chat.reply && (
            <button className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors">
              Reply
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
