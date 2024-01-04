module.exports = {
    name: "",
    type: "messageCreate",
    code:`$onlyIf[$getVar[xp-$guildID;$authorID]<= 12]
$if[$getVar[level-$guildID;$authorID]>=5;$memberAddRoles[$guildID;$authorID;984333155966283817]]
$if[$getVar[level-$guildID;$authorID]>=10;$memberAddRoles[$guildID;$authorID;984333148420730950]]
$if[$getVar[level-$guildID;$authorID]>=15;$memberAddRoles[$guildID;$authorID;985519090217152553]]
$if[$getVar[level-$guildID;$authorID]>=20;$memberAddRoles[$guildID;$authorID;984333118280437820]]
$if[$getVar[level-$guildID;$authorID]>=30;$memberAddRoles[$guildID;$authorID;1130440335642857503]]
$if[$getVar[level-$guildID;$authorID]>=40;$memberAddRoles[$guildID;$authorID;1130438481366224997]]
$if[$getVar[level-$guildID;$authorID]>=50;$memberAddRoles[$guildID;$authorID;1130438491533226034]]
$if[$getVar[level-$guildID;$authorID]>=60;$memberAddRoles[$guildID;$authorID;984952362210824235]]
$if[$getVar[level-$guildID;$authorID]>=70;$memberAddRoles[$guildID;$authorID;1130438476207239178]]
$if[$getVar[level-$guildID;$authorID]>=80;$memberAddRoles[$guildID;$authorID;1023135020744970240]]
$if[$getVar[level-$guildID;$authorID]>=90;$memberAddRoles[$guildID;$authorID;984952352962379777]]
$if[$getVar[level-$guildID;$authorID]>=100;$memberAddRoles[$guildID;$authorID;1130441649001078815]]

]`,
    unprefixed: false

}
