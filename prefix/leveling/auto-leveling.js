module.exports = {
    name: "",
    type: "messageCreate",
    code:`$onlyIf[$channelID==983984426172178444]
$onlyIf[$getVar[xp-$guildID;$authorID]<= 12]
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=5;$getVar[level-$guildID;$authorID]<=6];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=10;$getVar[level-$guildID;$authorID]<=11];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=15;$getVar[level-$guildID;$authorID]<=16];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=20;$getVar[level-$guildID;$authorID]<=21];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=30;$getVar[level-$guildID;$authorID]<=31];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=40;$getVar[level-$guildID;$authorID]<=41];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=50;$getVar[level-$guildID;$authorID]<=51];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=60;$getVar[level-$guildID;$authorID]<=61];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=70;$getVar[level-$guildID;$authorID]<=71];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=80;$getVar[level-$guildID;$authorID]<=81];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=90;$getVar[level-$guildID;$authorID]<=91];
$onlyIf[$and[$getVar[level-$guildID;$authorID]>=100;$getVar[level-$guildID;$authorID]<=101];
]
$function[$memberAddRoles[$guildID;$authorID;1130441649001078815]$memberRemoveRoles[$guildID;$authorID;984952352962379777]]]
$function[$memberAddRoles[$guildID;$authorID;984952352962379777]$memberRemoveRoles[$guildID;$authorID;1023135020744970240]]]
$function[$memberAddRoles[$guildID;$authorID;1023135020744970240]$memberRemoveRoles[$guildID;$authorID;1130438476207239178]]]
$function[$memberAddRoles[$guildID;$authorID;1130438476207239178]$memberRemoveRoles[$guildID;$authorID;984952362210824235]]]
$function[$memberAddRoles[$guildID;$authorID;984952362210824235]$memberRemoveRoles[$guildID;$authorID;1130438491533226034]]]
$function[$memberAddRoles[$guildID;$authorID;1130438491533226034]$memberRemoveRoles[$guildID;$authorID;1130438481366224997]]]
$function[$memberAddRoles[$guildID;$authorID;1130438481366224997]$memberRemoveRoles[$guildID;$authorID;1130440335642857503]]]
$function[$memberAddRoles[$guildID;$authorID;1130440335642857503]$memberRemoveRoles[$guildID;$authorID;984333118280437820]]]
$function[$memberAddRoles[$guildID;$authorID;984333118280437820]$memberRemoveRoles[$guildID;$authorID;985519090217152553]]]
$function[$memberAddRoles[$guildID;$authorID;985519090217152553]$memberRemoveRoles[$guildID;$authorID;984333148420730950]]]
$function[$memberAddRoles[$guildID;$authorID;984333148420730950]$memberRemoveRoles[$guildID;$authorID;984333155966283817]]]
$function[$memberAddRoles[$guildID;$authorID;984333155966283817]]
`,
    unprefixed: false

}
