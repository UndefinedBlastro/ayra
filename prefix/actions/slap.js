module.exports = {
    name: "slap",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;I would never do that!!;$title[$userDisplayName[$authorID] slaps $userDisplayName[$mentioned[0]] RIP!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/slap.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
