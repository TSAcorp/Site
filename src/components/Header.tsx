import React, { useState } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <header className="sticky top-0 before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 max-lg:shadow-xs lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:border-b border-gray-200 dark:border-gray-700/60">
          {/* Header: Left side */}
          <div className="flex">
            <button
              className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div>
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3">
                <span className="sr-only">Search</span>
                <svg className="fill-current text-gray-500/80 dark:text-gray-400/80" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Z" />
                  <path d="m13.314 11.9 2.393 2.393a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414Z" />
                </svg>
              </button>
            </div>

            {/* Notifications */}
            <div className="relative">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3">
                <span className="sr-only">Notifications</span>
                <svg className="fill-current text-gray-500/80 dark:text-gray-400/80" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M7.001 1.529c-3.405.35-6.129 3.2-6.129 6.696 0 .764.125 1.502.355 2.199a1 1 0 0 1-.632 1.267C.19 11.825 0 12.396 0 13a1 1 0 0 0 1 1h4.001a1 1 0 0 0 1-1c0-.604-.19-1.175-.595-1.305a1 1 0 0 1-.632-1.267c.23-.697.355-1.435.355-2.199 0-1.578.672-3.001 1.744-4.001a1 1 0 0 0-.872-1.699Z" />
                  <path d="M10.999 1.529c3.405.35 6.129 3.2 6.129 6.696 0 .764-.125 1.502-.355 2.199a1 1 0 0 0 .632 1.267c.405.13.605.701.605 1.309a1 1 0 0 1-1 1h-4.001a1 1 0 0 1-1-1c0-.604.19-1.175.595-1.305a1 1 0 0 0 .632-1.267 6.728 6.728 0 0 1-.355-2.199c0-1.578-.672-3.001-1.744-4.001a1 1 0 0 1 .872-1.699Z" />
                </svg>
              </button>
            </div>

            {/* Help */}
            <div className="relative">
              <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3">
                <svg className="fill-current text-gray-500/80 dark:text-gray-400/80" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M0 0h16v16H0z" fill="none" />
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1-3.9V9H7V7h2v-.1c0-1.5-1.2-2.8-2.8-2.8-.8 0-1.5.3-2 .9l-1.4-1.4C3.6 2.7 4.7 2.2 6 2.2c2.6 0 4.7 1.9 5 4.4v1.5Z" />
                </svg>
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full ml-3"
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <svg className="fill-current text-gray-500/80 dark:text-gray-400/80" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.414-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                  <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                </svg>
              ) : (
                <svg className="fill-current text-gray-500/80 dark:text-gray-400/80" width={16} height={16} viewBox="0 0 16 16">
                  <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                  <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0 1.252 1.252 0 0 0 1.25 1.25.625.625 0 1 1 0 1.25 1.252 1.252 0 0 0-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                </svg>
              )}
            </button>

            {/* Divider */}
            <hr className="w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" />

            {/* User menu */}
            <div className="relative">
              <button className="inline-flex justify-center items-center group">
                <div className="flex items-center truncate">
                  <img className="rounded-full mr-2" src="https://ui-avatars.com/api/?name=J+D&background=8470ff&color=fff" width="32" height="32" alt="User" />
                  <div className="truncate">
                    <span className="text-sm font-medium dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-gray-100">John Doe</span>
                  </div>
                  <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
