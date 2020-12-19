import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import { TransactionsContext } from '../../Contexts/TransactionsContext';
import { TRANSACTIONS_ACTIONS } from '../../Reducers/TransactionsReducer';

export default function TransactionsTable() {
	const { transactions, dispatch, setTransactionsSelected, setCurrentIndex } = useContext(TransactionsContext);
	const [ rows, setRows ] = useState([]);

	const columns = [
		{ field: 'date', headerName: 'Date', width: 120 },
		{ field: 'description', headerName: 'Description', width: 350 },
		{ field: 'category', headerName: 'Category', width: 200 },
		{ field: 'amount', headerName: 'Amount', width: 100 },
		{ field: 'company', headerName: 'Company', width: 180 }
	];

	useEffect(
		() => {
			async function getTransactions() {
				try {
					const response = await axios('http://localhost:1337/transactions');

					dispatch({
						type: TRANSACTIONS_ACTIONS.GET_TRANSACTIONS,
						payload: response.data
					});
				} catch (error) {
					console.log(error);
				}
			}

			getTransactions();
		},
		[ dispatch ]
	);

	useEffect(
		() => {
			async function populateTable() {
				const rows = transactions.transactions.map((transaction) => ({
					id: transaction.id,
					date: transaction.transaction_date,
					description: transaction.transaction_description,
					category: transaction.transaction_category.name,
					amount: transaction.transaction_amount,
					company: transaction.transaction_company
				}));
				return setRows(rows);
			}
			populateTable();
		},
		[ transactions ]
	);

	return (
		<div style={{ height: 400, width: '80%', margin: 'auto' }}>
			{transactions.isLoading ? (
				'Loading...'
			) : (
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					checkboxSelection
					onSelectionChange={(newSelection) => {
						if (newSelection.rowIds.length) {
							setCurrentIndex(0);
						}
						setTransactionsSelected(newSelection);
					}}
				/>
			)}
		</div>
	);
}
