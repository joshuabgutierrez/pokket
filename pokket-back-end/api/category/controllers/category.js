'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
	// Delete properties from object that are not needed by the front end
	filterEntries(category) {
		const keysToRemove = [ 'published_at', 'created_at', 'updated_at' ];

		keysToRemove.forEach((key) => {
			delete category[key];
		});

		return category.subcategories.map((entry) => ({
			id: entry['id'],
			subcategory_name: entry['subcategory_name'],
			category: entry['category']
		}));
	},

	async find(ctx) {
		let entities;

		if (ctx.query._q) {
			entities = await strapi.services.category.search(ctx.query);
		} else {
			entities = await strapi.services.category.find(ctx.query);
		}

		return entities.map((entity) => {
			const category = sanitizeEntity(entity, {
				model: strapi.models.category
			});

			category.subcategories = this.filterEntries(category);

			if (category.subcategory) {
				delete category.subcategory;
			}
			return category;
		});
	},

	async findOne(ctx) {
		const { id } = ctx.params;

		const entity = await strapi.services.category.findOne({ id });
		const category = sanitizeEntity(entity, {
			model: strapi.models.category
		});

		return this.filterEntries(category);
	}
};
