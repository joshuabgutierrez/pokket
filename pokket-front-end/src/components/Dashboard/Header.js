import { Button, ButtonGroup, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	flexbox: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	spacing: {
		marginRight: '1em'
	}
}));

function Header() {
	const classes = useStyles();
	return (
		<div>
			<Grid container>
				<Grid item xs={6}>
					<Typography variant="h6">Hey Mary!</Typography>
					<Typography variant="body2">Happy Wednesday! Let's get budgeting</Typography>
				</Grid>
				<Grid item xs={6} className={classes.flexbox}>
					<ButtonGroup disableElevation size="small" variant="contained">
						<Button color="primary" className={classes.spacing}>
							This Week
						</Button>
						<Button>This Month</Button>
					</ButtonGroup>
				</Grid>
			</Grid>
		</div>
	);
}

export default Header;
