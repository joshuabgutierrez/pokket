const initialAccounts = {
	accounts: [],
	loading: false,
	errorMessage: ''
};

const accountsReducer = (state = initialAccounts, action) => {
	switch (action.type) {
		case 'Testing':
			return 'Testing';
		default:
			return state;
	}
};

export default accountsReducer;
