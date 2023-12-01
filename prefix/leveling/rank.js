module.exports = {
    name: "rank",
    type: "messageCreate",
    aliases: ["ranks", "user-rank"],
    code:`$if[$authorID==963802964185735178;$attachment[https://agg-api.vercel.app/rankcard?username=$username[$mentioned[0;true]]&border=false&xp=$getVar[xp-$guildID;$mentioned[0;true]]&maxxp=$multi[$getVar[level-$guildID;$mentioned[0;true]];250]&level=$getVar[level-$guildID;$mentioned[0;true]]&avatar=$userAvatar[$mentioned[0;true]]&blur=false&background=https://media.discordapp.net/attachments/1073175125538643988/1176512762634043392/image.png&xpcolor=C1BAFF
;rankcard.jpg];$attachment[https://agg-api.vercel.app/rankcard?username=$username[$mentioned[0;true]]&border=false&xp=$getVar[xp-$guildID;$mentioned[0;true]]&maxxp=$multi[$getVar[level-$guildID;$mentioned[0;true]];250]&level=$getVar[level-$guildID;$mentioned[0;true]]&avatar=$userAvatar[$mentioned[0;true]]&blur=false&background=https://media.discordapp.net/attachments/1166286494080708649/1169598585495617597/image.png&xpcolor=C1BAFF
;rankcard.jpg]]`
}
