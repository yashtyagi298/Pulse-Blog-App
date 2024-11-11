# Pulse Blog 

**Pulse** is a modern blogging application inspired by platforms like Medium, designed to empower users to share their ideas and stories with the world.

## Tech Stack

### Frontend
- **React**: A JavaScript library for building user interfaces, providing a flexible and efficient way to create dynamic web applications.
- **Zod**: A TypeScript-first schema declaration and validation library, enabling robust type checking and validation of frontend data.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality, maintainability, and developer productivity.
- **JWT (JSON Web Tokens)**: A standard for securely transmitting information between parties as a JSON object, commonly used for authentication in web applications.

### Backend
- **Cloudflare Workers**: A serverless execution environment that allows you to run JavaScript code at the edge of the Cloudflare network, providing scalable and efficient backend logic.
- **Hono**: A minimal, fast, and secure framework for building Cloudflare Workers.
- **TypeScript**: Leveraged for backend development, ensuring consistent type safety and code integrity across the entire application.
- **Prisma**: A modern ORM (Object-Relational Mapping) tool that simplifies database access and manipulation, offering type-safe database queries and schema migrations.
- **PostgreSQL**: A powerful open-source relational database management system, chosen for its reliability, scalability, and extensive feature set.
- **Aiven**: A managed service provider for PostgreSQL, used for setting up and managing the database.

## Getting Started

### Clone the Repository
To get started, clone the repository using the following command:

```bash
git clone https://github.com/yashtyagi298/Pulse-Blog-App.git

2. Install Dependencies
Navigate to the project directory and install the necessary dependencies for both the frontend and backend:

bash
Copy code
cd Pulse-Blog-App
Frontend
bash
Copy code
cd frontend
npm install
Backend
bash
Copy code
cd ../backend
npm install
3. Create Environment Files
Create .env and wrangler.toml files inside the backend directory.

Inside .env:
Add your Aiven PostgreSQL database URL:

env
Copy code
DATABASE_URL="PASTE DATABASE URL"
Inside wrangler.toml:
Add the following content:

toml
Copy code
name = "backend"
compatibility_date = "2023-12-01"

[vars]
DATABASE_URL="PASTE the PRISMA URL (Connection Pool)"
JWT_SECRET="mytoken"
4. Set Up Connection Pool
Visit the Prisma website to create a new project.
Enable "Accelerate" under the Database Connection String and paste the Aiven DB URL you created earlier.
Click Enable Accelerate and then click Generate API Key to get the connection pool URL.
Paste the generated URL inside the wrangler.toml file as shown above.
5. Running the Development Servers
Backend Server
Start the backend server using Cloudflare Workers:

bash
Copy code
npm run dev
Frontend Development Server
Start the frontend development server:

bash
Copy code
npm run dev
You can access the application in your browser at http://localhost:3000.

6. Database Migrations
If you make changes to the database schema (e.g., modify schema.prisma), run the following commands:

To migrate the database:
bash
Copy code
npx prisma migrate dev --name init_schema
This will generate a migration folder inside Prisma.

To generate the Prisma client:
bash
Copy code
npx prisma generate --no-engine
7. Deployment
To deploy your application to Cloudflare Workers, follow these steps:

Log in to Wrangler:
bash
Copy code
npx wrangler whoami
npx wrangler login
Deploy the application to Cloudflare Workers:
bash
Copy code
npm run deploy
8. Important Notes
Cloudflare Workers do not take environment variables from .env file. Instead, they take variables from the wrangler.toml file.
Cloudflare Workers create multiple instances distributed globally, and when deploying the code, each instance connects to the database. To avoid overloading the database, it's recommended to use a connection pool.
Additional Information
This project uses Prisma for database migrations and client generation, Cloudflare Workers for serverless functions, and JWT for authentication and token management.

If you need further assistance or have any questions about setting up or using the application, feel free to reach out or refer to the official documentation for Prisma, Cloudflare Workers, and JWT.

yaml
Copy code

---

This markdown syntax can be directly used for your project’s `README.md` file. It provides a clean structure, starting with an introduction, followed by the tech stack used in the project, setup instructions, and other important notes.





