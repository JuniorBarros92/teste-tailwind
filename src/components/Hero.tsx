import { HiArrowDown } from "react-icons/hi";


export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute top-0  bottom-0 z-0 right-0 left-0">
        <img src="../../public/img/Offerte Telefonia Mobile, Fibra e ADSL, Smartphone _ Vodafone.jpg" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-black/80"></div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 animate-bounce cursor-pointer">
        <HiArrowDown size={36} />
      </div>
    </section>
  )
}