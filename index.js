import {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActivityType
} from "discord.js";

import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences
    ]
});

// Universal API validation
function validateApi(data) {
    if (!data) return false;

    if (data.results && data.results[0] && data.results[0].url) return true;
    if (data.url) return true;
    if (data.image) return true;

    return false;
}

// Universal URL extractor
function getImageUrl(data) {
    if (!data) return null;

    if (data.results && data.results[0] && data.results[0].url)
        return data.results[0].url;

    if (data.url)
        return data.url;

    if (data.image)
        return data.image;

    return null;
}

client.once("clientReady", (c) => {
    console.log(`Bot is online as ${c.user.tag}`);

    const statuses = [
        "Hatsune Miku 💙",
        "World is Mine 🎤",
        "Tell Your World ✨",
        "Vocaloid Live 🎶",
        "kawaii beats 🌸"
    ];

    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)];

        c.user.setPresence({
            activities: [{
                name: status,
                type: ActivityType.Listening
            }],
            status: "online"
        });
    }, 30000);
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const cmd = interaction.commandName;

    // /waifu
    if (cmd === "waifu") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /waifu:", err);
            return;
        }

        const res = await fetch("https://nekos.best/api/v2/waifu");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Waifu API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle("Waifu 💖")
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /baka
    if (cmd === "baka") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /baka:", err);
            return;
        }

        const user = interaction.options.getUser("user");
        const res = await fetch("https://nekos.best/api/v2/baka");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Baka API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle(`${user.username}, BAKA! 😡`)
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /neko
    if (cmd === "neko") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /neko:", err);
            return;
        }

        const res = await fetch("https://nekos.best/api/v2/neko");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Neko API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle("Neko 😺")
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /kiss
    if (cmd === "kiss") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /kiss:", err);
            return;
        }

        const user = interaction.options.getUser("user");
        const res = await fetch("https://nekos.best/api/v2/kiss");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Kiss API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} kisses ${user.username} 💋`)
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /hug
    if (cmd === "hug") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /hug:", err);
            return;
        }

        const user = interaction.options.getUser("user");
        const res = await fetch("https://nekos.best/api/v2/hug");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Hug API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} hugs ${user.username} 🤗`)
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /cuddle
    if (cmd === "cuddle") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /cuddle:", err);
            return;
        }

        const user = interaction.options.getUser("user");
        const res = await fetch("https://nekos.best/api/v2/cuddle");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Cuddle API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} cuddles ${user.username} 🧸`)
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /pat
    if (cmd === "pat") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /pat:", err);
            return;
        }

        const user = interaction.options.getUser("user");
        const res = await fetch("https://nekos.best/api/v2/pat");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Pat API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} pats ${user.username} 🐾`)
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /slap
    if (cmd === "slap") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /slap:", err);
            return;
        }

        const user = interaction.options.getUser("user");
        const res = await fetch("https://nekos.best/api/v2/slap");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Slap API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} slaps ${user.username} 👋`)
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /miku
    if (cmd === "miku") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /miku:", err);
            return;
        }

        const embed = new EmbedBuilder()
        .setTitle("Hatsune Miku 💙")
        .setImage("https://pfppictures.com/wp-content/uploads/2026/03/Discord-Hatsune-Miku-Pfp.jpg.webp");

        return interaction.editReply({ embeds: [embed] });
    }

    // /miku-random
    if (cmd === "miku-random") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /miku-random:", err);
            return;
        }

        try {
            const res = await fetch("https://danbooru.donmai.us/posts.json?tags=hatsune_miku+rating:safe&limit=100");
            const data = await res.json();

            if (!Array.isArray(data) || data.length === 0)
                return interaction.editReply("No Miku images found 😢");

            const random = data[Math.floor(Math.random() * data.length)];

            const embed = new EmbedBuilder()
            .setTitle("Hatsune Miku 💙")
            .setImage(random.file_url)
            .setColor("Aqua");

            return interaction.editReply({ embeds: [embed] });

        } catch (err) {
            console.error(err);
            return interaction.editReply("Error fetching Miku image.");
        }
    }

    // /miku-gif
    if (cmd === "miku-gif") {
        await interaction.reply("The /miku-gif command is temporarily disabled.");
    }

    // /miku-cute
    if (cmd === "miku-cute") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /miku-cute:", err);
            return;
        }

        try {
            const res = await fetch(
                "https://danbooru.donmai.us/posts.json?tags=hatsune_miku+rating:safe&limit=100"
            );

            const data = await res.json();

            if (!Array.isArray(data)) {
                return interaction.editReply("No cute Miku found 😢");
            }

            const valid = data.filter(p =>
            p.file_url &&
            (p.file_url.endsWith(".jpg") ||
            p.file_url.endsWith(".png") ||
            p.file_url.endsWith(".jpeg"))
            );

            if (valid.length === 0) {
                return interaction.editReply("No cute Miku found 😢");
            }

            const random = valid[Math.floor(Math.random() * valid.length)];

            const embed = new EmbedBuilder()
            .setTitle("Cute Hatsune Miku 🌸💙")
            .setImage(random.file_url)
            .setColor("#FFC0CB");

            return interaction.editReply({ embeds: [embed] });

        } catch (err) {
            console.error(err);
            return interaction.editReply("Error fetching cute Miku.");
        }
    }

    // /avatar
    if (cmd === "avatar") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /avatar:", err);
            return;
        }

        const embed = new EmbedBuilder()
        .setTitle(`${interaction.user.username} — Avatar`)
        .setImage(interaction.user.displayAvatarURL({ size: 4096 }));

        return interaction.editReply({ embeds: [embed] });
    }

    // /ship
    if (cmd === "ship") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /ship:", err);
            return;
        }

        const u1 = interaction.options.getUser("user1");
        const u2 = interaction.options.getUser("user2");
        const percent = Math.floor(Math.random() * 100);

        const embed = new EmbedBuilder()
        .setTitle(`❤️ Ship result: ${percent}%`)
        .setDescription(`${u1.username} + ${u2.username}`)
        .setThumbnail(u1.displayAvatarURL())
        .setImage(u2.displayAvatarURL());

        return interaction.editReply({ embeds: [embed] });
    }

    // /catgirl
    if (cmd === "catgirl") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /catgirl:", err);
            return;
        }

        const res = await fetch("https://nekos.best/api/v2/neko");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Catgirl API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle("Catgirl 😺")
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /wink
    if (cmd === "wink") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /wink:", err);
            return;
        }

        const res = await fetch("https://nekos.best/api/v2/wink");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Wink API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle("Wink 😉")
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /smug
    if (cmd === "smug") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /smug:", err);
            return;
        }

        const res = await fetch("https://nekos.best/api/v2/smug");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Smug API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle("Smug 😏")
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /blush
    if (cmd === "blush") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /blush:", err);
            return;
        }

        const res = await fetch("https://nekos.best/api/v2/blush");
        const data = await res.json();

        if (!validateApi(data)) {
            return interaction.editReply("❌ Blush API returned no result.");
        }

        const url = getImageUrl(data);

        const embed = new EmbedBuilder()
        .setTitle("Blush 😊")
        .setImage(url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /nekogif
    if (cmd === "nekogif") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /nekogif:", err);
            return;
        }

        async function tryApi(url) {
            try {
                const res = await fetch(url);
                return await res.json();
            } catch {
                return null;
            }
        }

        // API 1 — nekos.life
        let data = await tryApi("https://nekos.life/api/v2/img/ngif");
        if (data && validateApi(data)) {
            const url = getImageUrl(data);
            const embed = new EmbedBuilder()
            .setTitle("Neko GIF 😺🎞️")
            .setImage(url);
            return interaction.editReply({ embeds: [embed] });
        }

        // API 2 — nekos.best
        data = await tryApi("https://nekos.best/api/v2/neko_gif");
        if (data && validateApi(data)) {
            const url = getImageUrl(data);
            const embed = new EmbedBuilder()
            .setTitle("Neko GIF 😺🎞️")
            .setImage(url);
            return interaction.editReply({ embeds: [embed] });
        }

        // API 3 — fallback GIF
        const fallback = "https://media.tenor.com/2roX3uxz_68AAAAC/cat-cute.gif";

        const embed = new EmbedBuilder()
        .setTitle("Neko GIF 😺🎞️ (fallback)")
        .setImage(fallback);

        return interaction.editReply({ embeds: [embed] });
    }

    // /animequote
    if (cmd === "animequote") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /animequote:", err);
            return;
        }

        const quotes = [
            { anime: "Naruto", character: "Itachi Uchiha", quote: "People live their lives bound by what they accept as true." },
          { anime: "Attack on Titan", character: "Levi Ackerman", quote: "No regrets. That's my motto." },
          { anime: "2.5 Dimensional Seduction (2.5-jigen no Ririsa)", character: "Mikari Tachibana", quote: "I became a model so he'd finally notice me… but I still just want him to see the real me." },
          { anime: "One Piece", character: "Luffy", quote: "If you don’t take risks, you can’t create a future." },
          { anime: "Death Note", character: "L", quote: "Being alone is better than being with the wrong person." },
          { anime: "Bleach", character: "Ichigo Kurosaki", quote: "If you give up, you lose." },
          { anime: "Fairy Tail", character: "Natsu Dragneel", quote: "We live to protect our friends." },
          { anime: "Fullmetal Alchemist", character: "Edward Elric", quote: "A lesson without pain is meaningless." },
          { anime: "Demon Slayer", character: "Tanjiro Kamado", quote: "Move forward, even if you have to crawl." },
          { anime: "Date A Live", character: "Tohka Yatogami", quote: "If it’s for you, I’ll fight with everything I have." },
          { anime: "Dropkick on My Devil!", character: "Jashin-chan", quote: "If I can’t go back to hell… then I’ll just cause chaos here instead!" },
          { anime: "Dropkick on My Devil! X", character: "Hatsune Miku", quote: "Even if my leek gets stolen… I’ll still sing with a smile!" },
          { anime: "Jujutsu Kaisen", character: "Gojo Satoru", quote: "I’m the strongest." },
          { anime: "Tokyo Ghoul", character: "Kaneki Ken", quote: "Sometimes you have to hurt to grow." },
          { anime: "Tonikaku Kawaii (TONIKAWA: Over The Moon For You)", character: "Tsukasa Yuzaki", quote: "As long as we’re together, even the ordinary feels magical." },
          { anime: "More Than a Married Couple, But Not Lovers", character: "Akari Watanabe", quote: "I act confident… but sometimes I’m just scared of being honest." },
          { anime: "Sword Art Online", character: "Kirito", quote: "A game is just another world." },
          { anime: "Sword Art Online", character: "Asuna", quote: "I won’t run away. I’ll protect what matters to me." },
          { anime: "Hunter x Hunter", character: "Gon Freecss", quote: "I want to become stronger." },
          { anime: "My Hero Academia", character: "All Might", quote: "I am here." },
          { anime: "Alya Sometimes Hides Her Feelings from Me", character: "Alisa Mikhailovna Kujou", quote: "I’m not hiding my feelings… I just don’t know how to show them yet." },
          { anime: "Black Clover", character: "Asta", quote: "I’ll surpass my limits!" },
          { anime: "Blue Lock", character: "Isagi Yoichi", quote: "Devour your limits." },
          { anime: "Haikyuu!!", character: "Hinata Shoyo", quote: "I may be small, but I can jump." },
          { anime: "Re:Zero", character: "Subaru", quote: "Even if you’re weak, fight." },
          { anime: "Your Name", character: "Taki", quote: "Treasure the moments that feel like miracles." },
          { anime: "A Silent Voice", character: "Shoya", quote: "You can change yourself." },
          { anime: "Arifureta: From Commonplace to World's Strongest", character: "Hajime Nagumo", quote: "I became strong because I had no choice — but I kept going because I had someone to protect." },
          { anime: "Arifureta: From Commonplace to World's Strongest", character: "Yue", quote: "Wherever you go… I’ll follow. That’s my promise." },
          { anime: "Chainsaw Man", character: "Denji", quote: "I just want a normal life." },
          { anime: "Mob Psycho 100", character: "Mob", quote: "It’s okay to run away." },
          { anime: "Steins;Gate", character: "Okabe", quote: "The future is limitless." },
          { anime: "Code Geass", character: "Lelouch", quote: "If the king doesn’t move, his subjects won’t follow." },
          { anime: "Gintama", character: "Gintoki", quote: "Life is like a sword. It needs sharpening." },
          { anime: "Noragami", character: "Yato", quote: "Even gods can fall." },
          { anime: "Kuroko's Basketball", character: "Kuroko", quote: "I’m not alone." },
          { anime: "Rent-A-Girlfriend", character: "Chizuru Ichinose", quote: "Dreams don’t come true by luck — you chase them until they do." },
          { anime: "Dr. Stone", character: "Senku", quote: "Science will save us." },
          { anime: "The Seven Deadly Sins", character: "Meliodas", quote: "I won’t let anyone die." },
          { anime: "Fire Force", character: "Shinra", quote: "I’ll be a hero." },
          { anime: "Erased", character: "Satoru", quote: "You can change the past by changing yourself." },
          { anime: "Engage Kiss", character: "Kisara", quote: "If loving you is wrong, then I’ll break every rule for you." },
          { anime: "Toradora!", character: "Taiga", quote: "Don’t run from your feelings." },
          { anime: "Horimiya", character: "Miyamura", quote: "Everyone hides something." },
          { anime: "Komi Can't Communicate", character: "Komi", quote: "I want to make friends." },
          { anime: "My Teen Romantic Comedy SNAFU", character: "Hachiman", quote: "Genuine relationships are built, not found." },
          { anime: "Our Dating Story: The Experienced You and the Inexperienced Me", character: "Runa Shirakawa", quote: "I’ve been hurt before… but this time, I want to believe it’s okay to fall in love again." },
          { anime: "The Promised Neverland", character: "Emma", quote: "We’ll survive together." },
          { anime: "Assassination Classroom", character: "Koro-sensei", quote: "Growth begins with failure." },
          { anime: "Soul Eater", character: "Soul", quote: "Coolness is everything." },
          { anime: "My Dress-Up Darling", character: "Marin Kitagawa", quote: "If you love something, then go all in — that’s how you shine." },
          { anime: "Kill la Kill", character: "Ryuko", quote: "I fight for my own reasons." },
          { anime: "Neon Genesis Evangelion", character: "Shinji", quote: "I mustn’t run away." },
          { anime: "Violet Evergarden", character: "Violet", quote: "Words can heal." },
          { anime: "Fate/Stay Night", character: "Saber", quote: "A knight’s oath is eternal." },
          { anime: "Fate/Stay Night", character: "Rin Tohsaka", quote: "Power means nothing without control." },
          { anime: "Psycho-Pass", character: "Kogami", quote: "Justice is personal." },
          { anime: "Parasyte", character: "Shinichi", quote: "Humans change to survive." },
          { anime: "Akame ga Kill", character: "Akame", quote: "I won’t hesitate." },
          { anime: "Trigun", character: "Vash", quote: "Love and peace." },
          { anime: "Cowboy Bebop", character: "Spike", quote: "Whatever happens, happens." },
          { anime: "JoJo’s Bizarre Adventure", character: "Jotaro", quote: "Yare yare daze." },
          { anime: "Bungo Stray Dogs", character: "Dazai", quote: "Life is beautiful, even in pain." },
          { anime: "Made in Abyss", character: "Riko", quote: "The unknown is calling." },
          { anime: "High School DxD", character: "Rias Gremory", quote: "Power means nothing unless you use it to protect someone." },
          { anime: "High School DxD", character: "Akeno Himejima", quote: "Pain and pleasure… both remind us that we’re alive." },
          { anime: "High School DxD", character: "Issei Hyoudou", quote: "I’ll become stronger — not for power, but to protect the ones I love." },
          { anime: "Chivalry of a Failed Knight", character: "Stella Vermillion", quote: "I’ll burn my own path forward, no matter what stands in the way." }
        ];

        const q = quotes[Math.floor(Math.random() * quotes.length)];

        const embed = new EmbedBuilder()
        .setTitle(`${q.character} — ${q.anime}`)
        .setDescription(`"${q.quote}"`);

        return interaction.editReply({ embeds: [embed] });
    }

    // /meme
    if (cmd === "meme") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /meme:", err);
            return;
        }

        const res = await fetch("https://meme-api.com/gimme");
        const data = await res.json();

        if (!data || !data.url) {
            return interaction.editReply("❌ Meme API returned no result.");
        }

        const embed = new EmbedBuilder()
        .setTitle(data.title || "Meme")
        .setImage(data.url);

        return interaction.editReply({ embeds: [embed] });
    }

    // /help
    if (cmd === "help") {
        try {
            await interaction.deferReply();
        } catch (err) {
            console.error("❌ Discord API rejected deferReply() for /help:", err);
            return;
        }

        const embed = new EmbedBuilder()
        .setTitle("Miku Anime Bot — Commands")
        .setDescription(`
        **/waifu** — Shows a random waifu 💖
        **/baka** — Calls someone "Baka!" with a funny GIF 😡
        **/neko** — Cute neko image 😺
        **/kiss** — Kisses a selected user 💋
        **/hug** — Hugs a selected user 🤗
        **/cuddle** — Cuddles a selected user 🫂
        **/pat** — Pats someone on the head 🐾
        **/slap** — Slaps a selected user 👋

        **/miku** — Shows a Miku image 💙
        **/miku-random** — Random Hatsune Miku image 💙
        **/miku-gif** — Random Hatsune Miku GIF 🎞️
        **/miku-cute** — Cute Hatsune Miku image 🌸💙

        **/avatar** — Shows your avatar 🖼️
        **/ship** — Calculates compatibility between two users ❤️‍🔥
        **/catgirl** — Shows a random catgirl 😼
        **/wink** — Sends a wink 😉
        **/smug** — Smug reaction 😏
        **/blush** — Blushing reaction 😊
        **/nekogif** — Random neko GIF 🎞️
        **/animequote** — Random anime quote ✨
        **/meme** — Random meme from the internet 😂

        **/help** — Shows this menu 📘
        `);

        return interaction.editReply({ embeds: [embed] });
    }
});

client.login(process.env.TOKEN);
