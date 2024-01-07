module.exports = {
    name: "hug",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[I'll hug you instead $userDisplayName[$authorID]] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] hugs $userDisplayName[$mentioned[0]] Awwe!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/hug.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
