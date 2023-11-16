module.exports = {
    name: "convertc2s",
    type: "messageCreate",
    code:`$if[$getVar[cookie;$authorID;0]>=200;$setVar[cookie;$authorID;$sub[$getVar[cookie;$authorID];200]]
$setVar[supercookie;$authorID;$sum[1;$getVar[supercookie;$authorID]]];Need 200 cookie to convert]`,
    unprefixed: true

}
