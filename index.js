'use strict';

const xtb = require('xtb');
const tmi = require('tmi.js');

const InfoPlugin = require('./infoPlugin.js');

const auth = require('./auth.json');

const channel = 'eigenvektor';

const options = {
    options: {
        debug: true,
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: auth,
    channels: [channel],
};

const client = tmi.client(options);
const bot = new xtb(client, channel);

// load plugins
bot.loadPlugin(new InfoPlugin('!'));

bot.connect();