# [PT] Planr - Gerenciador de Tarefas

Uma aplicação de gerenciamento de tarefas construída com Next.js, utilizando Server Actions, Zod para validação e shadcn/ui para a interface.

## Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- Node.js (versão 18 ou superior)
- pnpm

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/alyssonbarrera/planr-todo.git
cd planr
```

2. Instale as dependências:

```bash
pnpm install
```

3. Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Configuração do JSON Server

1. Crie um arquivo `db.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "users": [
    {
      "id": "01JHWMZEZYDWFFKHETMVCNXVWR",
      "name": "John Doe",
      "email": "johndoe@email.com",
      "password": "123456"
    },
  ],
  "tasks": [
      {
      "id": "01JHWN3C6FDV6W8H9BBV07QQ1R",
      "title": "Task 1",
      "description": "Task Description 1",
      "completed": true,
      "userId": "01JHWMZEZYDWFFKHETMVCNXVWR",
      "createdAt": "2024-06-12T23:09:14Z"
    },
  ]
}
```

2. Em um terminal separado, inicie o JSON Server:

```bash
pnpm json-server
```

O JSON Server estará disponível em `http://localhost:3001`

## Executando a Aplicação

1. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## Uso

1. Crie uma conta na página de registro
2. Faça login com suas credenciais
3. Comece a criar e gerenciar suas tarefas!

# [EN] Planr - Task Manager

A task management application built with Next.js, using Server Actions, Zod for validation, and shadcn/ui for the interface.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 18 or higher)
- pnpm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/alyssonbarrera/planr-todo.git
cd planr
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env.local` file in the project root with the following content:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## JSON Server Setup

1. Create a `db.json` file in the project root with the following content:

```json
{
  "users": [
    {
      "id": "01JHWMZEZYDWFFKHETMVCNXVWR",
      "name": "John Doe",
      "email": "johndoe@email.com",
      "password": "123456"
    },
  ],
  "tasks": [
      {
      "id": "01JHWN3C6FDV6W8H9BBV07QQ1R",
      "title": "Task 1",
      "description": "Task Description 1",
      "completed": true,
      "userId": "01JHWMZEZYDWFFKHETMVCNXVWR",
      "createdAt": "2024-06-12T23:09:14Z"
    },
  ]
}
```

2. In a separate terminal, start JSON Server:

```bash
pnpm json-server
```

JSON Server will be available at `http://localhost:3001`

## Running the Application

1. Start the development server:

```bash
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. Create an account on the registration page
2. Log in with your credentials
3. Start creating and managing your tasks!