const Discord = require("discord.js")
const embed = {
  "title": "Help Center",
  "description": "Need help? You will get it here.",
  "color": 7918847,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
    "text": "(DJS!help p # shows page / DJS!help 'content' shows the command info)"
  },
  "thumbnail": {
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/100px-Blue_question_mark_icon.svg.png"
  },
  "author": {
    "name": "Discourse.JS | Interactive Discord.JS Lessons",
    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
  },
  "fields": [
    {
      "name": "Page 1",
      "value": "‎"
    },
    {
      "name": "Lessons",
      "value": "Know how to start lessons!\n(**DJS!help lessons**)"
    },
    {
      "name": "Register",
      "value": "Registers your User ID your lessons are apart from others.\n(**DJS!help register**)"
    },
    {
      "name": "Next",
      "value": "Sends you Straight to the next Step in the lesson.\n(**DJS!help steps**)"
    }
  ]
};


module.exports.embed = embed