module.exports = {
    name: "chase",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$if[$mentioned[0]!= $authorID;$title[$userDisplayName[$authorID] is chasing $userDisplayName[$mentioned[0]]!] 
    $image[$function[$httpRequest[https://api.lynnux.xyz/roleplay/chase.json;get]] $httpResult[embed;image;url]]
    $color[Random];how do yu chase yourself?];Please tag a user]`,
    unprefixed: false

}
