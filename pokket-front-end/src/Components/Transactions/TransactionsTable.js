import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
	{ field: 'date', headerName: 'Date', width: 120 },
	{ field: 'description', headerName: 'Description', width: 250 },
	{ field: 'category', headerName: 'Category', width: 130 },
	{ field: 'amount', headerName: 'Amount', width: 100 }
];

const rows = [
	{ id: 1, date: '11/10/2020', description: 'Snow', category: 'Jon', amount: 35 },
	{ id: 2, date: '11/10/2020', description: 'Lannister', category: 'Cersei', amount: 42 },
	{ id: 3, date: '11/10/2020', description: 'Lannister', category: 'Jaime', amount: 45 },
	{ id: 4, date: '11/10/2020', description: 'Stark', category: 'Arya', amount: 16 },
	{ id: 5, date: '11/10/2020', description: 'Targaryen', category: 'Daenerys', amount: 200 },
	{ id: 6, date: '11/10/2020', description: 'Melisandre', category: 'Hannah', amount: 150 },
	{ id: 7, date: '11/10/2020', description: 'Clifford', category: 'Ferrara', amount: 44 },
	{ id: 8, date: '11/10/2020', description: 'Frances', category: 'Rossini', amount: 36 },
	{ id: 9, date: '11/10/2020', description: 'Roxie', category: 'Harvey', amount: 65 },
	{ id: 10, date: '11/10/2020', description: 'Gutierrez', category: 'Joshua', amount: 20 },
	{ id: 11, date: '11/10/2020', description: 'Gilbert', category: 'Emily', amount: 33 },
	{ id: 12, date: '11/14/2020', description: 'White', category: 'Jason', amount: 16 },
	{ id: 13, date: '11/13/2020', description: 'Miller', category: 'Alice', amount: 54 }
];

export default function TransactionsTable() {
	return (
		<div style={{ height: 400, width: '70%', margin: 'auto' }}>
			<DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
		</div>
	);
}
