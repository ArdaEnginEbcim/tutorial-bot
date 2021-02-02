const chalk = require('chalk');
const Discord = require('discord.js');
const Meska = require('meska.js');
const log = require('./src/utils/log');
const config = require('./config/');
const client = new Discord.Client();
const Commands = new Meska.Handler.Command('src/commands');
const Events = new Meska.Handler.Event('src/events');
require('dotenv').config()

client.login(config.token).then(
    function() {
        Events.load(client);
        Commands.load(client);
        client.on('message' async(message) => {
            Commands.message(message, { prefix: config.prefix, owner: config.sahip })
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
