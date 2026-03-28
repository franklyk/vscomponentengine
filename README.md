# engine
Criação de mini-framework com JS(modularização), HTML, SCSS. 

# 🚀 Engine + E-commerce (Fullstack Architecture)

## 🧠 VISÃO GERAL DO PROJETO

Este projeto consiste na construção de uma aplicação fullstack de e-commerce com foco em:

* Arquitetura limpa
* Separação de responsabilidades
* Escalabilidade
* Aprendizado profundo (sem frameworks pesados)

A aplicação é dividida em:

```plaintext
Frontend (JS puro + Vite)
↓
API Backend (PHP puro)
↓
Persistência (arquivo → banco futuramente)
```

---

# 🎯 OBJETIVOS

* Construir uma engine de componentes em JavaScript
* Implementar arquitetura baseada em eventos (event-driven)
* Criar uma API backend em PHP desacoplada
* Evoluir gradualmente para um sistema escalável
* Evitar dependência de frameworks (compreensão profunda)

---

# 🏗️ ARQUITETURA GERAL

## 🔹 Frontend

* JavaScript puro (sem frameworks)
* Engine própria de componentes
* Comunicação via eventos (Event Bus)
* Estado centralizado (services)
* Build com Vite

## 🔹 Backend

* PHP puro
* Estrutura inspirada em MVC (sem framework)
* Router próprio
* Controllers e Services
* API REST (JSON)

## 🔹 Comunicação

```plaintext
Frontend → HTTP (fetch) → Backend API
Backend → JSON → Frontend
```

---

# 📁 ESTRUTURA DO PROJETO

```plaintext
/project-root

├── /app
│   ├── /Controllers
│   ├── /Services
│   ├── /Core
│   ├── /Models (futuro)
│   └── /Database (futuro)
│
├── /routes
│   api.php
│
├── /public
│   index.php
│   /assets (build do Vite)
│   .htaccess
│
├── /src
│   (frontend: JS, SCSS, CSS)
│
├── /storage
│   /data
│   /logs
│
├── .env
├── composer.json
├── vite.config.js
```

---

# ⚙️ BACKEND (PHP)

## 🧠 PRINCÍPIOS

* Entry point único (`public/index.php`)
* Todas as requisições passam pelo Router
* Controllers lidam com HTTP
* Services lidam com regras de negócio

---

## 🔥 FLUXO DE REQUISIÇÃO

```plaintext
Request HTTP
↓
Apache (.htaccess)
↓
public/index.php
↓
Router
↓
Controller
↓
Service
↓
Response JSON
```

---

## 📡 ENDPOINTS INICIAIS

```http
GET  /api/products
POST /api/orders
```

---

## 🧱 CAMADAS

### Controllers

Responsáveis por:

* receber request
* validar entrada
* chamar services
* retornar resposta

---

### Services

Responsáveis por:

* lógica de negócio
* manipulação de dados
* persistência

---

### Core

Responsável por:

* Router
* Request/Response (futuro)

---

# ⚡ FRONTEND

## 🧠 ARQUITETURA

* Componentes reutilizáveis
* Event Bus (pub/sub)
* Services para estado
* DOM controlado via data attributes

---

## 🔄 FLUXO

```plaintext
User Action
↓
Component
↓
Event Bus
↓
Service (estado)
↓
Atualização UI
↓
(API quando necessário)
```

---

# 🌐 INTEGRAÇÃO FRONT ↔ BACK

## Exemplo de requisição:

```js
await fetch('/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(order)
});
```

---

# ⚠️ RESILIÊNCIA E CONSISTÊNCIA

## Problemas possíveis:

* falha de rede
* duplicação de requisição
* inconsistência de dados

---

## Estratégias (futuro próximo):

* Idempotência (requestId)
* Tratamento de erro (try/catch)
* Retry controlado
* Transações no banco (quando implementado)

---

# 🧠 FILAS (FUTURO)

## Quando usar:

* tarefas pesadas
* processamento assíncrono
* envio de email
* integrações externas

## Componentes:

* Queue (Redis ou DB)
* Job
* Worker

---

# ⚙️ VITE (FRONTEND BUILD)

## Função:

* build de assets
* dev server
* hot reload

## Output:

```plaintext
/public/assets
```

## Node.js é necessário apenas para build

---

# 🌍 AMBIENTE DE DESENVOLVIMENTO

## Recomendado:

* Linux (Ubuntu)
* Apache
* PHP
* MySQL (futuro)
* Node.js

---

## IMPORTANTE

Em produção:

❌ NÃO usar `php -S`
❌ NÃO usar servidor embutido

✔ Apache/Nginx já serve a aplicação
✔ Entrada via `/public/index.php`

---

# 🔐 .HTACCESS (OBRIGATÓRIO)

```apache
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule ^ index.php [QSA,L]
```

---

# 🧠 DECISÕES DE ARQUITETURA

✔ API desacoplada
✔ Frontend independente
✔ Sem framework backend
✔ Estrutura escalável
✔ Simplicidade primeiro, complexidade depois

---

# 🚀 ROADMAP

## 🔹 Fase atual

* Setup backend
* Router
* Integração básica

## 🔹 Próxima fase

* Request/Response abstraction
* Validação
* Persistência estruturada

## 🔹 Fase intermediária

* Banco de dados (PDO)
* Models
* Transações

## 🔹 Fase avançada

* Autenticação
* Filas
* Workers
* Cache

---

# 🎯 FILOSOFIA DO PROJETO

> "Entender antes de abstrair"

* Evitar overengineering
* Construir base sólida
* Evoluir com consciência

---

# 🔥 STATUS

```plaintext
Frontend: MVP completo
Backend: iniciando estrutura
Arquitetura: definida
Pronto para evolução fullstack
```

---

# 🚀 PRÓXIMO PASSO AO RETORNAR

1. Configurar ambiente no Linux
2. Subir Apache apontando para `/public`
3. Validar `.htaccess`
4. Criar Router funcional
5. Testar `/api/products`
6. Integrar frontend

---

# 💡 OBSERVAÇÃO FINAL

Este projeto não é apenas um e-commerce.

É a construção de:

👉 uma base arquitetural
👉 um entendimento profundo
👉 um possível framework próprio no futuro

---

