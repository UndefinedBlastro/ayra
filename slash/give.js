module.exports = {
    data: {
            name: "add-cookies",
            description: "Adds cookies to a user",
            type: 1,
            options: [
                {
                    name: "user",
                    autocomplete: false,
                    type: 6,
                    required: true,
                    description: "User",
                },
    
    {
                    name: "amount",
                    autocomplete: false,
                    type: 3,
                    required: true,
                    description: "Amount",
                },
            ],
        },
        code: `$if[$or[$authorID==963802964185735178;$authorID==1041432044338688201];$if[$isNumber[$option[amount]];Gave $option[amount] cookies To <@$option[user]> $setVar[cookie;$option[user];$sum[$option[amount];$getVar[cookie;$authorID;0]]];option amount is not a valid number]]`
    }