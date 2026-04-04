import { HiArrowDown } from "react-icons/hi";


export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img
          src="/img/Iphone 17 Pro _ Social Media Post.jpg"
          className="w-full max-w-4xl max-h-[90vh] object-contain opacity-90"
          alt="iPhone 17 Pro"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer text-white">
        <HiArrowDown size={36} />
      </div>
    </section>
  )
}