# 💼 Akinia Test Assesements

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

```bash
📁 Akinia Test Assesment/
├── app/
│   ├── api/
│   │   ├── companies/
│   │   ├── investors/
│   │   ├── contacts/
│   │   ├── funds/
│   │   └── news/
│   └── page.tsx
├── components/
│   └── ui/               # Reusable UI components
├── lib/
│   ├── database.types.ts # Supabase-generated TypeScript types
│   ├── applySupabaseFilter.ts        # Query filtering utility
│   └── supabase       # Supabase client setup
├── store/
│   ├── api-api.ts            # RTK Query base API configuration
│   └── app-store.ts           # Redux Store
├── supabase/
│   ├── migrations/       # SQL migration files
```

## 🧪 Getting Started

Follow these steps to run the project locally.

### 1. Clone & Install

```bash
git clone https://github.com/drjseifu3003/Akinia-Test-Assesement.git
npm install --force
```

### 2. Configure Environment Variables

Create a `.env.local` file at the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

> You can find these keys in **Supabase → Project Settings → API**.

### 3. Initialize & Link Supabase

```bash
npx supabase init                      # creates the supabase/ folder
supabase link --project-ref <project-ref>   # link to your cloud project
```

### 4. Apply Migrations & Seed Data

```bash
supabase db push                       # runs SQL in supabase/migrations
```

### 5. Generate TypeScript Types (optional but recommended)

```bash
npx supabase gen types typescript --local > lib/database.types.ts
```

### 6. Run the Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** to see the app running.

> **Tip:** If you ever need a clean slate locally, run  
> `supabase db reset --force` (destroys data, then reapplies migrations).
