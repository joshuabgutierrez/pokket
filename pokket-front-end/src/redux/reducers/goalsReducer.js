const initialGoals = {
	goals: [],
	loading: false,
	errorMessage: ''
};

const goalsReducer = (state = initialGoals, action) => {
	switch (action.type) {
		case 'Testing':
			return 'Testing';
		default:
			return state;
	}
};

export default goalsReducer;
