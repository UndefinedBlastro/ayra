module.exports = {
    name: "ship",
    type: "messageCreate",
    code:`$onlyIf[$and[$mentioned[0]!=;$mentioned[1]!=];
    	$onlyIf[$mentioned[0]!=;$let[ship;$randomMemberID[$guildID]]
        $title[$username[$authorID] x $username[$get[ship]]]$image[https://agg-api.vercel.app/ship?avatar1=$memberAvatar[$guildID;$authorID;;png]&avatar2=$memberAvatar[$guildID;$get[ship];;png]]$color[Random]]
        $title[$username[$authorID] x $username[$mentioned[0]]$image[https://agg-api.vercel.app/ship?avatar1=$memberAvatar[$guildID;$authorID;;png]&avatar2=$memberAvatar[$guildID;$mentioned[0];;png]]$color[Random]]
        $title[$username[$mentioned[0]] x $username[$mentioned[1]]]$image[https://agg-api.vercel.app/ship?avatar1=$memberAvatar[$guildID;$mentioned[0];;png]&avatar2=$memberAvatar[$guildID;$mentioned[1];;png]]$color[Random]
        
    `,
    unprefixed: false

}
