module.exports = {
    name: "quote",
    type: "messageCreate",
    code:`$addField[Quotes <:StressedVertin:1179116748604186714>;$function[$httpRequest[https://api.popcat.xyz/quote;Get;l]] $env[l;quote]]$footer[$guildName[$guildID] | $timestamp;$guildIcon[$guildID]]$color[ca1bbf]$defer
    `,
    unprefixed: false

}
