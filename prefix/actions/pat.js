module.exports = {
    name: "pat",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]==$authorID;$title[I'll pat you instead $userDisplayName[$authorID]] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/pat.json;get]] $httpResult[embed;image;url]]
    $color[Random];$title[$userDisplayName[$authorID] pats $userDisplayName[$mentioned[0]] Awwe!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/pat.json;get]] $httpResult[embed;image;url]]
    $color[Random]];Please tag a user]`,
    unprefixed: false

}
