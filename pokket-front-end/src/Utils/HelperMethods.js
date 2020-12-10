export function DateFormat(date) {
	const monthsOfYear = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	// Format December 9, 2020
	return `${monthsOfYear[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function ConvertToNumber() {
	return 'number';
}
