import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	flex: {
		display: 'flex',
		justifyContent: 'flex-end'
	}
});

function AccountsTotal() {
	const classes = useStyles();
	return (
		<Grid container alignItems="center">
			<Grid item xs={6}>
				<Typography variant="subtitle1">All accounts</Typography>
				<Typography variant="subtitle2">All transactions</Typography>
			</Grid>
			<Grid item xs={6} className={classes.flex}>
				<Typography variant="button">$15,718.90</Typography>
			</Grid>
		</Grid>
	);
}

export default AccountsTotal;
