const Intro = (): JSX.Element => {
  const specs = [
    {
      value: "6.3",
      label: "Display Super Retina XDR",
      color: "text-blue-600"
    }
    ,{
      value: "a18 Pro",
      label: "Chip mais rápido de todos os tempos",
      color: "text-orange-500"
    },
    {
      value: "T48MP",
      label: "Câmera mais avançada",
      color: "text-blue-600"
    },
    {
      value: "29h",
      label: "bateria com duração de até 29 horas",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Iphone 17 Pro</h1>
          <p className="text-2xl mb:text-4xl mb-4 text-gradient font-bold">Titanio. Tão Forte. Tão leve. Tão Pro</p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">O Design mais refinado que ja criamos. Titanio de grau aerospacial. Chip 18 Pro</p>
        </div>
    
      <div className="flex flex-col md:flex-row justify-center items-center mb-16 gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-with text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50 cursor-pointer">Compre Agora</button>
        <button className="border-2 border-white rounded-full hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg  cursor-pointer">Saiba Mais</button>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-6">
          {specs.map((item, index) => (
            <div key={index} className="text-center bg-gray-900 rounded-fullshadow-lg p-6">
              <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
};

export { Intro };