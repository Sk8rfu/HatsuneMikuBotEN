<p align="center">
  <img src="https://github.com/Sk8rfu/HatsuneMikuBotEN/blob/assets/miku_is_the_best.jpg?raw=true?raw=true">
</p>

# HatsuneMikuBotEN
🌸 HatsuneMikuBot - Anime Discord Bot (English Version)

---

HatsuneMikuBot is a Bulgarian anime‑themed Discord bot featuring cute reactions, anime images, Hatsune Miku content, and fun interaction commands.
Built with discord.js v14, using multiple public APIs, and fully open‑source.
---

⚙️ Setup & Configuration (Everything You Need in One Place)
To run HatsuneMikuBot, you must configure two things:
---
your environment variables (.env)

your slash command registration file (deploy-commands.js)

Follow the steps below.


📦 Install Dependencies
---
Run the following command to install all required libraries:

npm install

This will automatically install everything listed in package.json.


🔧 1. Create Your .env File
---
Inside the project, you will find:

.env.example

This file shows what your .env must contain.

Create a new file named:

.env

and copy the content from .env.example, then replace the values:

✔️ TOKEN_BOT
Your bot token from Discord Developer Portal → Bot → Reset Token

⚠️ Important:  
.env is ignored by Git and will NOT be uploaded to GitHub.

Each user must create their own .env.


📝 2. Edit deploy-commands.js
---
Inside this file, you must insert your Application ID so the bot knows where to register slash commands.

Find this line:

Routes.applicationCommands("YOUR_ID_Application"),

Replace "YOUR_ID_Application" with your actual Application ID.


📡 3. Register Slash Commands
---
After editing deploy-commands.js, run:

node deploy-commands.js

This will upload all slash commands to your Discord application.

If successful, you will see a confirmation message in the console.


🚀 4. Start the Bot
---
Once everything is configured, start the bot with:

node index.js

If your .env is correct, the bot will log in and go online.

---
✨ Features
Anime images & GIFs

Reaction commands (hug, kiss, slap, pat…)

Hatsune Miku images & GIFs

Meme generator

Random anime quotes

User interaction commands

Beautiful embeds

Rotating presence statuses

📜 Commands
🎀 Anime Reactions

 /waifu  — Shows a random waifu

 /baka  — Sends a “Baka!” GIF

 /neko  — Cute neko image

 /kiss  — Kiss a user

 /hug  — Hug a user

 /cuddle  — Cuddle a user

 /pat  — Head‑pat someone

 /slap  — Slap a user

💙 Hatsune Miku

 /miku  — Shows a Miku image

 /miku-random  — Random Hatsune Miku picture

 /miku-gif  — Random Miku GIF

 /miku-cute  — Cute Miku image

👤 User Commands

 /avatar  — Shows a user’s avatar

 /ship  — Compatibility between two users

🐾 Extra Anime Commands

 /catgirl  — Random catgirl

 /wink  — Sends a wink

 /smug  — Smug reaction

 /blush  — Blushing reaction

 /nekogif  — Random neko GIF

 /animequote  — Random anime quote

 /meme  — Random meme

❓ Help

 /help  — Shows the full command menu

🌐 API Sources

This bot uses the following public APIs:

nekos.best — Anime images & GIFs

nekos.life — Reaction GIFs

Danbooru (Safe) — Hatsune Miku images

Meme API — Random memes

All APIs are public and require no API key.


❤️ Made With Love
HatsuneMikuBot was created with love, passion, and dedication to the anime community.
If you encounter any issues, bugs, or have suggestions for improvements, please open an issue in the repository and report it.
Your feedback helps make the bot better for everyone. 💙
