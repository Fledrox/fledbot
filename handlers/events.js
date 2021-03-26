const { readdirSync } = require('fs');
const { resolve } = require('path');

const eventsPath = resolve(process.cwd(), 'events');

/**
 * @param {import('discord.js').Client} client
 */
module.exports.handle = (client) => {
	for (const eventFile of readdirSync(eventsPath).filter((eventFile) => eventFile.endsWith('.js'))) {
		const event = require(`${eventsPath}/${eventFile}`);

		client.on(eventFile.split('.').shift(), event.bind(null, client));
	}
};
