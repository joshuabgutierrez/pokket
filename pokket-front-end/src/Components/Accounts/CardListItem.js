import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	primary: {
		fontWeight: 'bold',
		textAlign: 'right'
	}
});

function CardListItem() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ListItem button divider>
				<ListItemText primary="Card Name" />
				<ListItemText primary="Visa Classic" classes={{ primary: classes.primary }} />
			</ListItem>
		</React.Fragment>
	);
}

export default CardListItem;
