# 🧠 SNARK — The Sarcastic AI Sidekick

> *“You asked for help? Here’s some sass with your solution.”*

Meet **Snark**, the AI-powered web assistant who answers with a scowl and serves solutions with sass. Born out of late-night frustration and too much caffeine, Snark is your overqualified, underpaid sarcastic buddy who’s always online (if you’re lucky). It's like ChatGPT, but with a grudge.
But remember it always solves your issues, thats whats its made for! :)
---

## 🎯 Features

- ⚡ **Real-time chat** interface — just like your fav AI chatbots.
- 😈 **Biting sarcasm** baked into every reply.
- 🪄 **Magical backend** powered by an ultra-fast LLM API.
- 🌐 **Frontend + Backend** fully connected using Cloudflare Tunnel.
- 💻 **Simple VS Code setup (or even colab if your the GPU fast guy XD butt remember it wont do the GUI then)** — clone, install, run. As fun and simple as that!

---

## 📦 Tech Stack

| Layer      | Tech                  |
|------------|------------------------|
| Frontend   | Next.js (React + TS)   |
| Backend    | Node.js + Express      |
| Styling    | Tailwind CSS           |
| API Calls  | Fetch (REST)           |
| Hosting    | Cloudflare Tunnel      |

---

## 🚀 Getting Started

### 1. Clone the repo

```
git clone https://github.com/your-username/snark.git
cd snark
2. Install dependencies

cd backend
npm install

cd ../frontend
npm install
3. Set your API key
Create a .env file inside /backend and add:

GROQ_API_KEY=your_api_key_here
(You’ll get the key from groq.com. It’s free to register.)

4. Start servers

# Start backend (port 5000)
cd backend
npm run dev

# In a new terminal, start frontend (port 3000)
cd frontend
npm run dev
🌍 Expose to the world (Optional)
To make Snark accessible globally, use Cloudflare Tunnel. Example:

cloudflared tunnel --url http://localhost:3000
This will give you a .trycloudflare.com URL you can share anywhere. So yeah you flex on your friends that you made this (i bet they dont know cake about open source XD)
```
🔌 API + Model
Snark uses an external AI inference API to generate replies. It's built to be OpenAI-compatible but operates on open-weight models with insanely low latency — perfect for real-time sass.

This makes Snark fast, free, and fierce.

You only need one key (provided via .env) to start generating snarky magic. No complex setup. Just plug and play.

# 🧠 Powered by Groq (tho models vary)
Snark taps into the **Groq API** for *blink-and-you-miss-it* fast responses, ensuring your sarcasm gets delivered before your patience runs out.  
It’s like having the internet’s meanest friend, but running at SSD speed.

🤖 Why Snark is Special
Most AI bots are polite. Snark? Not so much. It talks back, it rolls its eyes, and it still gives you brilliant answers. It’s not just code — it’s attitude-as-a-service.

Ideal for devs who love sarcasm with their solutions.

💬 Example Use Cases
Pair programming with an attitude

Testing LLM-powered UI ideas

Making your friends feel roasted by a bot

🧼 .gitignore
A basic .gitignore is included to skip:

node_modules/
.env
dist/
.next/
🪪 License
MIT — because Snark doesn't believe in gatekeeping.

🧠 Fun Fact
The first reply Snark ever made was:
“Summoned from digital purgatory just to solve your gen z issue? I miss death, fr”
