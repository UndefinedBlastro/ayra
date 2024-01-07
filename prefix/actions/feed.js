module.exports = {
    name: "feed",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;How do you feed yourself?
    ;$title[$userDisplayName[$authorID] is feeding $userDisplayName[$mentioned[0]]] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/feed.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag someone]`,
    unprefixed: false

}
