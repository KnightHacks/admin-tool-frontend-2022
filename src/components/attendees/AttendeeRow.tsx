import React from 'react';
import './styles.css';
import { Attendee } from '../../interfaces/Attendee';
import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import { ReactComponent as CheckedIcon } from '../../assets/Attendees/checked.svg';
import { ReactComponent as UncheckedIcon } from '../../assets/Attendees/unchecked.svg';
import { ReactComponent as EmailIcon } from '../../assets/Attendees/google.svg';
import { ReactComponent as GoogleIcon } from '../../assets/Attendees/email.svg';

/**
 * @returns row for an attendee in the attendee table.
 */

interface AttendeeObject {
	attendee: Attendee;
}
export default function AttendeeRow({ attendee }: AttendeeObject) {
	function getCheckBox(isChecked: boolean) {
		if (isChecked) {
			return <CheckedIcon />;
		}
		return <UncheckedIcon />;
	}
	return (
		<tr>
			<td>
				{attendee.firstName} {attendee.lastName}
			</td>
			<td> {attendee.email} </td>
			<td> {attendee.discord} </td>
			<td>
				{' '}
				{attendee.oAuth === 'email' ? (
					<div className=" flex w-full justify-center align-center">
						<EmailIcon />
					</div>
				) : (
					<div className=" flex w-full justify-center align-center">
						<GoogleIcon />
					</div>
				)}{' '}
			</td>
			<td> {attendee.school} </td>
			<td>
				<div className=" flex w-full justify-center align-center">
					{attendee.isAccepted ? <CheckedIcon /> : <UncheckedIcon />}
				</div>
			</td>
			<td>
				<div className=" flex w-full justify-center align-center">
					{attendee.isConfirmed ? <CheckedIcon /> : <UncheckedIcon />}
				</div>
			</td>
			<td>
				<div className=" flex w-full justify-center align-center">
					{attendee.isCheckedIn ? <CheckedIcon /> : <UncheckedIcon />}
				</div>
			</td>
			<td>
				{' '}
				<button id="openUser">
					{' '}
					<div id="openUserContent">
						<OpenIcon />
						<div> Open User </div>
					</div>
				</button>{' '}
			</td>
		</tr>
	);
}
