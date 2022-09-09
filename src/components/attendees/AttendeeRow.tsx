import './styles.css';
import { Attendee } from '../../models/attendee';
import AttendeeCheckBox from './AttendeeCheckBox';
import { ReactComponent as EmailIcon } from '../../assets/Attendees/google.svg';
import { ReactComponent as GoogleIcon } from '../../assets/Attendees/email.svg';
/**
 * @returns row for an attendee in the attendee table.
 */

interface AttendeeObject {
	attendee: Attendee;
}
export default function AttendeeRow({ attendee }: AttendeeObject) {
	return (
		<>
			<td>{`${attendee.firstName} ${attendee.lastName}`}</td>
			<td> {attendee.email} </td>
			<td> {attendee.discord} </td>
			<td>
				{attendee.oAuth === 'email' ? (
					<div className="flex w-full justify-center align-center">
						<EmailIcon />
					</div>
				) : (
					<div className="flex w-full justify-center align-center">
						<GoogleIcon />
					</div>
				)}
			</td>
			<td> {attendee.school} </td>
			<td>
				<AttendeeCheckBox isChecked={attendee.isAccepted ?? false} />
			</td>
			<td>
				<AttendeeCheckBox isChecked={attendee.isConfirmed ?? false} />
			</td>
			<td>
				<AttendeeCheckBox isChecked={attendee.isCheckedIn ?? false} />
			</td>
		</>
	);
}
