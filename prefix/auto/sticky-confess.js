module.exports = {
    name: "",
    type: "messageCreate",
    code:`$if[$channelID==1050101769981657088;$function[$deleteMessage[1050101769981657088;$getVar[sticky3;$guildID]]]
$setVar[sticky3;$guildID;$sendMessage[1050101769981657088;DO NOT PROMOTE SELF-HARM AND/OR SUICIDE, OR ANYTHING ELSE THAT VIOLATES THE DISCORD TERMS OF SERVICE.*All submissions are sent by typing the confession here OR using /confess in other channels* ;true]];]`,
    unprefixed: false

}
