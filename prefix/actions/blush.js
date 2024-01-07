module.exports = {
    name: "blush",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$title[$userDisplayName[$mentioned[0]] made $userDisplayName[$authorID] blush!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/blush.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] is blushing! ] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/blush.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
