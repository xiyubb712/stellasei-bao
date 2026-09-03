"use client";

import { useState } from "react";

// ========== 应用图标组件 ==========
interface AppIconProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

function AppIcon({ name, icon, color, onClick }: AppIconProps) {
  return (
    <div 
      className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform duration-150"
      onClick={onClick}
    >
      <div 
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${color}`}
      >
        {icon}
      </div>
      <span className="text-xs text-gray-700 font-medium">{name}</span>
    </div>
  );
}

// ========== SVG图标 ==========
const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const ContactsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const WorldBookIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const MusicIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

const MemoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
    <path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path>
    <path d="M12 12l7-7"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const CameraIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
    <circle cx="12" cy="13" r="4"></circle>
  </svg>
);

const PhotosIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const WeatherIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const CalculatorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <line x1="8" y1="6" x2="16" y2="6"></line>
    <line x1="8" y1="12" x2="8" y2="12"></line>
    <line x1="12" y1="12" x2="12" y2="12"></line>
    <line x1="16" y1="12" x2="16" y2="12"></line>
    <line x1="8" y1="16" x2="8" y2="16"></line>
    <line x1="12" y1="16" x2="12" y2="16"></line>
    <line x1="16" y1="16" x2="16" y2="16"></line>
  </svg>
);

const NotesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const MapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
    <line x1="8" y1="2" x2="8" y2="18"></line>
    <line x1="16" y1="6" x2="16" y2="22"></line>
  </svg>
);

const AppStoreIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);

// ========== 主屏幕组件 ==========
export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  // 第一页应用
  const page1Apps = [
    { name: "星绥信箱", icon: <ChatIcon />, color: "bg-gradient-to-br from-purple-400 to-purple-600" },
    { name: "联系人", icon: <ContactsIcon />, color: "bg-gradient-to-br from-amber-400 to-amber-600" },
    { name: "世界书", icon: <WorldBookIcon />, color: "bg-gradient-to-br from-emerald-400 to-emerald-600" },
    { name: "设置", icon: <SettingsIcon />, color: "bg-gradient-to-br from-gray-400 to-gray-600" },
    { name: "音乐", icon: <MusicIcon />, color: "bg-gradient-to-br from-pink-400 to-pink-600" },
    { name: "记忆", icon: <MemoryIcon />, color: "bg-gradient-to-br from-blue-400 to-blue-600" },
    { name: "日历", icon: <CalendarIcon />, color: "bg-gradient-to-br from-red-400 to-red-600" },
    { name: "相机", icon: <CameraIcon />, color: "bg-gradient-to-br from-gray-600 to-gray-800" },
    { name: "相册", icon: <PhotosIcon />, color: "bg-gradient-to-br from-cyan-400 to-cyan-600" },
    { name: "天气", icon: <WeatherIcon />, color: "bg-gradient-to-br from-sky-400 to-sky-600" },
    { name: "时钟", icon: <ClockIcon />, color: "bg-gradient-to-br from-gray-700 to-gray-900" },
    { name: "计算器", icon: <CalculatorIcon />, color: "bg-gradient-to-br from-orange-400 to-orange-600" },
  ];

  // Dock栏应用
  const dockApps = [
    { name: "电话", icon: <ChatIcon />, color: "bg-gradient-to-br from-green-400 to-green-600" },
    { name: "星绥信箱", icon: <ChatIcon />, color: "bg-gradient-to-br from-purple-400 to-purple-600" },
    { name: "备忘录", icon: <NotesIcon />, color: "bg-gradient-to-br from-yellow-400 to-yellow-600" },
    { name: "应用库", icon: <AppStoreIcon />, color: "bg-gradient-to-br from-indigo-400 to-indigo-600" },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景 - 淡金色渐变 */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        {/* 装饰性星星 */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-amber-300 rounded-full animate-twinkle" style={{ animationDelay: "0s" }}></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-pink-300 rounded-full animate-twinkle" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-32 right-1/3 w-1 h-1 bg-amber-200 rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-80 left-16 w-1.5 h-1.5 bg-purple-200 rounded-full animate-twinkle" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* 主内容区域 */}
      <div className="relative z-10 flex flex-col h-full pt-16 pb-6 px-6">
        {/* 应用图标网格 */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            {page1Apps.map((app, index) => (
              <AppIcon
                key={index}
                name={app.name}
                icon={app.icon}
                color={app.color}
                onClick={() => console.log(`打开 ${app.name}`)}
              />
            ))}
          </div>
        </div>

        {/* 页面指示器 */}
        <div className="flex justify-center items-center gap-2 py-4">
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

        {/* Dock栏 */}
        <div className="glass rounded-3xl px-4 py-3 shadow-lg">
          <div className="grid grid-cols-4 gap-4">
            {dockApps.map((app, index) => (
              <AppIcon
                key={index}
                name={app.name}
                icon={app.icon}
                color={app.color}
                onClick={() => console.log(`打开 ${app.name}`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 底部横条指示器 */}
      <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full opacity-60"></div>
    </div>
  );
}
