import { HiSun, HiMoon } from "react-icons/hi";

interface NavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function NavBar({ isDarkMode, toggleDarkMode }: NavBarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-black/70 backdrop-blur-xl border-b border-zinc-200 dark:border-white/10 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">Apple</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#design" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Design</a>
          <a href="#camera" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Câmera</a>
          <a href="#performance" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Desempenho</a>
          <a href="#cores" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Cores</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <HiSun size={20} className="text-zinc-100" /> : <HiMoon size={20} className="text-zinc-800" />}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-1.5 rounded-full cursor-pointer transition-colors">
            Comprar
          </button>
        </div>
      </div>
    </nav>
  )
}