var commando = require('discord.js-commando');

class about extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'other',
            memberName: 'about',
            description: 'This is a bot made by CallMehMiles#0807!'
        });
    }
async run(message, args){
    message.reply("This bot was made by CallMehMiles#0807 made with Atom and Discord Bot Maker.);
}

}
module.exports = about;
