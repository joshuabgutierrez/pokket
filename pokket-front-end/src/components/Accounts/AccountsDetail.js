import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import AccountsTotal from './AccountsTotal';

const useStyles = makeStyles({
	root: {
		boxShadow: 'none',
		padding: 0,
		margin: 0
	},
	resetPadding: {
		padding: 0
	}
});

function AccountsDetails() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<Grid container alignItems="center">
			<Grid item xs={12} sm={12} md={12} lg={12}>
				<Accordion
					expanded={expanded === 'panel2'}
					onChange={handleChange('panel2')}
					classes={{ root: classes.root }}
				>
					<AccordionSummary
						aria-controls="panel1d-content"
						id="panel1d-header"
						classes={{ root: classes.root }}
					>
						<AccountsTotal />
					</AccordionSummary>
					<AccordionDetails className={classes.resetPadding}>
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Typography variant="subtitle2">Account Number: 1234-1234-1234</Typography>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Button size="small" variant="outlined">
									Edit Account
								</Button>
							</Grid>
						</Grid>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Grid>
	);
}

export default AccountsDetails;
