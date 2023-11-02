module.exports = {
  code: `$function[

$onlyIf[$and[$charCount[$option[seconds]]<=3;$charCount[$option[seconds]]>=1]==true;$title[Error]
$description[Please pick a number in-between 1 and 999]]

$if[$charCount[$option[seconds]]==2;
$let[num;$option[seconds]]
$let[msgid;$sendMessage[$channelID;$title[$get[num]];true]]
$while[$checkContains[$get[num];-]==false;
$editMessage[$channelID;$get[msgid];$title[$get[num]]]
$wait[2000]
$let[num;$sub[$get[num];2]]
]
$wait[1]
$sendMessage[$channelID;$reply[$channelID;$get[msgid]] <@$authorID> countdown finished!]]

$if[$charCount[$option[seconds]]==3;
$let[num;$option[seconds]]
$let[msgid;$sendMessage[$channelID;$title[$get[num]];true]]
$while[$checkContains[$get[num];-]==false;
$editMessage[$channelID;$get[msgid];$title[$get[num]]]
$wait[10000]
$let[num;$sub[$get[num];10]]
]
$wait[1]
$sendMessage[$channelID;$reply[$channelID;$get[msgid]] <@$authorID> countdown finished!]]

]`,
  
data: {
"name": "count",
"description": "Start a countdown",
"options": [
  {
    "type": 10,
    "name": "seconds",
    "description": "Seconds to countdown",
   "choices": [],
  }
]
}
}