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

		let entities = await strapi.services.transaction.find({ transaction_user: user.id });

		if (!entities) {
			return ctx.notFound();
		} else {
			return entities.map((entity) => {
				const transaction = sanitizeEntity(entity, {
					model: strapi.models.transaction
				});

				function transactionSubcategory(subcategory) {
					if (subcategory !== null) {
						const filteredSubcategory = {
							id: subcategory['id'],
							subcategory_name: subcategory['subcategory_name']
						};
						return filteredSubcategory;
					}
					return null;
				}

				const filteredTransaction = {
					id: transaction['id'],
					transaction_name: transaction['transaction_name'],
					transaction_receiver: transaction['transaction_receiver'],
					transaction_amount: transaction['transaction_amount'],
					transaction_date: transaction['transaction_date'],
					transaction_category: {
						id: transaction.transaction_category['id'],
						category_name: transaction.transaction_category['category_name']
					},
					transaction_subcategory: transactionSubcategory(transaction.transaction_subcategory)
				};

				return filteredTransaction;
			});
		}
	},
	async create(ctx) {
		let entity = await strapi.services.transaction.create(ctx.request.body);

		const filteredEntity = {
			id: entity['id'],
			transaction_name: entity['transaction_name'],
			transaction_receiver: entity['transaction_receiver'],
			transaction_amount: entity['transaction_amount'],
			transaction_date: entity['transaction_date'],
			transaction_category: {
				id: entity.transaction_category['id'],
				category_name: entity.transaction_category['category_name']
			},
			transaction_subcategory: {
				id: entity.transaction_subcategory['id'],
				category_name: entity.transaction_subcategory['subcategory_name']
			},
			transaction_user: ctx.state.user.id
		};

		return sanitizeEntity(filteredEntity, { model: strapi.models.transaction });
	},
	async delete(ctx) {
		const { id } = ctx.params;

		const entity = await strapi.services.transaction.delete({ id });

		const deletedEntity = {
			id: entity['id']
		};

		return sanitizeEntity(deletedEntity, { model: strapi.models.transaction });
	}
};
