import React from 'react';
import { Pie } from 'react-chartjs-2';

const state = {
	labels: [
		'Entertainment',
		'Shopping',
		'Personal Care',
		'Health & Fitness',
		'Food & Dining',
		'Auto & Transport',
		'Travel',
		'Bills & Utilities',
		'Home',
		'Other'
	],
	datasets: [
		{
			label: 'Rainfall',
			backgroundColor: [
				'#ed9312',
				'#fd0266',
				'#4db25b',
				'#2275dd',
				'#ff5600',
				'#2215ea',
				'#1c75e3',
				'#4c85b3',
				'#0078ff',
				'#d42bcc'
			],
			hoverBackgroundColor: [ '#501800', '#4B5000', '#175000', '#003350', '#35014F' ],
			data: [ 5, 7, 12, 14, 11, 16, 10, 11, 4, 10 ]
		}
	]
};

export default function CategoriesSummaryChart() {
	return (
		<div>
			<Pie
				data={state}
				options={{
					title: {
						display: true,
						text: 'Percentage of spendings for each category',
						fontSize: 16
					},
					legend: {
						display: true,
						position: 'right'
					}
				}}
			/>

			{/* <Doughnut
				data={state}
				options={{
					title: {
						display: true,
						text: 'Average Rainfall per month',
						fontSize: 20
					},
					legend: {
						display: true,
						position: 'right'
					}
				}}
			/> */}
		</div>
	);
}
