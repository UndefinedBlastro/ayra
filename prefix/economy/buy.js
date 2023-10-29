module.exports = {
    name: "buy",
    type: "messageCreate",
    code:`$if[$message==command;$if[$getVar[supercookie;$authorID;0]>=300;$setVar[supercookie;$authorID;$sub[$getVar[supercookie;$authorID];300]] $if[$getVar[hcustom;$authorID;0]>=1;You can only buy this once!]
$setVar[custom;$authorID;1] <@$authorID> just successfully bought 1x Custom Command <:custom:1164951112340754453> for  300 <:supercookie:1165922365763506176> ;Need 300 supercookies to buy custom command]]
$if[$message==ring;$if[$getVar[supercookie;$authorID;0]>=40;$setVar[supercookie;$authorID;$sub[$getVar[supercookie;$authorID];40]]
$setVar[ring;$authorID;$sum[$getVar[ring;$authorID];1]] <@$authorID> just successfully bought 1x ring :ring: for  40 <:supercookie:1165922365763506176> 
;Need 40 supercookies to buy ring]]
$if[$message==slot;$if[$getVar[supercookie;$authorID;0]>=15;$setVar[supercookie;$authorID;$sub[$getVar[supercookie;$authorID];15]]
$setVar[slot;$authorID;$sum[$getVar[slot;$authorID];1]];Need 15 supercookies to buy a slot]]
$if[$message==swag;$if[$getVar[supercookie;$authorID;0]>=2;$setVar[supercookie;$authorID;$sub[$getVar[supercookie;$authorID];2]]
$setVar[swag;$authorID;$sum[$getVar[swag;$authorID];1]];Need 2 supercookies to buy swag potion]]
$if[$message==lootbox;$if[$getVar[supercookie;$authorID;0]>=15;$setVar[cookie;$authorID;$sub[$getVar[supercookie;$authorID];15]]
$setVar[lootbox;$authorID;$sum[$getVar[lootbox;$authorID];1]] <@$authorID> just successfully bought 1x lootbox <:lootbox:1165172569008259092> for 150 <:cookie:1165922372138848267> ;Need 15 supercookies to buy]]`,
    unprefixed: false

}
