# 💼 Investment & Portfolio Management Platform

A modern web application for managing investors, companies, funds, and related news. Built using **Next.js App Router**, **Supabase**, and **RTK Query**.

---

## 🚀 Tech Stack

| Layer            | Technology                                 |
|------------------|---------------------------------------------|
| Frontend         | Next.js (App Router), Tailwind CSS          |
| State Management | Redux Toolkit & RTK Query                   |
| Backend          | Next.js API Routes                          |
| Database         | Supabase (PostgreSQL)                       |
| ORM / Types      | Supabase Type Generator (TypeScript types)  |
| Migrations       | Supabase CLI with SQL files                 |

---

## 📦 Features

- ✅ Manage Investors, Companies, Contacts, Funds, and News
- ✅ SQL-based schema with full migration control
- ✅ Relational data with foreign key expansion
- ✅ Centralized query filtering utility
- ✅ Full TypeScript support
- ✅ Modular API structure with reusable logic
- ✅ RTK Query-based frontend data fetching

---

## 🏗️ Project Structure

├── app/
│ └── api/ # Backend API routes
├── lib/
│ └── database.types.ts # Supabase generated types
│ └── filters.ts # Query filtering utility
├── store/
│ └── api.ts # RTK Query base API setup
├── supabase/
│ └── migrations/ # SQL migration files
│ └── schema.sql # Full schema definition

yaml
Copy
Edit

---

## 🧪 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/investment-platform.git
cd investment-platform
npm install
2. Setup Supabase
Ensure you have the Supabase CLI installed.

bash
Copy
Edit
npx supabase init
Link your project:

bash
Copy
Edit
supabase link --project-ref your-project-id
Push schema to Supabase:

bash
Copy
Edit
supabase db push
3. Generate Types
bash
Copy
Edit
npx supabase gen types typescript --local > lib/database.types.ts
4. Run Dev Server
bash
Copy
Edit
npm run dev
🔄 Example API Query
Get companies with nested relations (e.g., primary investor and CEO contact):

ts
Copy
Edit
const { data } = await supabase
  .from('companies')
  .select(`
    *,
    primary_investor:primary_investor_id (
      id, name
    ),
    ceo_contact:ceo_contact_id (
      id, name, email
    )
  `)
