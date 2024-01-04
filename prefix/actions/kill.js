module.exports = {
    name: "kill",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]== $authorID;$title[$userDisplayName[$authorID] Kills $userDisplayName[$mentioned[0]] RIP!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/kill.json;get]] $httpResult[embed;image;url]]
    $color[Random];You can't do that here];Please tag a user]`,
    unprefixed: false

}
