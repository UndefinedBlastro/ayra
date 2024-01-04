module.exports = {
    name: "bite",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]== $authorID;$title[$userDisplayName[$authorID] bit $userDisplayName[$mentioned[0]] oof!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/bite.json;get]] $httpResult[embed;image;url]]
    $color[Random];How do you even do that?];Please tag a user]`,
    unprefixed: false

}
