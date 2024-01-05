module.exports = {
    name: "bored",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]!= $authorID;$title[$userDisplayName[$mentioned[0]] made $userDisplayName[$authorID] bored!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bored.json;get]] $httpResult[embed;image;url]]
    $color[Random];What?];$userDisplayName[$authorID]is bored!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bored.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
