import { ReactComponent as AdmitIcon } from '../../assets/attendees/admit.svg'
import { ReactComponent as CheckInIcon } from '../../assets/attendees/checkin.svg'
import { ReactComponent as DeleteIcon } from '../../assets/attendees/delete.svg'

import { useState } from 'react'
import { Attendee } from '../../models/attendee'
import InputGroup from '../InputGroup'

/***
 * @return form to edit attendee details.
 */
export default function EditAttendee(props: { selectedAttendee: Attendee }) {
	const [attendee, setAttendee] = useState<Attendee>(props.selectedAttendee);
	return (
		<>
			<span className="h-[1.5px] m-0 p-0 w-full bg-gray-200"></span>
			<div className="grid h-full  grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 items-center justify-start">
				<div className="flex items-center h-full p-4 justify-start flex-col gap-4">
					<div className="text-[28px] font-bold text-popup-heading">
						Attendee Details
					</div>
					<InputGroup
						value={attendee.firstName ?? ''}
						label={'First Name'}
						setValue={(updatedValue) => {
							setAttendee((attendee) => ({
								...attendee,
								firstName: updatedValue,
							}))
						}}
					/>

					<InputGroup
						value={attendee.lastName ?? ''}
						label={'First Name'}
						setValue={(updatedValue) => {
							setAttendee((attendee) => ({
								...attendee,
								lastName: updatedValue,
							}))
						}}
					/>

					<InputGroup
						value={attendee.email ?? ''}
						label={'Email'}
						setValue={(updatedValue) => {
							setAttendee((attendee) => ({
								...attendee,
								email: updatedValue,
							}))
						}}
					/>

					<InputGroup
						value={attendee.discord ?? ''}
						label={'Discord'}
						setValue={(updatedValue) => {
							setAttendee((attendee) => ({
								...attendee,
								discord: updatedValue,
							}))
						}}
					/>

					<InputGroup
						value={attendee.school ?? ''}
						label={'School'}
						setValue={(updatedValue) => {
							setAttendee((attendee) => ({
								...attendee,
								school: updatedValue,
							}))
						}}
					/>
				</div>
				<div
					className={
						'w-full h-full flex flex-col items-center justify-center p-2 rounded-lg shadow-sm bored-r-8 gap-6'
					}
				>
					<button className="bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						<AdmitIcon />
						Admit Participant
					</button>
					<button className="bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						<CheckInIcon />
						Check-in Participant
					</button>
					<button className="bg-red-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						<DeleteIcon />
						Delete Participant
					</button>
				</div>
			</div>
		</>
	)
}
