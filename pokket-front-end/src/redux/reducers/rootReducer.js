import { combineReducers } from 'redux';
import accountsReducer from './accountsReducer';
import billsReducer from './billsReducer';
import budgetReducer from './budgetReducer';
import dashboardReducer from './dashboardReducer';
import goalsReducer from './goalsReducer';
import transactionsReducer from './transactionsReducer';

const rootReducer = combineReducers({
	dashboard: dashboardReducer,
	transactions: transactionsReducer,
	budgets: budgetReducer,
	bills: billsReducer,
	goals: goalsReducer,
	accounts: accountsReducer
});

export default rootReducer;
