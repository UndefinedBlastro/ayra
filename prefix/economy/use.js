module.exports = {
    name: "use",
    type: "messageCreate",
    code:`$if[$message==command;$if[$getVar[custom;$authorID;0]>=1;$setVar[custom;$authorID;$sub[$getVar[custom;$authorID];1]]  $setVar[hcustom;$authorID;1] <@$authorID> pls make a ticket to claim your <:custom:1164951112340754453> Custom Command ;You haven't bought the command yet]]

$if[$message==ring;$if[$getVar[ring;$authorID;0]>=1;$setVar[ring;$authorID;$sub[$getVar[ring;$authorID];1]]
$setVar[mari;$authorID;1] <@$authorID> has unlocked the marriage slot; You haven't bought the command yet]]

$if[$message==swag;$if[$getVar[swag;$authorID;0]>=1;$setVar[swag;$authorID;$sub[$getVar[swag;$authorID];1]]
$memberAddRoles[982931539941818408;$authorID;996763554407522366] <@$authorID> has been swagged for 2 days $wait[172800000] $memberRemoveRoles[982931539941818408;$authorID;996763554407522366] ; You haven't bought the command yet]]

$if[$message==lootbox;$if[$getVar[lootbox;$authorID;0]>=1;$setVar[lootbox;$authorID;$sub[$getVar[lootbox;$authorID];1]]
$let[supercookieamount;$randomNumber[10;20]]$setVar[supercookie;$authorID;$sum[$getVar[supercookie;$authorID];$get[supercookieamount]]]
 <@$authorID> got $get[supercookieamount] Supercookie from the Cookie God; You haven't bought the command yet]]`,
    unprefixed: false

}
