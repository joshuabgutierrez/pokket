const initialBudgets = {
	budgets: [],
	loading: false,
	errorMessage: ''
};

const budgetReducer = (state = initialBudgets, action) => {
	switch (action.type) {
		case 'Testing':
			return 'Testing';
		default:
			return state;
	}
};

export default budgetReducer;
