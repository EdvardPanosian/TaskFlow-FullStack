\# 🚀 TaskFlow FullStack



A modern Full Stack Task Management Application built with \*\*ASP.NET Core Web API\*\* and \*\*Angular\*\*.



This project demonstrates a clean full-stack architecture, JWT authentication, RESTful API development, Entity Framework Core, SQL Server LocalDB, and Angular frontend integration.



\---



\# ✨ Features



\* ✅ User Registration

\* ✅ User Login

\* ✅ JWT Authentication

\* ✅ Protected API Endpoints

\* ✅ Protected Angular Routes (Route Guard)

\* ✅ Create Tasks

\* ✅ View Tasks

\* ✅ Mark Tasks as Completed

\* ✅ Delete Tasks

\* ✅ Logout

\* ✅ RESTful API

\* ✅ Entity Framework Core

\* ✅ SQL Server LocalDB

\* ✅ Exception Middleware

\* ✅ DTO Pattern

\* ✅ Service Layer Architecture



\---



\# 🛠 Technologies



\## Backend



\* ASP.NET Core 8 Web API

\* C#

\* Entity Framework Core

\* SQL Server LocalDB

\* JWT Bearer Authentication

\* Swagger (OpenAPI)



\## Frontend



\* Angular

\* TypeScript

\* HTML

\* CSS



\---



\# 📂 Project Structure



```text

TaskFlow-FullStack

│

├── backend

│   ├── Controllers

│   ├── Data

│   ├── DTOs

│   ├── Interfaces

│   ├── Middlewares

│   ├── Migrations

│   ├── Models

│   ├── Services

│   ├── Program.cs

│   ├── appsettings.json

│   ├── MyApp.csproj

│   └── MyApp.sln

│

├── frontend

│   ├── src

│   ├── public

│   ├── angular.json

│   ├── package.json

│   └── ...

│

├── screenshots

│

├── README.md

└── .gitignore

```



\---



\# 🗄 Database



This project uses \*\*SQL Server LocalDB\*\*.



The database is created locally on your computer using \*\*Entity Framework Core Migrations\*\*.



\---



\# ⚙ Requirements



Install the following software before running the project:



\* .NET 8 SDK

\* SQL Server LocalDB

\* Node.js

\* Angular CLI



Install Angular CLI:



```bash

npm install -g @angular/cli

```



\---



\# ▶ Running the Backend



Go to the backend folder:



```bash

cd backend

```



Restore NuGet packages:



```bash

dotnet restore

```



Create the local database:



```bash

dotnet ef database update

```



This command automatically:



\* Creates \*\*MyAppDb\*\*

\* Applies all Entity Framework Core migrations

\* Creates the \*\*Users\*\* table

\* Creates the \*\*Tasks\*\* table



Run the API:



```bash

dotnet run

```



Swagger will be available at:



```text

https://localhost:xxxx/swagger

```



(The port depends on your launch settings.)



\---



\# ▶ Running the Frontend



Go to the frontend folder:



```bash

cd frontend

```



Install packages:



```bash

npm install

```



Run Angular:



```bash

ng serve

```



Open:



```text

http://localhost:4200

```



\---



\# 🔐 Authentication



The application uses \*\*JWT Bearer Authentication\*\*.



Workflow:



1\. Register

2\. Login

3\. Receive JWT Token

4\. Store Token

5\. Access Protected APIs

6\. Logout



\---



\# 📌 API Endpoints



\## Authentication



| Method | Endpoint           |

| ------ | ------------------ |

| POST   | /api/Auth/register |

| POST   | /api/Auth/login    |



\---



\## Tasks



| Method | Endpoint       |

| ------ | -------------- |

| GET    | /api/ToDo      |

| GET    | /api/ToDo/{id} |

| POST   | /api/ToDo      |

| PUT    | /api/ToDo/{id} |

| DELETE | /api/ToDo/{id} |



\---



\# 📸 Screenshots



\## Login



!\[Login](screenshots/login.png)



\---



\## Register



!\[Register](screenshots/register.png)



\---



\## Task Manager



!\[Task Manager](screenshots/todo.png)



\---



\# 🏗 Architecture



The project follows a layered architecture.



```

Angular UI

&#x20;     │

&#x20;     ▼

ASP.NET Core Controllers

&#x20;     │

&#x20;     ▼

Service Layer

&#x20;     │

&#x20;     ▼

Entity Framework Core

&#x20;     │

&#x20;     ▼

SQL Server LocalDB

```



\---



\# 🚀 Future Improvements



\* Edit Task

\* Search Tasks

\* Task Categories

\* Due Dates

\* User Profile

\* Responsive Design Improvements

\* Docker Support



\---







