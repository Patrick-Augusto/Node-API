# Node API

Esta é uma API RESTful construída com Node.js e Express, utilizando MongoDB Atlas como banco de dados. Esta API fornece endpoints para autenticação, gerenciamento de usuários e tarefas.

## Funcionalidades

- **Autenticação de Usuários**
  - Registro de novos usuários
  - Login de usuários

- **Gerenciamento de Usuários**
  - Listar todos os usuários
  - Criar um novo usuário
  - Editar um usuário específico
  - Excluir um usuário específico
  - Obter a quantidade de usuários separados por função (Engenheiro de FE, Engenheiro de BE, Analista de dados, Líder Técnico)

- **Gerenciamento de Tarefas**
  - Listar tarefas do usuário logado
  - Criar uma nova tarefa
  - Editar uma tarefa específica do usuário logado
  - Excluir uma tarefa específica do usuário logado
  - Listar tarefas que não possuem um dono
  - Atribuir um dono a uma tarefa específica

## Pré-requisitos

- Node.js
- MongoDB Atlas (ou um servidor MongoDB local)
- NPM (Node Package Manager)

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd crud-app-v2
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

   ```plaintext
   PORT=3000
   MONGO_URI=<sua string de conexão do MongoDB Atlas>
   JWT_SECRET=<seu segredo JWT gerado>
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

## Endpoints

### Rotas Não Autenticadas

- **Registro de Usuário**

  ```http
  POST /api/auth/register
  ```

  Body:
  ```json
  {
    "name": "Nome do Usuário",
    "email": "email@example.com",
    "password": "senha123",
    "role": "Engenheiro de FE"
  }
  ```

- **Login de Usuário**

  ```http
  POST /api/auth/login
  ```

  Body:
  ```json
  {
    "email": "email@example.com",
    "password": "senha123"
  }
  ```

### Rotas Autenticadas

#### Usuários

- **Listar todos os usuários**

  ```http
  GET /api/users
  ```

- **Criar um novo usuário**

  ```http
  POST /api/users
  ```

  Body:
  ```json
  {
    "name": "Novo Usuário",
    "email": "novoemail@example.com",
    "password": "novaSenha123",
    "role": "Analista de dados"
  }
  ```

- **Editar um usuário específico**

  ```http
  PUT /api/users/:userId
  ```

  Body (campos opcionais):
  ```json
  {
    "name": "Nome Atualizado",
    "email": "atualizado@example.com",
    "password": "novaSenha123",
    "role": "Líder Técnico"
  }
  ```

- **Excluir um usuário específico**

  ```http
  DELETE /api/users/:userId
  ```

- **Obter a quantidade de usuários por função**

  ```http
  GET /api/users/countByRole
  ```

#### Tarefas

- **Listar as tarefas do usuário logado**

  ```http
  GET /api/tasks
  ```

- **Criar uma nova tarefa**

  ```http
  POST /api/tasks
  ```

  Body:
  ```json
  {
    "title": "Nova Tarefa",
    "description": "Descrição da tarefa"
  }
  ```

- **Editar uma tarefa específica**

  ```http
  PUT /api/tasks/:taskId
  ```

  Body (campos opcionais):
  ```json
  {
    "title": "Título Atualizado",
    "description": "Descrição Atualizada",
    "status": "In Progress"
  }
  ```

- **Excluir uma tarefa específica**

  ```http
  DELETE /api/tasks/:taskId
  ```

- **Listar tarefas sem dono**

  ```http
  GET /api/tasks/unassigned
  ```

- **Atribuir um dono a uma tarefa específica**

  ```http
  PUT /api/tasks/:taskId/assign
  ```

  Body:
  ```json
  {
    "userId": "ID do Usuário"
  }
  ```

## Segurança

- Certifique-se de usar uma string segura e aleatória para `JWT_SECRET`.
- As senhas dos usuários são criptografadas usando `bcryptjs` antes de serem armazenadas no banco de dados.

## Autor

[Seu Nome]

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
