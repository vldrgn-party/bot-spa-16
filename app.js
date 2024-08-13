const TelegramBot = require('node-telegram-bot-api');

const token = '7284267456:AAF6uxWhew8ODwVzD13-4TS5AZNJje77N_w';

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    async function startBot() {
        const menu_game = {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "▶️ Играть сейчас",
                            web_app: {url: "https://drago-slide.site/m76CgS"},
                        },
                    ],
                    [
                        {
                            text: "🌐 Web - версия",
                            url: "https://drago-slide.site/m76CgS",
                        },
                    ],
                ],
            },
            parse_mode: 'HTML'
        }

        if (text === '/start') {
            await bot.sendPhoto(chatId, './img/home.jpg');
            await bot.sendMessage(chatId, "💰 Добро пожаловать в Dragon money! 🐉 \n\n Теперь вы можете играть в любимые \n игры прямо в телеграм!", menu_game)
        }
    }
    startBot()
})