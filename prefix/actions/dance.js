module.exports = {
    name: "dance",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[$userDisplayName[$authorID] wants to dance] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/dance.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] wants to join $userDisplayName[$mentioned[0]] on Dance floor] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/dance.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[$userDisplayName[$authorID] is dancing] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/dance.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
