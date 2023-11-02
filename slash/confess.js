module.exports = {
    data: {
       name: "confess",
       description: "Sends a annonymous confession",
       type: 1,
      options: [
          {
       "type": 3,
       "name": "confession",
       "description": "confession message",
       "choices": [],
       "required": true
     },       
   ]
    },
    code: `
    $try[$sendMessage[$channelID[₪︱confessions];$title[Anonymous Confession] $description[$option[confession]] $footer[❗ If this confession is ToS-breaking or overtly hateful, you can report it to staff] $color[Random]];$ephemeral exceed max characters limit]
    `
 }
