const chalk = require('chalk');
const Discord = require('discord.js');
const Meska = require('meska.js');
const log = require('./src/utils/log');
const client = new Discord.Client();
const Commands = global.commands = new Meska.Handler.Command(client);
const Events = new Meska.Handler.Event(client);
require('dotenv').config()

Events.folder('src/events');

Commands.prefix(process.env.PREFIX);
Commands.owner(process.env.AUTHOR_ID);
Commands.folder('src/commands');

client.login(process.env.TOKEN).then(
    function() {
        Events.load();
        Commands.load();
        console.log(log.success + chalk.green('TOKEN ' + ' - ' + 'works successfully!'));
    },
    function(err) {
        console.log(log.error + chalk.red('TOKEN ' + ' - ' + err));
        setInterval(function() {
          process.exit(0);
        }, 20000);
    }
);
