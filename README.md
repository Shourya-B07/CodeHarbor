# 🌊 CodeHarbor

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


