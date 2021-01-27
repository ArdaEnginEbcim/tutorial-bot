const chalk = require('chalk');
const Discord = require('discord.js');
const Meska = require('meska.js');
const log = require('./src/utils/log');
const client = new Discord.Client();
const Commands = new Meska.Handler.Command('src/commands');
const Events = new Meska.Handler.Event('src/events');
require('dotenv').config()

client.login(process.env.TOKEN).then(
    function() {
        Events.load(client);
        Commands.load(client);
        client.on('message' async(message) => {
            Commands.message(message, { prefix: process.env.PREFIX, owner: process.enc.OWNERID })
        }
        console.log(log.success + chalk.green('TOKEN ' + ' - ' + 'works successfully!'));
    },
    function(err) {
        console.log(log.error + chalk.red('TOKEN ' + ' - ' + err));
        setInterval(function() {
          process.exit(0);
        }, 20000);
    }
);
