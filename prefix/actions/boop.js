module.exports = {
    name: "boop",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;You can't boop yourself Silly!;$title[$userDisplayName[$authorID] booped $userDisplayName[$mentioned[0]]!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/boop.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
