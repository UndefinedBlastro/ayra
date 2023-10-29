module.exports = {
    name: "",
    type: "messageCreate",
    code:`$if[$channelID==983984426172178444;$let[rare;$randomNumber[0;31]]
    $if[$get[rare]==30;$sendMessage[$channelID;$title[Cookie Spawn] $description[Click on the button below to teke it!] $color[#c1baff] $addActionRow
    $addButton[cookiewinner;Click Here;Primary];]];]
   `,
    unprefixed: false

}
