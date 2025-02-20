# Draggable Menu

Este é um projeto de menu arrastável desenvolvido com React e Next.js. O objetivo do projeto é permitir que os usuários arrastem e soltem categorias e itens dentro de um menu.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) (biblioteca de arrastar e soltar)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Estrutura do Projeto

- `src/app/layout.tsx`: Layout principal do aplicativo.
- `src/app/page.tsx`: Página principal do aplicativo.
- `src/components/product-menu-category.tsx`: Componente de categoria do menu.
- `src/components/product-menu-item.tsx`: Componente de item do menu.
- `src/components/modal/modal.component.tsx`: Componente de modal.
- `src/seeds/menu.seed.ts`: Dados de exemplo para o menu.

## Como Rodar o Projeto Localmente

1. **Clone o repositório:**

   ````bash
   git clone https://github.com/seu-usuario/draggable-menu.git
   cd draggable-menu```

   ````

2. **Instale as dependências:**

   ```
      npm install
      yarn i
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```
      npm run dev
      yarn dev
   ```

4. **Abra o navegador e acesse:**
   http://localhost:3000

## Como Executar o deploy

1. **Build do projeto:**

   ```
      npm run build
      yarn build
   ```

2. **Inicie o servidor de produção:**

   ```
      npm start
      yarn start
   ```

3. **Deploy em um serviço e hopedagem:**

- Você pode usar serviços como Vercel, Netlify, ou qualquer outro serviço de hospedagem de sua escolha.
- Siga as instruções específicas do serviço de hospedagem para fazer o deploy do seu projeto.
