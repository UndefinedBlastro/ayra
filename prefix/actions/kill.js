module.exports = {
    name: "kill",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;Nooooooooo!!!;$title[$userDisplayName[$authorID] Kills $userDisplayName[$mentioned[0]] RIP!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/kill.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
