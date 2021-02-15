'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	async find(ctx) {
		const user = ctx.state.user;

		if (!user) {
			ctx.badRequest({ message: 'Your credentials are wrong' });
		}

		let entities = await strapi.services.budget.find({
			budget_user: user.id
		});

		if (!entities) {
			return ctx.notFound();
		} else {
			return entities.map((entity) => {
				const budget = sanitizeEntity(entity, {
					model: strapi.models.budget
				});

				const { id, budget_goal_amount, budget_current_amount } = budget;

				const { id: category_id, category_name } = budget.category;
				const { id: subcategory_id, subcategory_name } = budget.subcategory;

				const filteredBudget = {
					id,
					budget_goal_amount,
					budget_current_amount,
					category: {
						category_id,
						category_name
					},
					subcategory: {
						subcategory_id,
						subcategory_name
					}
				};

				return filteredBudget;
			});
		}
	},
	async create(ctx) {
		let entity = await strapi.services.budget.create(ctx.request.body);

		const filteredEntity = {
			id: entity['id'],
			budget_category: entity.category['category_name'],
			budget_subcategory: entity.subcategory['subcategory_name'],
			budget_goal: entity.budget_goal_amount,
			budget_current_amount: entity.budget_current_amount,
			budget_user: ctx.state.user.id
		};

		return sanitizeEntity(filteredEntity, { model: strapi.models.budget });
	}
};
