module.exports = {
    name: "cuddle",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[let me cuddle you $userDisplayName[$authorID]] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/cuddle.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] wants to cuddle $userDisplayName[$mentioned[0]] Awwe!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/cuddle.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[let me cuddle you $userDisplayName[$authorID]] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/cuddle.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
