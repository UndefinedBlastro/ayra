module.exports = {
    name: "die",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[$userDisplayName[$authorID] wants to die] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/die.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$mentioned[0]] is making $userDisplayName[$authorID] to kill themself] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/die.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[$userDisplayName[$authorID] wants to die] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/die.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
