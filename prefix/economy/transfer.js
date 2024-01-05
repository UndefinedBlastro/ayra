module.exports = {
    name: "transfer",
    type: "messageCreate",
    code:  `
$cooldown[$commandName_$authorID;1h;You're on cooldown.]

$onlyIf[$mentioned[0]!=;Please tag someone]
$onlyIf[$isNumber[$message[1]];Please enter a valid number]
$setVar[cookie;$authorID;$sub[$getVar[cookie;$authorID];$message[1]]]
$setVar[cookie;$mentioned[0];$sum[$getVar[cookie;$mentioned[0]];$message[1]]]
Succesfully transfered!!`
}
