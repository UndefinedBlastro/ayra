module.exports = {
    name: "bonk",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;How do you even bonk yourself?;$title[$userDisplayName[$authorID] bonked $userDisplayName[$mentioned[0]]!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bonk.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
