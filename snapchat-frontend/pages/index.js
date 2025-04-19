import { useState } from 'react';
import Navbar from '../components/Navbar';
import Camera from '../components/Camera';
import ChatAndStories from '../components/ChatAndStories';
import VideoFeed from '../components/VideoFeed';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('camera'); // Default tab

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Snapchat-inspired App</h1>
          <div className={styles.tabs}>
            <button onClick={() => setActiveTab('camera')} className={styles.tab}>Camera</button>
            <button onClick={() => setActiveTab('chatAndStories')} className={styles.tab}>Chat & Stories</button>
            <button onClick={() => setActiveTab('videoFeed')} className={styles.tab}>Personalized Feed</button>
          </div>

          {activeTab === 'camera' && <Camera />}
          {activeTab === 'chatAndStories' && <ChatAndStories />}
          {activeTab === 'videoFeed' && <VideoFeed />}
        </main>
      </div>
    </div>
  );
}