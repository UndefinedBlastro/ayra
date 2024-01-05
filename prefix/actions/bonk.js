module.exports = {
    name: "bonk",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]!= $authorID;$title[$userDisplayName[$authorID] bonked $userDisplayName[$mentioned[0]]!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bonk.json;get]] $httpResult[embed;image;url]]
    $color[Random];What?];Please tag a user]`,
    unprefixed: false

}
