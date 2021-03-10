const initialState = {
	loading: false,
	errorMessage: ''
};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'Hello':
			return 'Hello';
		default:
			return state;
	}
};

export default dashboardReducer;
