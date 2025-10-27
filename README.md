# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



o Descrição do projeto 
Jogo da velha ou tambem conhecido o tic-tac-toe
o Tecnologias utilizadas 
Utilizei HTML, CSS, React, Vite e JavaScript/JSX	
o Instruções de instalação e execução 
Primeiramente veja se tem o Node.js e o npm (ou Yarn/pnpm) instalados em seu computador.
Passo 1: Instale as Dependências Instale todas as bibliotecas e pacotes necessários, incluindo o React e o Vite:Bashnpm install
Passo 2: Execute o Projeto e Inicie o servidor de desenvolvimento do Vite:Bashnpm run dev
O terminal exibirá um endereço (geralmente http://localhost:5173). Abra este endereço em seu navegador para ver o Jogo da Velha em funcionamento.
o Principais aprendizados 
Me fez aprender mais o React e o Vitte fazendo ter uma compreensão prática dos fundamentos da biblioteca: Aprender a dividir a interface em blocos reutilizáveis, criando os componentes Square (quadrado) e Board (tabuleiro).Estado (useState Hook): Gerenciamento da memória da aplicação, controlando:O conteúdo de cada quadrado (squares).De quem é a vez de jogar (xIsNext).Props (Propriedades): Comunicação de dados do componente pai (Board) para o componente filho (Square), passando tanto o valor a ser exibido quanto a função de manipulação de evento (onSquareClick).Manipulação de Eventos: Captura do evento onClick em botões para executar a lógica do jogo.Imutabilidade: A importância de copiar o estado (squares.slice()) antes de modificá-lo para garantir que o React detecte a mudança e saiba quando renderizar novamente.Renderização Condicional e Lógica: Implementação da lógica para detectar o vencedor, tratar empates e exibir o status do jogo.Refatoração: Melhoria da legibilidade do código ao renderizar o tabuleiro usando loops em vez de escrever a mesma estrutura nove vezes.Melhoria de UX: Implementação de lógica para destacar visualmente a linha vencedora
o Créditos e autoria
 Principal:Fernanda Antonini Cmpos Cordeiro Gomes Data de Conclusão: 27/10/2025 Base Teórica:Este projeto foi desenvolvido seguindo os princípios do Tutorial Oficial do React.Ferramenta de Desenvolvimento:Vite
