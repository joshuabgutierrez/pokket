const initialTransactions = {
	transactions: [
		{
			id: 1,
			transaction_date: '1st Feb, 2021',
			transaction_name: 'Coffee',
			transaction_category: 'Shopping',
			transaction_amount: 67.45,
			transaction_receiver: 'Starbucks'
		}
	],
	loading: false,
	errorMessage: ''
};

const transactionsReducer = (state = initialTransactions, action) => {
	switch (action.type) {
		case 'Testing':
			return 'Testing';
		default:
			return state;
	}
};

export default transactionsReducer;
