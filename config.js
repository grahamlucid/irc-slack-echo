module.exports = {
  slack: {
    host: 'my.slack.com',
    incomingWebhookToken: 'your incoming webhook token',
    echoChannel: '#irc-echo',
    botName: 'IRCBot'
  },
  irc: {
    server: 'your.irc.net',
    port:'6697',
    nick: 'slackbot',
    channel: '#mychan',
    username:'user.name',
    password:'password'
  },

  userMap: {
    irc_username: "slack_username"
  }
};
