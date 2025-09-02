const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NyajUydjI2bDN5QkIrNWsvMFlnblREL3M2QWZXWXNJUUVjTjNHK2NIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTW9uV2tyd0N5bGl1KzMyV1k3Z1RwOUFwdktnN1J0WWJ0ZUtFRXJsdERIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRTlPbmpCTjVKbldMWUNGQm91OGxZUDdkbDFBdW9UL2ozT2VxWWZQUEVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNjNlL21NVENlRnVDS2tCejh2S1dqTFdadDZQUC9WMGJpZ09PUVlReEhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGeGQxRisyeXZiTEFnNDBjTHI3WFFoS29SdldNbFZySDZvbTlSWndNR1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE3SlZHNUJJbXRUQUxybWtlWFZkMVZFbG9kWDUyTXRPTFE3VFZ4VTljV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUJmNHdzMTk3anp1YXdyZFpmaWI5V1VKcmxnTE12TWJrN3ROTDlRRjIzVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2NOazlUdzlBd24xdm5oSDdMQXVRUnNEZnhWVFVJYjJQcUlTZllBYnhsOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9ydis4dmNIdjRZcGhaZkV3YXhmWFdvTGRFdm5uUUdXbDRCNFJUdVFJNERabXc3eXFBUE1IWGsreG9GYmFTcnNiTm5qamptVWNhNkNOVTdOeEZuZEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJwUnlvM1BvS1kvb2E2ODVlR2lSdlE4N1pYOE1ab0JGY29aSy95b2dnVm1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5NDI0MzE0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4OEYxNTlDRDJGNkIyQzg3ODVGMEZBNkM3MjkzOEM5RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2Nzg5MzkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTQyNDMxNDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0ZCNjM3OUFEMzMyOTg3MkYxQUYzNEY4RDc2MzIyQjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Njc4OTM5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSEdNV1Q0WDUiLCJtZSI6eyJpZCI6IjkyMzI5NDI0MzE0NjoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNzYyNzQ4OTQ2Njc4NTM6MUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00yS280TUhFSXYxMmNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNmKzNtTFFpWFQ2OEM1UEkwUy9HdVVsc0JxN3loWTFJRXJZOWpBc25XRk09IiwiYWNjb3VudFNpZ25hdHVyZSI6InUyeWprQThrV2Q4R1NROE1LWHdyN2g1eWUvN2s1NmdpT2Y2b2I0WlM3dVU1ZGNOQVB3ZlhOYU1pQjdBdUtxTVg1eDRmeWIyY1FSaEJzd0hmT0NqQkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3UWd2OWo1VTlNZmREUTdYQzIvUGRRdUIxcHR5K2NPeWZzWTR1eEtyeXcrekhLb20rR3JkektWVk1kUE5VRlI5dURIOHQ0RVg0SzQ5L2pieXlBWnNCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5NDI0MzE0NjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQzL3Q1aTBJbDArdkF1VHlORXZ4cmxKYkFhdThvV05TQksyUFl3TEoxaFQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1Njc4OTM5MCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY samia md 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Samia md",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "samia md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*Arslan Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
