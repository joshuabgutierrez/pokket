import React from 'react';
import clsx from 'clsx';
import { IconButton, lighten, makeStyles, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { MdDelete as DeleteIcon } from 'react-icons/md';
import { BiFilter as FilterListIcon } from 'react-icons/bi';
import { FaEdit as EditIcon } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1)
	},
	highlight:
		theme.palette.type === 'light'
			? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85)
				}
			: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark
				},
	title: {
		flex: '1 1 100%'
	}
}));

export default function TransactionsToolbar(props) {
	const classes = useStyles();
	const { numSelected } = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			{numSelected > 0 ? (
				<Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
					{numSelected} selected
				</Typography>
			) : (
				<Typography className={classes.title} variant="h6" id="tableTitle" component="div">
					Recent Transactions
				</Typography>
			)}

			{numSelected > 0 ? (
				<React.Fragment>
					<Tooltip title="Edit">
						<IconButton aria-label="edit">
							<EditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Delete">
						<IconButton aria-label="delete">
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</React.Fragment>
			) : (
				<Tooltip title="Filter list">
					<IconButton aria-label="filter list">
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
}

TransactionsToolbar.propTypes = {
	numSelected: PropTypes.number.isRequired
};
