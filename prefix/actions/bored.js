module.exports = {
    name: "bored",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$title[$userDisplayName[$mentioned[0]] makes $userDisplayName[$authorID] bored!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bored.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] is bored!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bored.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
