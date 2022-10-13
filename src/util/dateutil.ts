import { Hackathon } from '../models/hackathon';

const allMonths = [
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
	'December',
];

export function getDateRangeString(hackathonData: Hackathon): string {
	const startMonth = hackathonData.startDate.getMonth();
	const endMonth = hackathonData.endDate.getMonth();
	return `${allMonths[startMonth]} ${hackathonData.startDate.getDate()} - ${
		startMonth !== endMonth ? allMonths[endMonth] + ' ' : ''
	}${hackathonData.endDate.getDate()}`;
}
