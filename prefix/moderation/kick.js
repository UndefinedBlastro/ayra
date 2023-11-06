module.exports = {
	name: "kick",
    type: "messageCreate",
    code: 
    `$onlyIf[$hasPerms[$guildID;$authorID;KickMembers];$addField[<:Error:1165187513443430492> Error;You Need Kick_Members Permission In-Order To Use This Command;false]$color[c1baff]]
$if[$mentioned[0]==$authorID;$addField[<:Error:1165187513443430492> Error;You Cannot Kick Yourself;false]$color[c1baff] 
$let[c1;true];$let[c1;false]] 
$if[$mentioned[0]==$botID;$addField[<:Error:1165187513443430492> Error;I Cannot Kick MySelf;false]$color[c1baff] 
$let[c2;true];$let[c2;false]] 
$if[$hasPerms[$guildID;$mentioned[0];Administrator];$addField[<:Error:1165187513443430492> Error;I Cannot Kick A Person With Equal Or More Perms Than Me;false]$color[c1baff]
$let[c3;true];$let[c3;false]] 
$if[$mentioned[0]==$guildOwnerID[$guildID];$addField[<:Error:1165187513443430492> Error;I Cannot Kick The Owner Of The Server <:8534purpleowner:1165172912135876699>;false]$color[c1baff] 
$let[c4;true];$let[c4;false]] 
$let[reason;$if[$noMentionMessage!=;$noMentionMessage;No Reason Provided!]] 
$if[$and[$get[c1]==false;$get[c2]==false;$get[c3]==false;$get[c4]==false];$if[$kickMember[$guildID;$mentioned[0];$get[reason]]==true;$color[c1baff] $title[User Kicked <a:6521verificationicon:1165490238643253299>]
$addField[username <:1154395949678985278:1164951097354498108>;$username[$mentioned[0]];false] 
$addField[Reason <:8858shinypurplelink:1165172907501174795>;$get[reason];false] $color[c1baff]
$thumbnail[$userAvatar[$mentioned[0]]];$addField[<:Error:1165187513443430492> 
Oh no!;You've Caught An Ultra Rare Error Please Report It In Our Support Server!;false] 
$color[c1baff]]]`
}
