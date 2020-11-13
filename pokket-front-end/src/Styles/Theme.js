import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#007EE3'
		},
		secondary: {
			main: '#768591'
		}
	},

	typography: {
		fontFamily: [ 'Nunito', 'sans-serif' ].join(','),
		h4: {
			fontWeight: 700
		},
		subtitle2: {
			fontWeight: 700
		}
	},

	overrides: {
		MuiCssBaseline: {
			'@global': {
				a: {
					textDecoration: 'none',
					color: '#000',
					fontWeight: 800
				},
				p: {
					margin: 0
				}
			}
		}
	}
});

export default theme;
