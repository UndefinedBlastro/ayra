module.exports = {
    name: "bite",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;How do you even do that?;$title[$userDisplayName[$authorID] bit $userDisplayName[$mentioned[0]] oof!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bite.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
