type Section = {
  title: string;
  links: string[];
};

const sections: Section[] = [
  {
    title: "Descobrir",
    links: ["iPhone 17 Pro", "iPhone 17", "iPhone 17 Plus", "Comparar modelos"],
  },
  {
    title: "Explorar",
    links: ["Inovações em Câmera", "Apple Intelligence", "Bateria", "Tela ProMotion"],
  },
  {
    title: "Sua Conta",
    links: ["Gerenciar seu ID Apple", "Sua Conta no iCloud", "Configurações"],
  },
  {
    title: "A Apple",
    links: ["Newsroom", "Liderança", "Investidores", "Eventos", "Contato"],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-black text-zinc-500 dark:text-zinc-400 pt-16 pb-8 px-6 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-500 text-[12px] font-medium font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 pb-8 border-b border-zinc-300 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 leading-relaxed">
          <p className="mb-3">
            * O serviço de suporte pode variar de acordo com o país. Nem todos os recursos estão disponíveis em todos os países ou regiões.
          </p>
          <p>
            1. Os valores de troca variam de acordo com a condição, o ano e a configuração do seu dispositivo qualificado para troca. 
            Esta é uma página de demonstração (Apple-Like) desenvolvida para fins de estudo de CSS e React, sem afiliação direta com a Apple Inc.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold mb-3 tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-zinc-800 dark:hover:text-white hover:underline transition-colors block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-zinc-300 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="mb-2 md:mb-0">
              Copyright &copy; {new Date().getFullYear()} Apple-Like Inc. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#" className="hover:text-zinc-800 dark:hover:text-white transition-colors">Política de Privacidade</a>
            <span className="hidden md:inline w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
            
            <a href="#" className="hover:text-zinc-800 dark:hover:text-white transition-colors">Termos de Uso</a>
            <span className="hidden md:inline w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
            
            <a href="#" className="hover:text-zinc-800 dark:hover:text-white transition-colors">Vendas e Reembolsos</a>
            <span className="hidden md:inline w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
            
            <a href="#" className="hover:text-zinc-800 dark:hover:text-white transition-colors">Avisos Legais</a>
            <span className="hidden md:inline w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
            
            <a href="#" className="hover:text-zinc-800 dark:hover:text-white transition-colors">Mapa do Site</a>
          </div>

          <div className="md:ml-8 font-medium text-zinc-800 dark:text-zinc-200 hover:underline cursor-pointer">
            Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}