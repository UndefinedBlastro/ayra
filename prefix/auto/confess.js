module.exports = {
    name: "",
    code: `
$onlyIf[$channelID==1050101769981657088]
$sendMessage[1050101769981657088;$title[Anonymous Confession] $description[$message] $footer[❗ If this confession is ToS-breaking or overtly hateful, you can report it to staff] $color[Random]] $sendMessage[1073175125538643988;$title[$username[$authorID] Confession] $description[$message]]`,
    type: "messageCreate",
    unprefixed: true
}
