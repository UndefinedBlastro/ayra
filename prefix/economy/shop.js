module.exports = {
    name: "shop",
    type: "messageCreate",
    code: `
    $sendMessage[$channelID;$title[Shop] $addField[<:supercookie:1165922365763506176> Convert: Cookies to Supercookies;
	Convert 200 <:cookie:1165922372138848267> to 1 <:supercookie:1165922365763506176>
	> 200 <:cookie:1165922372138848267>
	> .convertc2s
]
$addField[<:cookie:1165922372138848267> Convert: SuperCookies to cookies;Convert 1 <:supercookie:1165922365763506176> to 200 <:cookie:1165922372138848267>
	> 1 <:supercookie:1165922365763506176>
	> .converts2c]
$addField[ <:custom:1164951112340754453> Custom Command; Users can request for custom commands personalised for their likings. *Once in lifetime*
	> 300 <:supercookie:1165922365763506176>
	> .buy command]
$addField[  :ring: Ring: ;Consumable item used for marriage
	> 40 <:supercookie:1165922365763506176>
	> .buy ring]
$addField[ :person_with_veil: Marriage: ;adds a slot for marriage
	> 15 <:supercookie:1165922365763506176>
	> .buy slot]
$addField[ <:63753:1163116026754498560> Swag: ;Instantly makes you feel cool for 1 week
	> 2 <:supercookie:1165922365763506176>
	> .buy swag]
$addField[ <a:1156920631221289020:1164950404375793694> Force Nick;Change and lock nickname of anyone for 5 mins
	> 5 <:supercookie:1165922365763506176>
	> .buy fnick]
$addField[ <:6626purplegift:1165172569008259092> Lootbox:;Best way to gain Super Cookies
	> 15 <:supercookie:1165922365763506176>
	> .buy lootbox]
 $footer[Requested by $username;$userAvatar[$authorID]]$color[#c1baff]]
    `,
    unprefixed: false

}
