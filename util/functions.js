/**
 *
 * @param {import('discord.js').PermissionString[]} perms
 */
module.exports.normalizePermissions = (perms) => {
	const missingPermissions = perms.map(
		(str) =>
			`\`${str
				.replace(/_/g, ' ')
				.toLowerCase()
				.replace(/\b(\w)/g, (char) => char.toUpperCase())}\``,
	);
	return missingPermissions.length > 1 ? `${missingPermissions.slice(0, -1).join(', ')} and ${missingPermissions.slice(-1)[0]}` : missingPermissions[0];
};
