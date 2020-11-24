import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md';
import Balance from '../DashboardContent/Balance';
import { Button, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import CardListItem from './CardListItem';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	heading: { marginRight: '10%', fontWeight: '900' },
	secondary: { flex: '50%', fontWeight: '900' }
});

export default function AccounInfo() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary expandIcon={<MdExpandMore />} aria-controls="panel1bh-content" id="panel1bh-header">
					<Typography className={classes.heading}>VISA</Typography>
					<Typography className={classes.secondary}>**** **** **** 2576</Typography>
					<Typography>$8,200.90</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container justify="center" spacing={2}>
						<Grid item xs={12} m={8} md={6} lg={4}>
							<Balance />
						</Grid>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<List component="nav" className={classes.root} aria-label="mailbox folders">
								<CardListItem />
								<ListItem button divider>
									<ListItemText primary="Account Number" />
									<ListItemText primary="1234 1234 1234 1234" />
								</ListItem>
								<ListItem button divider>
									<ListItemText primary="Card Number" />
									<ListItemText primary="**** **** **** 2576" />
								</ListItem>
								<ListItem button divider>
									<ListItemText primary="Cardholder" />
									<ListItemText primary="Mary Doe" />
								</ListItem>
								<ListItem button divider>
									<ListItemText primary="Expiration Date" />
									<ListItemText primary="12/2020" />
								</ListItem>
								<ListItem button>
									<ListItemText primary="Available Amount" />
									<ListItemText primary="8,200.90 USD" />
								</ListItem>
							</List>
						</Grid>
						<Grid item sm={12} md={12} lg={12}>
							<Button size="small" variant="contained">
								Edit Info
							</Button>
						</Grid>
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
