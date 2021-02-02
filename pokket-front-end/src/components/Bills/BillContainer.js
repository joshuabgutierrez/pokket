import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

const StyledBillContainer = styled.div`margin: 2em 0;`;

const useStyles = makeStyles((theme) => ({
	flex: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
			marginTop: '0.5em'
		}
	}
}));

function BillContainer() {
	const classes = useStyles();
	return (
		<StyledBillContainer>
			<Grid container>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<Typography variant="subtitle2">Spotify Premium Membership</Typography>
					<Typography variant="h5">$19.99</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6} className={classes.flex}>
					<Button size="small" variant="contained">
						Pay Now
					</Button>
				</Grid>
			</Grid>
		</StyledBillContainer>
	);
}

export default BillContainer;
