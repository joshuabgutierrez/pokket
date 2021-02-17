'use strict';

const { sanitizeEntity } = require('strapi-utils');
const { create } = require('../../goals/controllers/goals');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

function filterResponse(data) {
	const filteredData = {
		account_id: data.id,
		account_name: data.account_name,
		account_bank: data.account_bank,
		account_number: data.account_number,
		account_balance: data.account_balance,
		account_type: data.account_type.account_type_name
	};

	return filteredData;
}

module.exports = {
	async find(ctx) {
		const user = ctx.state.user;

		if (!user) {
			ctx.badRequest({ message: 'Your credentials are wrong' });
		}

		let entities = await strapi.services.accounts.find({ account_user: user.id });

		if (!entities) {
			return ctx.notFound();
		} else {
			return entities.map((entity) => {
				const account = sanitizeEntity(entity, {
					model: strapi.models.accounts
				});

				return filterResponse(account);
			});
		}
	},

	async create(ctx) {
		let entity = await strapi.services.accounts.create(ctx.request.body);

		return sanitizeEntity(filterResponse(entity), { model: strapi.models.accounts });
	},

	async update(ctx) {
		const { id } = ctx.params;

		let entity = await strapi.services.accounts.update({ id }, ctx.request.body);

		console.log(entity);

		return sanitizeEntity(filterResponse(entity), { model: strapi.models.accounts });
	}
};
