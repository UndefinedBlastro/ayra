module.exports = {
    name: "botinfo", 
    type: "messageCreate",
    aliases: ["binfo", "boti"],
    code: `$author[Bot Info;$userAvatar[$botID]]
$description[**Uptime:** \`$parseMS[$uptime;2;;true]\`
**Guilds:** \`$guildCount\`
**Users:** \`$userCount\`

**Version:**
**ForgeScript:** \`v$version\`
**Node.JS:** \`$nodeVersion\`

**Memory Stats:** **Usage:** \`$floor[$ram]MB\`
**Free:** \`$cropText[$divide[$djsEval[require("os").freemem()];1073741824];0;2]GB\`
**Total:** \`$cropText[$divide[$djsEval[require("os").totalmem()];1073741824];0;2]GB\`

**System Stats:**
**Usage:** \`$math[$cpu/100]%\`
**Cores:** \`$djsEval[require("os").cpus().length]\`
**OS:** \`$djsEval[require("os").type()] $djsEval[require("os").release()] $djsEval[require("os").arch()]\`]

$color[c1baff]

$footer[Made by $userDisplayName[$botOwnerID] for Ayra cafe;$userAvatar[$botOwnerID]]`
}
