import { HiArrowDown } from "react-icons/hi";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 overflow-hidden flex flex-col items-center justify-start transition-colors duration-500">
      <div className="z-20 text-center space-y-4 px-4 relative">
        
        
      </div>

      <div className="absolute inset-0 z-0 flex items-end justify-center">
        {/* Gradient overlays to smoothly fade the image into the background for both themes */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 via-transparent to-zinc-50 dark:from-[#09090b]/50 dark:to-[#09090b] z-10 pointer-events-none transition-colors duration-500"></div>
        
        <img
          src="/img/Iphone_17_Pro___Social_Media_Post-removebg-preview.png"
          className="w-full max-w-5xl h-[85vh] object-contain object-bottom dark:mix-blend-screen scale-105"
          alt="iPhone 17 Pro"
        />
      </div>
      
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce cursor-pointer text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
        <a href="#intro" aria-label="Scroll Down">
          <HiArrowDown size={32} />
        </a>
      </div>
    </section>
  )
}