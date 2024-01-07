module.exports = {
    name: "dab",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[$userDisplayName[$authorID] dabs] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/dab.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] is dabbing in front of $userDisplayName[$mentioned[0]] Awwe!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/dab.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[$userDisplayName[$authorID] is dabbing] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/dab.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
