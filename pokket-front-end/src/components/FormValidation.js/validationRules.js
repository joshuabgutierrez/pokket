export const transactionRules = {
	transactionName: {
		required: '* Required Field',
		pattern: {
			value: /[A-Za-z]/g,
			message: '* Incorrect Name'
		}
	},
	transactionAmount: {
		required: '* Required Field',
		pattern: {
			value: /^[1-9]\d*(\.\d+)?$/,
			message: 'Only numbers allowed'
		}
	},
	transactionCategory: {
		required: '* Required Field'
	},
	transactionSubcategory: {
		required: '* Required Field'
	},
	transactionReceiver: {
		required: '* Required Field',
		pattern: {
			value: /[A-Za-z1-9]/g,
			message: '* Incorrect Input'
		}
	}
};

export const budgetRules = {
	budgetCategory: {
		required: '* Required Field'
	},
	budgetSubcategory: {
		required: '* Required Field'
	},
	budgetAmountLimit: {
		required: '* Required Field',
		pattern: {
			value: /^[1-9]\d*(\.\d+)?$/,
			message: '* Incorrect Amount'
		}
	}
};

export const billRules = {
	billName: {
		required: '* Required Field',
		pattern: {
			value: /(?!^\d+$)^.+$/g,
			message: '* Incorrecct Input'
		}
	},
	billAmount: {
		required: '* Required Field',
		pattern: {
			value: /^[1-9]\d*(\.\d+)?$/,
			message: 'Only numbers allowed'
		}
	},
	paymentReceiver: {
		required: '* Required Field',
		pattern: {
			value: /[A-Za-z]/g,
			message: '* Incorrect Name'
		}
	},
	category: {
		required: '* Required Field'
	},
	subCategory: {
		required: '* Required Field'
	}
};

export const goalRules = {
	goalName: {
		required: '* Required Field',
		pattern: {
			value: /[A-Za-z]/g,
			message: 'Incorrect Input'
		}
	},
	goalAmount: {
		required: '* Required Field',
		pattern: {
			value: /^[1-9]\d*(\.\d+)?$/,
			message: 'Only numbers allowed'
		}
	},
	goalAccount: {
		required: '* Required Field'
	}
};

export const accountRules = {
	accountName: {
		required: '* Required Field',
		pattern: {
			value: /[A-Za-z]/g,
			message: 'Only letters allowed'
		}
	},
	accountBank: {
		required: '* Required Field',
		pattern: {
			value: /[A-Za-z]/g,
			message: 'Not numbers allowed'
		}
	},
	accountNumber: {
		required: '* Required Field',
		pattern: {
			value: /\d{10,12}/g,
			message: '* Incorrect Format'
		}
	}
};
