const specs = [
  {
    value: "120Hz",
    label: "ProMotion",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    value: "12 MP",
    label: "Ultra wide",
    color: "text-orange-500 dark:text-orange-400"
  },
  {
    value: "12 MP",
    label: "Tele Foto",
    color: "text-blue-600 dark:text-blue-400"
  },
];

export function Highlight() {
  return (
    <section className="py-24 px-6 transition-colors duration-500" id="design">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">Design Revolucionário</h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium">Cada detalhe do iPhone 17 Pro foi cuidadosamente projetado para oferecer a melhor experiência possível.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 1 - Standard Image Top, Text Bottom layout */}
          <div className="bg-zinc-100 dark:bg-zinc-900/60 rounded-[40px] p-10 flex flex-col justify-between overflow-hidden relative group border border-zinc-200 dark:border-white/10">
            <div className="w-full flex justify-center mb-8 relative z-10 transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/img/download (1).jpg" 
                alt="IOS 19" 
                className="w-full h-[350px] sm:h-[450px] object-contain dark:mix-blend-lighten drop-shadow-2xl" 
              />
            </div>
            <div className="relative z-10">
              <h3 className="font-bold mb-3 text-3xl text-zinc-900 dark:text-white">iOS 19</h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed font-medium">Desempenho avançado, design refinado e uma experiência inteligente e fluida como nunca antes.</p>
            </div>
          </div>
          
          {/* Card 2 - Immersive Image background approach for visual variety */}
          <div className="bg-zinc-900 rounded-[40px] p-10 flex flex-col justify-start relative overflow-hidden group border border-zinc-200 dark:border-white/10">
            <div className="relative z-10 text-center">
              <h3 className="font-bold mb-3 text-3xl text-white">Design em Titânio</h3>
              <p className="text-zinc-300 text-lg leading-relaxed font-medium max-w-sm mx-auto">Leve, resistente, elegante. O grau aeroespacial redefine o impossível.</p>
            </div>
            <div className="w-full flex justify-center mt-12 absolute bottom-0 left-0 right-0 transition-transform duration-500 group-hover:translate-y-[-10px]">
              <img 
                src="/img/iPhone 17 Pro Max Concept – A Bold New Era of Apple Design.jpg" 
                alt="Design em Titânio" 
                className="w-full h-[400px] object-cover mix-blend-lighten opacity-80" 
              />
            </div>
          </div>
        </div>

        <div className="bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md rounded-[40px] p-10 md:p-16 border border-zinc-200 dark:border-white/10" id="performance">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h3 className="font-bold mb-6 text-4xl md:text-5xl text-gradient tracking-tight">Inovação em Cada Detalhe</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-10 text-xl font-medium">O iPhone 17 Pro redefine o que é possível com tecnologia e design, construído para durar e encantar.</p>
              <ul className="space-y-5">
                {[
                  "Design inovador com titânio de grau aeroespacial",
                  "Sistema operacional iOS 19 super otimizado",
                  "Câmera melhorada com controle de profundidade",
                  "Bateria ultra durável com carregamento MagSafe"
                ].map((item, idx) => (
                  <li key={idx} className="text-zinc-700 dark:text-zinc-200 flex items-start text-lg font-medium">
                    <span className="mr-4 mt-1 text-blue-600 dark:text-blue-400 text-xl">✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <img src="/img/iPhone 17 Pro Max.jpg" alt="iPhone 17" className="w-full max-w-[320px] rounded-[32px] object-contain shadow-2xl transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-32" id="camera">
        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900 dark:text-white tracking-tight">Sistema avançado</h3>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specs.map((item, index) => (
              <div key={index} className="flex flex-col justify-center py-10 px-6 border-t border-zinc-300 dark:border-zinc-800 hover:-translate-y-2 transition-transform duration-300">
                <p className={`text-5xl font-bold mb-2 tracking-tight ${item.color}`}>{item.value}</p>
                <p className="text-lg font-medium text-zinc-600 dark:text-zinc-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}