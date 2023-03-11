const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const web_link = "https://chatgpt-web-key.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome ChatGPT :)))))", {
    reply_markup: {
        keyboard: [[{ text: "开始聊天", web_app: { url: web_link } }]],
    },
  })
);

module.exports = async (req, res) => {
  try {
    await bot.handleUpdate(req.body);
    res.status(200).send("OK");
  } catch (error) {
    console.error(error);
    res.status(400).send("Error");
  }
};
