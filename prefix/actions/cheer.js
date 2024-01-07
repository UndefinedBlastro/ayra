module.exports = {
    name: "cheer",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[You can do it $userDisplayName[$authorID]!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] hugs $userDisplayName[$mentioned[0]] Awwe!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random]];$title[$userDisplayName[$authorID] is cheering!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random]]`,
    unprefixed: false

}
