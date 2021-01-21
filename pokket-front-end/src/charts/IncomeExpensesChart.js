import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
	labels: [ 'September', 'October', 'November', 'December', 'January' ],
	datasets: [
		{
			label: 'Income',
			backgroundColor: '#25da4a',
			borderColor: '#25da4a',
			borderWidth: 2,
			data: [ 2000, 3500, 2005, 4000, 1300 ]
		},
		{
			label: 'Expenses',
			backgroundColor: '#f50a3d',
			borderColor: '#f50a3d',
			borderWidth: 2,
			data: [ 1200, 1300, 1400, 1439, 1800 ]
		}
	]
};

export default function IncomeExpensesChart() {
	return (
		<React.Fragment>
			<Bar
				data={state}
				options={{
					title: {
						display: true,
						text: 'Monthly Income and Expenses Summary',
						fontSize: 16
					},
					legend: {
						display: true,
						position: 'right'
					},
					maintainAspectRatio: true,
					responsive: true
				}}
			/>
		</React.Fragment>
	);
}
