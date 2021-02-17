'use strict';

const { sanitizeEntity } = require('strapi-utils');
const { create } = require('../../transaction/controllers/transaction');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

function filterResults(response, userId) {
	const filteredResponse = {
		id: response.id,
		bill_name: response.bill_name,
		due_date: response.due_date,
		bill_amount: response.bill_amount,
		bill_payment_receiver: response.bill_payment_receiver,
		bill_was_paid: response.bill_was_paid,
		category: {
			id: response.category.id,
			category_name: response.category.category_name
		},
		subcategory: {
			id: response.subcategory.id,
			subcategory_name: response.subcategory.subcategory_name
		},
		bill_user: userId
	};
	return filteredResponse;
}

module.exports = {
	async find(ctx) {
		const user = ctx.state.user;

		if (!user) {
			ctx.badRequest({ message: 'Your credentials are wrong' });
		}

		let entities = await strapi.services.bills.find({
			bill_user: user.id
		});

		if (!entities) {
			return ctx.notFound();
		} else {
			return entities.map((entity) => {
				const bill = sanitizeEntity(entity, {
					model: strapi.models.bills
				});

				return filterResults(bill, ctx.state.user.id);
			});
		}
	},
	async create(ctx) {
		let entity = await strapi.services.bills.create(ctx.request.body);

		return sanitizeEntity(filterResults(entity, ctx.state.user.id), { model: strapi.models.bills });
	}
};
