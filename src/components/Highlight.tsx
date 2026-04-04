export function Highlight() {
    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhedo iPhone 17 Pro foi cuidadosamente projetado para oferecer a melhor experiência possível.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

                    <div className="bg-gray-900 rounded-3xl p-8 overflow-hidden">
                        <img src="../../public/img/download (1).jpg" alt="Design em Titânio" className="w-full h-80 md:h-96 object-cover rounded-2xl mb-4" />
                        <h3 className="font-bold mb-2 text-3xl">IOS 19</h3>
                        <p className="text-gray-300">O iPhone 17 com o novo iOS entrega desempenho avançado, design refinado e uma experiência inteligente e fluida.</p>
                    </div>
                    <div className="bg-gray-900 rounded-3xl p-8 overflow-hidden">
                        <img src="../../public/img/iPhone 17 Pro Max Concept – A Bold New Era of Apple Design.jpg" alt="Design em Titânio" className="w-full h-80 md:h-96 object-cover rounded-2xl mb-4" />
                        <h3 className="font-bold mb-2 text-3xl">Design em Titânio</h3>
                        <p className="text-gray-300">Leve, resistente e elegante. O titânio de grau aeroespacial redefine o design do iPhone.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}