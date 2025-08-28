const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info", "profile"],
    author: "Amit Max ⚡",
    role: 0,
    shortDescription: "Show owner's profile",
    longDescription: "Shows a short personal profile of the owner.",
    category: "profile",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const profile = `
『 owner⚡ 』

• Name: SIYUU👑
• Class: 
• Group: 
• Gender: Male 
• DOB: 
• Religion: ISLAM 
• Blood: AB+  
• Height: 5.5 ft  
• Location:  MYMENSING 
• Hobby: Flirting  
• Status: Single  
• FB: SÎ Y Âm = https://www.facebook.com/share/1JPucZ2BQf/
• IG: creator_bro_0.1 =https://www.instagram.com/creator_broh_0.1?igsh=Mzg0MzMwYm40dWhw
• Email: 📨 unknownperson.bd.2.0@gmail.com 

⏰ Time: ${time}`;

    api.sendMessage(profile, event.threadID, (err, info) => {
      if (err) return console.error(err);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000); // 20 seconds = 20000 ms
    });
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
