# 🌊 CodeHarbor

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white)](https://nodejs.org/)
[![Clerk](https://img.shields.io/badge/Clerk-3C4FE0?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Convex](https://img.shields.io/badge/Convex-FF6F61?style=for-the-badge&logo=database&logoColor=white)](https://convex.dev/)
[![LemonSqueezy](https://img.shields.io/badge/LemonSqueezy-FECC00?style=for-the-badge&logo=lemon&logoColor=black)](https://lemonsqueezy.com/)
[![Piston API](https://img.shields.io/badge/Piston_API-FF4500?style=for-the-badge&logo=code&logoColor=white)](https://github.com/engineer-man/piston)


CodeHarbor is a **SaaS platform** for developers to **collaboratively write, compile, and share code snippets** in real time.  
It supports up to **10 programming languages** and provides both **Free** and **Pro plans** tailored to your needs.  

> Think of it as your personal coding dockyard — write, compile, collaborate, and share code snippets with the community.

---

## ✨ Features

- 🖊 **Collaborative Code Editor** powered by Monaco Editor  
- 🖥 **Compile Code Instantly** in 10+ languages (C++, Java, Python, Ruby, TypeScript, etc.) using [Piston API](https://github.com/engineer-man/piston)  
- 📤 **Snippet Sharing**: Publish your snippets to the community  
- ⭐ **Star & Save Snippets** directly to your profile  
- 🗑 **Delete Snippets** you no longer want to keep  
- 👤 **Profile Section** with:  
  - Personal information  
  - Compiled code history  
  - Star-marked snippets  
- 🔐 **Authentication & Authorization** with Clerk  
- 🛠 **State Management** via Zustand  
- 💳 **Payments & Subscriptions** with LemonSqueezy 
- 🗄 **Convex Database** for storing snippets, profiles, and user data  
- 📦 **Free & Pro Plans**:  
  - Free Plan → Compile in **1 language**  
  - Pro Plan → Compile in **10 languages**

---

## 🛠 Tech Stack

**Frontend:**  
- Next.js 
- Tailwind CSS  
- Monaco Editor  

**Backend & Services:**  
- Node.js 
- Convex(Database)  
- Piston API(Code execution)  
- Svix(Webhooks)  
**Authentication & Payments:**  
- Clerk
- LemonSqueezy]

**State Management:**  
- Zustand

---

## 🚀 Getting Started

1.Clone the Repository
```bash
git clone https://github.com/Shourya-B07/CodeHarbor.git
cd codeharbor
```
2.Install Dependencies
```bash
npm install
```
3.Configure Environment Variables
```
.env setup-
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
CONVEX_DEPLOYMENT
NEXT_PUBLIC_CONVEX_URL
```
4.Run the Development Server
```
npm run dev
```


