const Winston = require('winston');

/**
 * InfoPlugin is a simple plugin that registers informative text commands with an xtb instance.
 * It accepts a prefix argument to specify the starting character for each command.
 * InfoPlugin serves primarily as an example -- the functionality is trivial enough to write
 * without a plugin.
 * @param {string} prefix The prefix to use for commands. Usually a single character. Default is '!'.
 */
function InfoPlugin(prefix) {
    this.prefix = prefix || '!';
}

/**
 * Initialize registers some commands with the passed in instance of xtb.
 * @param {xtb} xtb The twitch bot to use for command registration and messaging.
 */
InfoPlugin.prototype.initialize = function(xtb) {
    const p = this.prefix;
    xtb.addTextCommand(`${p}rules`, 'Make everyone feel welcome!');
    xtb.addTextCommand(`${p}about`, 'Eigenspace is a chat bot created and maintained by Eigenvektor.');
    Winston.log('info', `InfoPlugin loaded with prefix ${p}`);
};

/**
 * Cleanup is normally intended to close connections or flush streams, but here
 * since there are no connections or streams to close, it just logs a message that
 * it's closing.
 */
InfoPlugin.prototype.cleanup = function() {
    // cleanup() can also accept an xtb argument, but such an argument is unnecessary here.
    Winston.log('info', 'InfoPlugin closing');
};

module.exports = InfoPlugin;