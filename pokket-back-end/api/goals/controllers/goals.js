'use strict';

const { sanitizeEntity } = require('strapi-utils');
const { find, create } = require('../../transaction/controllers/transaction');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

function filterResponse(data, userId) {
	const filteredData = {
		goal_name: data.goal_name,
		goal_projected_date: data.goal_projected_date,
		goal_amount: data.goal_amount,
		goal_current_amount: data.goal_current_amount,
		goal_is_complete: data.goal_is_complete,
		goal_contribution_frequency: data.goal_contribution_frequency,
		goal_contribution_amount: data.goal_contribution_amount,
		goal_user: userId
	};

	return filteredData;
}

module.exports = {
	async find(ctx) {
		const user = ctx.state.user;

		if (!user) {
			ctx.badRequest({ message: 'Your credentials are wrong' });
		}

		let entities = await strapi.services.goals.find({
			goal_user: user.id
		});

		if (!entities) {
			return ctx.notFound();
		} else {
			return entities.map((entity) => {
				const goal = sanitizeEntity(entity, {
					model: strapi.models.goals
				});

				return filterResponse(goal);
			});
		}
	},
	async create(ctx) {
		let entity = await strapi.services.goals.create(ctx.request.body);

		return sanitizeEntity(filterResponse(entity, ctx.state.user.id), { model: strapi.models.goals });
	}
};
