// Requirements
const { readdirSync } = require('fs');
const { resolve } = require('path');

const eventsPath = resolve(process.cwd(), 'events');

/** JSDOCS
 * @param {import('discord.js').Client} client
 */

// Event handler
module.exports.handle = (client) => {
	// Makes sure the called files are .js files from the events folder
	// And iterates over it with a "for" loop
	for (const eventFile of readdirSync(eventsPath).filter((eventFile) => eventFile.endsWith('.js'))) {
		// Requires the event
		const event = require(`${eventsPath}/${eventFile}`);

		// Attach the event to the client
		// And bind the required arguments to the event (args)
		client.on(eventFile.split('.').shift(), event.bind(null, client));
	}
};
