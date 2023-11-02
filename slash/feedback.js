module.exports = {
    data: {
       name: "feedback",
       description: "Sends a server feedback",
       type: 1,
      options: [
         {
       "type": 3,
       "name": "feedback",
       "description": "feedback message",
       "choices": [],
       "required": true
        },       
   ]
    },
    code: `
    $sendMessage[$channelID[♡︱feedback];$title[Feedback from $username] $description[$option[feedback]] $footer[$username;$userAvatar[$authorID]] $image[$guildBanner] $color[#c1baff]] $ephemeral Your feedback has been subbmitted!`
 }