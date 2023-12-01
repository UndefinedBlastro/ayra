module.exports = {
    name: "hug",
    type: "messageCreate",
    code:`$if[$mentioned[0]!=;$arrayLoad[words;|;https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif
    |https://media.tenor.com/MD7_IG4CUVAAAAAC/bree-time.gif|https://media.tenor.com/Qe6rYPM-FMkAAAAC/prsk-pjsekai.gif|https://media.tenor.com/wUQH5CF2DJ4AAAAC/horimiya-hug-anime.gif|https://media.tenor.com/IvZMcBk26R8AAAAC/hug-anime.gif|https://media.tenor.com/DlzqcBxAZEcAAAAC/hug-love.gif]
    $title[$userDisplayName[$mentioned[0]], $userDisplayName[$authorID] hugs you] $image[$arrayAt[words;$math[$floor[$randomNumber[1;$arrayLength[words]]]]]]$color[ca1bbf];Please tag a user]`,
    unprefixed: false

}
