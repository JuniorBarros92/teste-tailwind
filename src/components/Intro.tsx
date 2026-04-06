const Intro = () => {
  const specs = [
    {
      value: "6.3\"",
      label: "Super Retina XDR",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      value: "A18 Pro",
      label: "O chip mais rápido já criado",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      value: "48 MP",
      label: "Câmera mais avançada",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      value: "29h",
      label: "Duração de bateria",
      color: "text-orange-500 dark:text-orange-400"
    }
  ];

  return (
    <section className="py-24 px-6 transition-colors duration-500" id="intro">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">
          iPhone 17 Pro
        </h2>
        <p className="text-3xl md:text-5xl mb-6 text-gradient font-semibold tracking-tight leading-tight">
          Titânio. Tão forte. Tão leve. Tão Pro.
        </p>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">
          O design mais refinado que já criamos. Titânio de grau aeroespacial. Novo chip A18 Pro com desempenho inigualável.
        </p>
      </div>
    
      <div className="flex flex-col sm:flex-row justify-center items-center mb-20 gap-4">
        <button type="button" className="bg-blue-600 hover:bg-blue-700 px-8 py-3.5 rounded-full text-white text-[15px] font-medium transition-all duration-300 hover:scale-105 shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] cursor-pointer">
          Compre Agora
        </button>
        <button type="button" className="hover:bg-zinc-200 dark:hover:bg-white/10 text-blue-600 dark:text-blue-400 px-8 py-3.5 text-[15px] font-medium transition-all duration-300 rounded-full cursor-pointer flex items-center gap-2">
          Saiba Mais <span>&rsaquo;</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specs.map((item, index) => (
            <div key={index} className="text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg border border-zinc-200 dark:border-white/10 rounded-3xl hover:bg-white dark:hover:bg-zinc-800 transition-all hover:scale-[1.02] cursor-pointer duration-300 shadow-sm p-8">
              <p className={`text-4xl font-bold mb-3 ${item.color}`}>{item.value}</p>
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Intro };