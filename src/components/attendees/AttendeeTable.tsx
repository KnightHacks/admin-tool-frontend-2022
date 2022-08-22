import React, { useState } from 'react';
import AttendeeRow from './AttendeeRow';
import { Attendee } from '../../interfaces/Attendee';
import { ReactComponent as FilterIcon } from '../../assets/Attendees/filter.svg';
import { ReactComponent as SortIcon } from '../../assets/Attendees/sort.svg';
import './styles.css';

/**
 * Creation of the Attendee Table component for the Attendee page. The filter for the Attendee Table will be applied here to display the corresponding hackers.
 * @returns the table of selected hackathon attendees.
 */
export default function AttendeeTable() {
	const attendeeData = [];

	const [namesAscending, setNamesAscending] = useState(false);

	let person1: Attendee = {
		firstName: 'Jane Jane',
		lastName: 'Doe',
		email: 'email@domain.com',
		discord: 'discord#1234',
		oAuth: 'email',
		school: 'University of Central Florida',
		isAccepted: false,
		isConfirmed: true,
		isCheckedIn: true,
		userLink: 'https://google.com',
		id: '1',
		pronouns: {
			subjective: 'she/her',
			objective: 'she/her',
		},
		phoneNumber: 'num',
		age: 12,
		role: 'attendee',
	};
	// Remove after adding APIs
	for (var i = 0; i < 10; i++) {
		attendeeData.push(person1);
	}

	return (
		<table className="w-full border-collapse border-spacing-0">
			<tr>
				<th>
					{' '}
					<div id="nameContent">
						{' '}
						<text> Name </text>
						{!namesAscending ? (
							<button>
								<SortIcon id="ascendingSort" />
							</button>
						) : (
							<button>
								<SortIcon id="descendingSort" />
							</button>
						)}
					</div>{' '}
				</th>
				<th> Email </th>
				<th> Discord </th>
				<th> Auth </th>
				<th> School </th>
				<th> Accepted </th>
				<th> Confirmed </th>
				<th> Checked In </th>
				<th id="filterIcon" className="">
					<div className=" flex w-full justify-end align-center">
						<FilterIcon />{' '}
					</div>
				</th>
			</tr>
			{attendeeData.map((attendee) => {
				return <AttendeeRow attendee={attendee} />;
			})}
		</table>
	);
}