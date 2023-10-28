module.exports = {
    name: "",
    type: "messageCreate",
    code:`$if[$channelID==992344643213721620;$function[$deleteMessage[$channelID;$getVar[sticky1;$guildID]]] $setVar[sticky1;$guildID;$sendMessage[992344643213721620;**__Stickied Message:__**
After you post your intro please make your way over to ⁠<#983984426172178444> and say hi!
*Want template? Check pins <a:checkpins:1073177366752395274> *;true]];]`,
    unprefixed: false

}
