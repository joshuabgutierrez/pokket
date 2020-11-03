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
			borderColor: 'red',
			pointBackgroundColor: 'red',
			pointBorderColor: '#fff',
			borderWidth: 4,
			data: [ 100, 200, 250, 150, 800, 220, 190 ]
		}
	]
};

const ExpensesChartContainer = styled.div`
	/* background-color: #4357ad; */
	border: 1px solid #000;
	max-width: 370px;
	border-radius: 10px;
	margin-top: 1em;
	background-color: #4357ad;
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
