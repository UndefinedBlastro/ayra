module.exports = {
    data: {
       name: "reminder",
       description: "creates a reminder",
       type: 1,
      options: [
          {
       "type": 3,
       "name": "reminder",
       "description": "reminder message",
       "choices": [],
       "required": true
     }, 
          
     {
       "type": 4,
       "name": "seconds",
       "description": "seconds",
       "choices": [],
       "required": true
     },
     {
       "type": 4,
       "name": "minutes",
       "description": "minutes"
     },
     {
       "type": 4,
       "name": "hours",
       "description": "hours"
     },
     {
       "type": 4,
       "name": "days",
       "description": "days"
     }
   ]
    },
    code: `$sendMessage[$channelID;$title[Reminder Set] $description[I've set your reminder! I'll remind you in$if[$option[days]!=;$option[days]day;]$image[https://i.imgur.com/SlNHuyY.png] $if[$option[hours]!=;$option[hours]hour;] $if[$option[minutes]!=;$option[minutes]min;]$option[seconds]sec] $footer[$username;$userAvatar[$authorID]]  $color[#c1baff]] $wait[$multi[1000;$sum[$option[seconds];$multi[60;$option[minutes]];$multi[3600;$option[hours]];$multi[86400;$option[days]]]]] $sendMessage[$dmChannelID[$authorID];$title[Reminder] $description[$option[reminder]] $color[#c1baff]]`
 }