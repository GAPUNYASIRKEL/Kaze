

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["804957803529109505", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "f71a3da30e254962965ca2a89d6f74b9",
  spotifyClientSecret : "199a619d22dd4e55a4a2c1a7a3d70e63",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "With Komi-San", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/ahkMq8x",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "lavalink.beban.tech",
      password: "bytebee_",
      host: "lavalink.beban.tech",
      port:  80,
      secure: false
    }
  ]
}
