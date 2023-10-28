module.exports = {
    name: "",
    type: "messageCreate",
    code:`$if[$channelID==1057884477759688714;$function[$deleteMessage[$channelID;$getVar[sticky2;$guildID]]] $setVar[sticky2;$guildID;$sendMessage[1057884477759688714; **__Stickied Message:__**

You can send any YouTube , twitch, or other socials except discord servers. If you want to advertise discord server ask for partnerships. ;true]];]`,
    unprefixed: false

}
