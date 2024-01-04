module.exports = {
    name: "kiss",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]== $authorID;$title[$userDisplayName[$authorID] kisses $userDisplayName[$mentioned[0]] muah!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/kiss.json;get]] $httpResult[embed;image;url]]
    $color[Random];Aww! You feeling lonely?];Please tag a user]`,
    unprefixed: false

}
