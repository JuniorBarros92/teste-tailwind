import {useState} from "react";

interface ColorType {
    id: string;
    name: string;
    image: string;
    colorClass: string;
}

interface ModelType {
    name: string;
    screen: string;
    storage: string;
    battery: string;
    weight: string;
}

export function Colors() {
    const colors: ColorType[] = [
        { id: 'blue', name: 'Titânio Azul', image: '/img/azul-removebg-preview.png', colorClass: 'bg-[#2B3544]' },
        { id: 'silver', name: 'Titânio Natural', image: '/img/branco-removebg-preview.png', colorClass: 'bg-[#E3E2DF]' },
        { id: 'orange', name: 'Titânio Laranja', image: '/img/laranja-removebg-preview.png', colorClass: 'bg-[#C17C5B]' }
    ];

    const models: ModelType[] = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB ou 1TB', battery: '33h de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB ou 512GB', battery: '29h de vídeo', weight: '199g' }
    ];

    const [selectedColorId, setSelectedColorId] = useState<string>('blue');

    const activeColor = colors.find((color) => color.id === selectedColorId) || colors[0];

    return (
        <section className="py-24 px-6 transition-colors duration-500 overflow-hidden" id="colors">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">Escolha sua Cor</h2>
                    <p className="text-xl text-zinc-500 dark:text-zinc-400 font-medium">Acabamento impecável em titânio</p>
                </div>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-12">
                <div className="w-full relative max-w-3xl">
                    <div className="relative flex justify-center items-center h-[550px] md:h-[650px]">
                        {colors.map((color) => (
                            <img 
                                key={color.id}
                                src={color.image} 
                                alt={color.name} 
                                style={{
                                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)',
                                    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%)'
                                }}
                                className={`absolute max-w-full max-h-[550px] md:max-h-[650px] object-contain dark:mix-blend-lighten mix-blend-darken transition-all duration-700 ease-in-out ${
                                    selectedColorId === color.id 
                                        ? 'opacity-100 scale-100 translate-y-0' 
                                        : 'opacity-0 scale-95 translate-y-8 pointer-events-none'
                                }`} 
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12 mb-8 z-10 relative">
                    <div className="px-6 py-2.5 bg-white/60 dark:bg-zinc-800/60 rounded-full backdrop-blur-xl border border-zinc-200 dark:border-white/10 transition-all duration-300 shadow-sm">
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
                            {activeColor.name}
                        </h3>
                    </div>
                </div>

                <div className="flex justify-center gap-6 mt-2 z-10 relative">
                    {colors.map((color) => (
                        <button 
                            key={color.id} 
                            onClick={() => setSelectedColorId(color.id)} 
                            className={`rounded-full transition-all outline-none p-1 ${
                                selectedColorId === color.id 
                                ? 'scale-110 ring-1 ring-blue-500 ring-offset-2 dark:ring-white dark:ring-offset-zinc-950 ring-offset-zinc-50' 
                                : 'hover:scale-105 opacity-80 hover:opacity-100'
                            }`}
                        >
                            <div className={`w-10 h-10 rounded-full cursor-pointer shadow-inner border border-black/10 dark:border-white/10 ${color.colorClass}`}></div>
                        </button>
                    ))} 
                </div>
            </div>
        </section>
    );
}