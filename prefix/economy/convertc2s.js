module.exports = {
    name: "convertc2s",
    type: "messageCreate",
    code:`$if[$getVar[cookie;$authorID;0]>=100;$setVar[cookie;$authorID;$sub[$getVar[cookie;$authorID];100]]
$setVar[supercookie;$authorID;$sum[1;$getVar[supercookie;$authorID]]];Need 100 cookie to convert]`,
    unprefixed: true

}
