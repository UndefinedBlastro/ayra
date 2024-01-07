module.exports = {
    name: "facepalm",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[$userDisplayName[$authorID] is disappointed in themselves] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/facepalm.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] is disappointed by $userDisplayName[$mentioned[0]]] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/facepalm.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[$userDisplayName[$authorID] is diappointed] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/facepalm.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
