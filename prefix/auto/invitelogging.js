module.exports = {
    name: "",
    type: "guildMemberAdd",
    code:`  $sendMessage[997925040601452564;$title[ $username joined <a:exclamation_mark:1160909279788810322>] $description[
        $username joined $if[$inviterID==;;invited by <@$inviterID> using $inviterCode]]
        $color[#c1baff] ]`,
    unprefixed: false

}
