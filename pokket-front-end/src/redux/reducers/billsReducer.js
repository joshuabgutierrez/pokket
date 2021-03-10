const initialBills = {
	bills: [],
	loading: false,
	errorMessage: ''
};

const billsReducer = (state = initialBills, action) => {
	switch (action.type) {
		case 'Testing':
			return 'Testing';
		default:
			return state;
	}
};

export default billsReducer;
