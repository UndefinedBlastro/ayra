module.exports = {
data: {
        name: "setup-custom-board",
        description: "Configures Custom-Board For This Server",
        type: 1,
        options: [
            {
                name: "emoji",
                autocomplete: false,
                type: 3,
                required: true,
                description: "Only 1 Emoji Is Allowed OtherWise Won't Work",
            },
{
name: "channel",
autocomplete: false,
type: 7,
required: true,
description: "Channel",
},

        ],
    },
    code: `$onlyIf[$hasPerms[$guildID;$authorID;ModerateMembers];$author[$username;$userAvatar] $title[卂ㄥ卩卄卂] $description[You Need ModerateMembers Permission In-Order To Use This Command] $color[c1baff]]
$setVar[staremoji;$guildID;$option[emoji]] $setVar[starchannel;$guildID;$option[channel]] $author[$username;$userAvatar] $title[卂ㄥ卩卄卂] $addField[Setup $option[emoji];Star-Board Successfully Configured;false] $color[c1baff]`
}
