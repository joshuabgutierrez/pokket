import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const state = {
	labels: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ],
	datasets: [
		{
			label: 'Expenses',
			fill: false,
			lineTension: 0.5,
			borderColor: 'edeef1',
			pointRadius: 4,
			pointBackgroundColor: '#e51e2b',
			pointBorderColor: '#fff',
			borderWidth: 4,
			data: [ 100, 200, 250, 150, 800, 220, 190 ]
		}
	]
};

const ExpensesChartContainer = styled.div`
	border-radius: 10px;
	background-color: #007ee3;
	padding: 1em 0;
`;

export default function ExpensesChart() {
	return (
		<ExpensesChartContainer>
			<Line
				data={state}
				options={{
					title: {
						display: true,
						text: 'Expenses',
						fontSize: 20,
						fontColor: '#fff',
						fontStyle: 'normal',
						fontFamily: 'Roboto'
					},
					responsive: true,
					legend: {
						display: false
					},
					scales: {
						xAxes: [
							{
								display: true,
								gridLines: {
									display: false
								},
								ticks: {
									fontColor: '#fff'
								}
							}
						],
						yAxes: [
							{
								display: false
							}
						]
					}
				}}
			/>
		</ExpensesChartContainer>
	);
}
