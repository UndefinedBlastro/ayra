module.exports = {
    name: "fact",
    type: "messageCreate",
    code:`$addField[Facts <:noelleconfused:1137307456763088896>;$function[$httpRequest[https://api.popcat.xyz/fact;Get;l]] $env[l;fact]]$footer[$guildName[$guildID] | $timestamp;$guildIcon[$guildID]]$color[ca1bbf]$defer
    `,
    unprefixed: false

}
