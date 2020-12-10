export const TRANSACTIONS_ACTIONS = {
	GET_TRANSACTIONS: 'get-transactions',
	ADD_TRANSACTION: 'add-transaction',
	UPDATE_TRANSACTION: 'update-transaction',
	DELETE_TRANSACTION: 'delete-transaction'
};

export default function TransactionsReducer(transactions, action) {
	switch (action.type) {
		case TRANSACTIONS_ACTIONS.GET_TRANSACTIONS:
			return {
				...transactions,
				isLoading: false,
				transactions: action.payload
			};
		default:
			return transactions;
	}
}
