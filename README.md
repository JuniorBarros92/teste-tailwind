# Apple Clone - iPhone 17 Pro Landing Page

Uma landing page moderna, responsiva e de alta performance inspirada no design premium da Apple, focada especificamente em um conceito do **iPhone 17 Pro**. Desenvolvida com as ferramentas mais modernas do ecossistema front-end.

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca principal para a construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e escalabilidade.
- **[Vite 8](https://vitejs.dev/)**: Bundler ultrarrápido utilizado para desenvolvimento local e otimização do build.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utility-first para estilização rápida, responsiva e suporte a Dark Mode integrado.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Para ícones otimizados e customizáveis.

## ✨ Principais Funcionalidades

- 🌓 **Dark Mode / Light Mode**: Total integração de temas na aplicação, manipulado via variáveis do Tailwind, alternando as cores de fundo, contrastes e brilho das imagens (mix-blend-mode).
- 📱 **100% Responsivo**: Layout construído em um formato "mobile-first", com suporte fluido para Desktop, Tablet e SmartPhones.
- 🎨 **Design Apple-Like**: Componentes utilizando `glassmorphism` (backdrop-blur), sombras sutis (drop-shadow), fontes elegantes (Inter) e gradientes refinados.
- ⚡ **Alta Performance**: Estrutura otimizada gerando um build super pequeno, pronto para entrega via CDN.

## 📂 Visão Geral da Estrutura

- `src/App.tsx`: Ponto de junção e gerenciamento do estado global de Tema (Dark/Light).
- `src/components/Hero.tsx`: Chamada principal da aplicação com as imagens de alta definição.
- `src/components/Highlight.tsx`: Especificações e detalhes do aparelho.
- `src/components/Colors.tsx`: Demonstração interativa de variação de cores (seções sobre as opções do produto).
- `src/components/NavBar.tsx` & `Footer.tsx`: Navegação estática e links utilitários da página.

## 🏃 Como rodar localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# Clone ou baixe este repositório
git clone https://seu-repositorio-aqui.git

# Acesse a pasta do projeto
cd teste-tailwind

# Instale as dependências usando NPM
npm install

# Rode a aplicação em modo de desenvolvimento
npm run dev
```

A aplicação abrirá no seu navegador, normalmente em `http://localhost:5173/`.

## 📦 Deploy

Este projeto está pronto para ser hospedado diretamente em plataformas modernas voltadas para Jamstack:
- **Vercel**, **Netlify**, **Cloudflare Pages** ou **GitHub Pages**.

**Comando de build (Gera a pasta `/dist` otimizada):**
```bash
npm run build
```

---
*Feito para estudos e prática avançada de UI/UX utilizando TailwindCSS e React.*
