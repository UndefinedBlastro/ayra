module.exports = {
    name: "banner",
    type: "messageCreate",
    code: ` $if[$userBanner[$mentioned[0;true]]==;$sendMessage[$channelID;$title[User Banner] $description[No banner found]

$footer[🖼 Banner Fetched | $timestamp] $color[#c1baff]$author[🖼 Banner Tool]];$sendMessage[$channelID;$title[User Banner] $image[$userBanner[$mentioned[0;true]]]
 $footer[🖼 Banner Fetched | $timestamp] $color[#c1baff]$author[🖼 Banner Tool]
$addActionRow
    $addButton[$userBanner[$mentioned[0;true]];Avatar Link;Link]]]`
}
