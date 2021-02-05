import React from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AccountsTotal from './AccountsTotal';
import AccountsDetails from './AccountsDetail';

const useStyles = makeStyles({
	header: {
		backgroundColor: '#ddd'
	},
	flex: {
		display: 'flex',
		justifyContent: 'flex-end'
	}
});

function Main() {
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid container>
						<Grid item xs={6} sm={6} md={6} lg={6}>
							<Typography variant="h5">Your accounts</Typography>
						</Grid>
						<Grid item xs={6} sm={6} md={6} lg={6} className={classes.flex}>
							<Button size="small" variant="contained">
								Add Account
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					<Grid container justify="center" spacing={1}>
						<Grid item xs={12} sm={8} md={8} lg={8}>
							<AccountsTotal />
						</Grid>
						<Grid item xs={12} sm={8} md={8} lg={8}>
							<Grid container>
								<Grid item xs={12} sm={12} md={12} lg={12} className={classes.header}>
									<Typography variant="h6" align="center">
										Credit Cards
									</Typography>
								</Grid>
							</Grid>
							<AccountsDetails />
							<AccountsDetails />
						</Grid>
						<Grid item xs={12} sm={8} md={8} lg={8}>
							<Grid container>
								<Grid item xs={12} sm={12} md={12} lg={12} className={classes.header}>
									<Typography variant="h6" align="center">
										Debit Cards
									</Typography>
								</Grid>
							</Grid>
							<AccountsDetails />
							<AccountsDetails />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Main;
