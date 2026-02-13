# Dev Burger App 🍔

Aplicação React para gerenciamento de pedidos de hamburguer.  
Permite adicionar pedidos, visualizar todos os pedidos e deletar pedidos já feitos.

---

## 🚀 Tecnologias

- React 18
- React Router DOM v6
- Axios
- Styled Components
- JSON Server (ou backend próprio em Node.js/Express)
- Git

---

## 💻 Funcionalidades

- Adicionar novos pedidos com nome do cliente e itens do pedido
- Listar todos os pedidos cadastrados
- Deletar pedidos individualmente
- Navegar entre as telas Home e Orders

---

## 🏗 Estrutura do Projeto

src/
├─ assets/ # Imagens usadas na aplicação
├─ containers/
│ ├─ Home/ # Tela de adicionar pedido
│ └─ Orders/ # Tela de listar pedidos
├─ styles/ # Styled Components
└─ routes.js # Configuração do React Router v6


---

## ⚡ Instalação

1. Clone o repositório:

```bash
git clone <URL_DO_SEU_REPOSITORIO>
Acesse a pasta do projeto:

cd burger-orders-app
Instale as dependências:

npm install
Se estiver usando JSON Server para simular o backend, inicialize:

npx json-server --watch db.json --port 3001
Inicie a aplicação React:

npm start
ou, se usar Vite:

npm run dev
🧭 Uso
Na tela Home, insira o pedido e o nome do cliente.

Clique em Novo Pedido.
O pedido será salvo e você será redirecionado para a tela Orders.

Na tela Orders, você pode:

Visualizar todos os pedidos

Excluir pedidos clicando no ícone de lixo

Voltar para a tela Home clicando no botão Voltar

🔧 Dependências principais
"dependencies": {
  "axios": "^1.5.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",

  
  "react-router-dom": "^6.14.1",
  "styled-components": "^6.0.6"
}
