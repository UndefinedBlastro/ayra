module.exports = {
    name: "",
    type: "messageCreate",
    code:`$onlyIf[$getVar[afk;$authorID]==yes;] $if[$startsWith[$message;c!afk]==true;;I have removed your Afk <@$authorID> $function[$memberSetNickname[$guildID;$authorID;$getVar[afkname;$authorID]]] $setVar[afk;$authorID;no]]`,
    unprefixed: false

}
