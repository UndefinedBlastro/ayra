module.exports = {
    data: {
       name: "suggest",
       description: "makes a server suggestion",
       type: 1,
      options: [
         {
       "type": 3,
       "name": "suggestion",
       "description": "suggestion message",
       "choices": [],
       "required": true
        },       
   ]
    },
    code: `
   $let[msgid;$sendMessage[$channelID[♡︱suggestion];$title[Suggestion from $username] $description[**$option[suggestion]**
   <a:An_blobsignyes:1005856511127461889> - Upvote | <a:An_blobsignno:1005856523701989506>- Downvote | <a:exclamation_mark:1160909279788810322> - Maybe] $footer[$username;$userAvatar[$authorID]] $thumbnail[$userAvatar[$authorID]]   $color[#c1baff];true]] $function[$addMessageReactions[1057886306702741584;$get[msgid];<a:An_blobsignyes:1005856511127461889>;<a:An_blobsignno:1005856523701989506>;<a:exclamation_mark:1160909279788810322>]]`
 }