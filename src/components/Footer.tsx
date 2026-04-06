type Section = {
  title: string;
  links: string[];
};

const sections: Section[] = [
  {
    title: "comprar e saber mais",
    links: [
      "iphone 17 pro",
      "iphone 17",
      "iphone 17 plus",
      "iphone 17 pro max",
      
    ],
  },
  {
    title: "explorar",
    links: [
      "recursos",
      "câmera",
      "bateria",
      "tela",

    ],
  },
  {
    title: "empresa",
    links: [
      "sobre nós",
      "carreiras",
      "investidores",
      "imprensa",
     
    ],
  },
  {
    title: "legal",
    links: [
      "termos de uso",
      "política de privacidade",
      "cookies",
      "acessibilidade",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-2 capitalize">
              {section.title}
            </h3>

            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div>
        <div>
            <p>&copy; 2023 Apple Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}