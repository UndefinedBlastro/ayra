module.exports = {
    name: "eval", // Not defining this creates a command that will be executed for every event fired of given type
    code: `$if[$or[$authorID==963802964185735178;$authorID==1041432044338688201];
$eval[$message;true]
$function[$addMessageReactions[$channelID;$messageID;✅]];$function[$addMessageReactions[$channelID;$messageID;❎]]]`,
    type: "messageCreate" // The event to act on
}
