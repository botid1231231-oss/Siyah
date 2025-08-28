module.exports = {
config: {
name: "siyam",
version: "1.0",
author: "siyam",
countDown: 5,
role: 0,
shortDescription: "no prefix",
longDescription: "no prefix",
category: "no prefix",
},

onStart: async function(){}, 
onChat: async function({ event, message, getLang }) {
if (event.body && event.body.toLowerCase() === "siyam") {
return message.reply({
body: " ──────────◊\n‣ 𝐁𝐨𝐭 & 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧  \n\n‣ 𝐍𝐚𝐦𝐞: siyam                           ‣ 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:🎀 POOKIE 🎀",
attachment: await global.utils.getStreamFromURL("https://i.imgur.com/JoxJzas.jpeg")
});
}
}
}
