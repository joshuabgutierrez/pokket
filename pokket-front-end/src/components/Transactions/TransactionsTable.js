import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TransactionsTableHead from './TransactionsTableHead';
import TransactionsToolbar from './TransactionsToolbar';

function createData(date, transaction, category, amount, location) {
	return { date, transaction, category, amount, location };
}

const rows = [
	createData('1st Feb, 2021', 'Coffee', 'Shopping', 67.45, 'Starbucks'),
	createData('2nd Feb, 2021', 'Gym Membership', 'Health & Fitness', 50, `Gold's Gym`),
	createData('3rd Feb, 2021', 'Groceries', 'Food & Dining', 24.99, 'Aldi'),
	createData('4th Feb, 2021', 'Gift Card', 'Other', 25, 'Hyvee'),
	createData('5th Feb, 2021', 'Loan Payment', 'Auto & Transport', 32.4, 'Wells Fargo'),
	createData('6th Feb, 2021', 'Mortgage', 'Home', 1200, 'US Bank'),
	createData('7th Feb, 2021', 'Rent', 'Home', 37, 'NA'),
	createData('8th Feb, 2021', 'Dining', 'Food & Dining', 94, 'AppleBee'),
	createData('9th Feb, 2021', 'Date', 'Other', 65, 'NA'),
	createData('10th Feb, 2021', 'Netflix Subscription', 'Entertainment', 98, 'Netflix'),
	createData('11th Feb, 2021', 'Spotify Subscription', 'Entertainment', 81, 'Spotify'),
	createData('12th Feb, 2021', 'Gas', 'Auto & Transport', 9, 'QuikTrip'),
	createData('13th Feb, 2021', 'Water Bill', 'Bills & Utiities', 63, 'Water Works')
];

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [ el, index ]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2)
	},
	table: {
		minWidth: 750
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1
	}
}));

export default function TransactionsTable() {
	const classes = useStyles();
	const [ order, setOrder ] = React.useState('asc');
	const [ orderBy, setOrderBy ] = React.useState('');
	const [ selected, setSelected ] = React.useState([]);
	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(5);

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.transaction);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const isSelected = (name) => selected.indexOf(name) !== -1;

	const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<TransactionsToolbar numSelected={selected.length} />
				<TableContainer>
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size="medium"
						aria-label="enhanced table"
					>
						<TransactionsTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row, index) => {
									const isItemSelected = isSelected(row.transaction);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.transaction)}
											role="checkbox"
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.date}
											selected={isItemSelected}
										>
											<TableCell padding="checkbox">
												<Checkbox
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</TableCell>
											<TableCell component="th" id={labelId} scope="row" padding="none">
												{row.date}
											</TableCell>
											<TableCell align="right">{row.transaction}</TableCell>
											<TableCell align="right">{row.category}</TableCell>
											<TableCell align="right">{row.amount}</TableCell>
											<TableCell align="right">{row.location}</TableCell>
										</TableRow>
									);
								})}
							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[ 5, 10, 25 ]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
}
