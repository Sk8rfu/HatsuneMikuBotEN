import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const commands = [
    {
        name: "waifu",
        description: "Shows a random waifu"
    },
{
    name: "baka",
    description: "Call someone a baka",
    options: [
        {
            name: "user",
            description: "The user who is a baka",
            type: 6,
            required: true
        }
    ]
},
{
    name: "hug",
    description: "Hug someone",
    options: [
        {
            name: "user",
            description: "Who do you want to hug?",
            type: 6,
            required: true
        }
    ]
},
{
    name: "pat",
    description: "Pat someone",
    options: [
        {
            name: "user",
            description: "Who do you want to pat?",
            type: 6,
            required: true
        }
    ]
},
{
    name: "neko",
    description: "Shows a random neko"
},
{
    name: "slap",
    description: "Slap someone",
    options: [
        {
            name: "user",
            description: "Who do you want to slap?",
            type: 6,
            required: true
        }
    ]
},
{
    name: "kiss",
    description: "Kiss someone",
    options: [
        {
            name: "user",
            description: "Who do you want to kiss?",
            type: 6,
            required: true
        }
    ]
},
{
    name: "cuddle",
    description: "Cuddle someone",
    options: [
        {
            name: "user",
            description: "Who do you want to cuddle?",
            type: 6,
            required: true
        }
    ]
},
{
    name: "wink",
    description: "Shows an anime wink"
},
{
    name: "smug",
    description: "Shows a smug face"
},
{
    name: "blush",
    description: "Shows an anime blush"
},
{
    name: "ship",
    description: "Ships two users",
    options: [
        {
            name: "user1",
            description: "First user",
            type: 6,
            required: true
        },
        {
            name: "user2",
            description: "Second user",
            type: 6,
            required: true
        }
    ]
},
{
    name: "catgirl",
    description: "Shows a random catgirl"
},
{
    name: "nekogif",
    description: "Shows a neko GIF"
},
{
    name: "animequote",
    description: "Shows an anime quote"
},
{
    name: "meme",
    description: "Shows a meme"
},
{
    name: "avatar",
    description: "Shows your avatar"
},
{
    name: "miku",
    description: "Shows Hatsune Miku"
},
{
    name: "miku-random",
    description: "Gets a random Hatsune Miku image 💙"
},
{
    name: "miku-gif",
    description: "Random Hatsune Miku GIF 🎞️"
},
{
    name: "miku-cute",
    description: "Cute Hatsune Miku image 🌸💙"
},
{
    name: "help",
    description: "Shows a list of commands"
}
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Registering global commands...");

        await rest.put(
            Routes.applicationCommands("YOUR_ID_Application"),
                       { body: commands }
        );

        console.log("Global SLASH commands have been registered!");
    } catch (error) {
        console.error(error);
    }
})();
