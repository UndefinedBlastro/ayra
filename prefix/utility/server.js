module.exports = {
    name: "serverinfo", 
    type: "messageCreate",
    aliases: ["sinfo", "serveri"],
    code: `$author[Server Info; $guildIcon]
$title[$guildName]
$description[## **Server Info**
**Server ID:**  $guildID
**Owner:** <@$guildOwnerID>
**Created At:**  <t:1655711311>

## **Users:**
**Total Users:** $guildMemberCount
**Total Channel Count:** $guildChannelCount
**Total Role Count:** $guildRoleCount

## **Server Boost Status:**
**Total Boost:** $guildBoostCount
**Boost Level:** $guildBoostLevel

## **Server features:** 
    $guildFeatures

$image[$guildBanner]
]
$color[c1baff]

$footer[Made by $userDisplayName[$botOwnerID] for Ayra cafe;$userAvatar[$botOwnerID]]`
}
