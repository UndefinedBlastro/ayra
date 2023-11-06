module.exports = {
    name: "2", // Not defining this creates a command that will be executed for every event fired of given type
    code: `$if[$authorID==963802964185735178;
$sendMessage[$channelID;$title[<a:exclamation_mark:1160909279788810322> About Ayra Cafe <a:exclamation_mark:1160909279788810322>]$description[Ayra Cafe came to life on October 17, 2022 as a cozy spot for coffee lovers and socializing. Our community celebrates those who embrace warmth, kindness, enjoyment, or a laid-back spirit, offering a secure and inclusive environment. <a:An_blobhearts:1005167440738660584> Our primary mission is to uphold a positive vibe where all members (barring trolls, of course) experience appreciation and are given a voice. Our aim is to foster a place where laughter, common passions, cherished memories, and enduring connections flourish! <:N_Heart:995707668469661776>

Here's to great company, delectable coffee, and the beginning of wonderful moments at Ayra Cafe. Let's make this a place where you feel right at home! 🥂] $color[#c1baff] $addActionRow
    $addButton[test1;About Us;Primary;<a:exclamation_mark:1160909279788810322>]
    $addButton[test2;Level and Perks;Secondary;<:1154395376242139186:1164951117566853140> ]
    $addButton[test3;Server Map;Success;<:1122075042403078234:1164951092975644773> ]
    $addButton[test4;FAQ;Danger;<:1154395949678985278:1164951097354498108> ]

]]`,
    type: "messageCreate" // The event to act on
}
