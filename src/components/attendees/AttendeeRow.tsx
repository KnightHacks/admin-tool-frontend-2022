import { Attendee } from '../../models/attendee';
import AttendeeCheckBox from './AttendeeCheckBox';
import { ReactComponent as EmailIcon } from '../../assets/Attendees/google.svg';
import { ReactComponent as GoogleIcon } from '../../assets/Attendees/email.svg';
import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import './styles.css';

/**
 * @returns row for an attendee in the attendee table.
 */

export default function AttendeeRow(props: {
	popUp: {
		seenAttendeePopUp: boolean;
		selectedAttendee: Attendee;
		open: boolean;
	};
	attendee: Attendee;
	setOpen: (isOpen: boolean) => void;
}) {
	return (
		<>
			<td>{`${props.attendee.firstName} ${props.attendee.lastName}`}</td>
			<td> {props.attendee.email} </td>
			<td> {props.attendee.discord} </td>
			<td>
				{props.attendee.oAuth === 'email' ? (
					<div className="flex w-full justify-center align-center">
						<EmailIcon />
					</div>
				) : (
					<div className="flex w-full justify-center align-center">
						<GoogleIcon />
					</div>
				)}
			</td>
			<td> {props.attendee.school} </td>
			<td>
				<AttendeeCheckBox
					isChecked={props.attendee.isAccepted ?? false}
				/>
			</td>
			<td>
				<AttendeeCheckBox
					isChecked={props.attendee.isConfirmed ?? false}
				/>
			</td>
			<td>
				<AttendeeCheckBox
					isChecked={props.attendee.isCheckedIn ?? false}
				/>
			</td>
			<td>
				<button id="openUser" onClick={() => props.setOpen(true)}>
					<div id="openUserContent">
						<OpenIcon />
						Open User
					</div>
				</button>
			</td>
		</>
	);
}
