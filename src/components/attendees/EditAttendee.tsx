import { ReactComponent as AdmitIcon } from '../../assets/Attendees/admit.svg';
import { ReactComponent as CheckInIcon } from '../../assets/Attendees/checkin.svg';
import { ReactComponent as DeleteIcon } from '../../assets/Attendees/delete.svg';

import { Attendee } from '../../models/attendee';

import { useState } from 'react';

/***
 * @return form to edit attendee details.
 */
export default function AttendeePopUp(props: { selectedAttendee: Attendee }) {
	const labelStyle = 'text-[22px] max-w-[350px] font-medium text-left w-3/4';

	const [attendee, setAttendee] = useState<Attendee>(props.selectedAttendee);
	const inputStyle =
		'w-3/4 max-w-[350px] p-2 bg-popup-input-bg border-solid border-popup-input-border border-[1px] rounded-lg shadow-sm bored-r-8 ';
	const inputGroupStyle = 'w-full flex flex-col items-center justify-start';
	const grayButtonStyle =
		'bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90';
	const redButtonStyle =
		'bg-red-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90';

	return (
		<>
			<span className="h-[1.5px] m-0 p-0 w-full bg-gray-200"></span>
			<div className="grid h-full  grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 items-center justify-start">
				<div className="flex items-center h-full p-4 justify-start flex-col gap-4">
					<div className="text-[28px] font-bold text-popup-heading">
						Attendee Details
					</div>

					<div className={inputGroupStyle}>
						<div className={labelStyle}> First Name </div>
						<input
							className={inputStyle}
							type={'text'}
							value={attendee.firstName}
							onChange={(e) => {
								setAttendee((attendee) => ({
									...attendee,
									firstName: e.target.value,
								}));
							}}
						/>
					</div>

					<div className={inputGroupStyle}>
						<div className={labelStyle}>Last Name</div>
						<input
							className={inputStyle}
							type={'text'}
							value={attendee?.lastName}
							onChange={(e) => {
								setAttendee((attendee) => ({
									...attendee,
									lastName: e.target.value,
								}));
							}}
						/>
					</div>

					<div className={inputGroupStyle}>
						<div className={labelStyle}> Email </div>
						<input
							className={inputStyle}
							type={'text'}
							value={attendee?.email}
							onChange={(e) => {
								setAttendee((attendee) => ({
									...attendee,
									email: e.target.value,
								}));
							}}
						/>
					</div>

					<div className={inputGroupStyle}>
						<div className={labelStyle}>Discord</div>
						<input
							className={inputStyle}
							type={'text'}
							value={attendee?.discord}
							onChange={(e) => {
								setAttendee((attendee) => ({
									...attendee,
									discord: e.target.value,
								}));
							}}
						/>
					</div>

					<div className={inputGroupStyle}>
						<div className={labelStyle}> School </div>
						<input
							className={inputStyle}
							type={'text'}
							value={attendee?.school}
							onChange={(e) => {
								setAttendee((attendee) => ({
									...attendee,
									school: e.target.value,
								}));
							}}
						/>
					</div>
				</div>
				<div
					className={
						'w-full h-full flex flex-col items-center justify-center p-2 rounded-lg shadow-sm bored-r-8 gap-6'
					}
				>
					<button className={grayButtonStyle}>
						<AdmitIcon />
						Admit Participant
					</button>
					<button className={grayButtonStyle}>
						<CheckInIcon />
						Check-in Participant
					</button>
					<button className={redButtonStyle}>
						<DeleteIcon />
						Delete Participant
					</button>
				</div>
			</div>
		</>
	);
}
