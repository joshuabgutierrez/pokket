// Material-UI theme

import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: [ 'Nunito', 'sans-serif' ].join(','),
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		fontWeightBold: 700
	},
	palette: {
		secondary: {
			main: '#fff'
		}
	}
});

export default theme;
