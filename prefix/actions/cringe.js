module.exports = {
    name: "cringe",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[$userDisplayName[$authorID] is cringing at themselves !] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$mentioned[0]] made $userDisplayName[$authorID] cringe !] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[$userDisplayName[$authorID] is cringing!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
