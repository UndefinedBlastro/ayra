module.exports = {
    name: "converts2c",
    type: "messageCreate",
    code:`$if[$getVar[supercookie;$authorID;0]>=1;$setVar[supercookie;$authorID;$sub[$getVar[supercookie;$authorID];1]]
$setVar[cookie;$authorID;$sum[100;$getVar[cookie;$authorID]]];Need atleast 1 supercookie to convert]`,
    unprefixed: true

}
