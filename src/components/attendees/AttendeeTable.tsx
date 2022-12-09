import { useState } from 'react';
import PopUp from '../PopUp';
import { Attendee } from '../../models/attendee';
import AttendeeRow from './AttendeeRow';
import AttendeeTableHeader from './AttendeeTableHeader';
import EditAttendee from './EditAttendee';
import Table from '../Table';

/**
 * Creation of the Attendee Table component for the Attendee page. The filter for the Attendee Table will be applied here to display the corresponding hackers.
 * @returns the table of selected hackathon attendees.
 */
export default function AttendeeTable() {
	const attendeeData: Array<Attendee> = []
	const [search, setSearch] = useState('')
	const [namesAscending, setNamesAscending] = useState(false)
	const [popUp, setPopUp] = useState<{
		seenAttendeePopUp: boolean
		selectedAttendee: Attendee
		open: boolean
	}>({
		seenAttendeePopUp: false,
		selectedAttendee: {},
		open: false,
	})

	let blankAttendee: Attendee = {
		firstName: 'Jane',
		lastName: 'Doe Doe',
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
	}
	// TODO: Remove after adding APIs
	for (var i = 0; i < 10; i++) {
		attendeeData.push({
			...blankAttendee,
			id: '' + i,
		})
	}

	return (
		<>
			{/* PopUp Component */}
			<PopUp
				open={popUp.open}
				setOpen={(isOpen) => {
					setPopUp((popUp) => ({
						...popUp,

						open: isOpen,
					}))
				}}
				headerContent={
					<div className=" text-popup-heading text-bold text-xl">
						{`${popUp.selectedAttendee.firstName} ${popUp.selectedAttendee.lastName}`}
					</div>
				}
				bodyContent={
					<EditAttendee selectedAttendee={popUp.selectedAttendee} />
				}
			></PopUp>
			{/* Search Component */}
			<div className="h-auto w-full px-5">
				<h1 className=" font-bold text-3xl text-subHeading-color mb-4">
					Attendees
				</h1>
				<input
					id="search"
					className="mb-8"
					type={'text'}
					placeholder="Search Attendees"
					onChange={(e) => {
						setSearch(e.target.value)
					}}
				/>
			</div>

			{/* Table Component */}
			<Table
				headerContent={
					<AttendeeTableHeader
						namesAscending={namesAscending}
						setNamesAscending={(namesAscending) => {
							setNamesAscending(namesAscending)
						}}
					/>
				}
				bodyContent={
					<>
						{attendeeData.map((attendee) => {
							return (
								<tr key={attendee.id}>
									<AttendeeRow
										key={attendee.id}
										attendee={attendee}
										popUp={popUp}
										setOpen={(isOpen) => {
											if (!popUp.seenAttendeePopUp) {
												setPopUp({
													seenAttendeePopUp: true,
													selectedAttendee: attendee,
													open: isOpen,
												})
											} else {
												setPopUp((popUp) => ({
													...popUp,
													selectedAttendee: attendee,
													open: isOpen,
												}))
											}
										}}
									/>
								</tr>
							)
						})}
					</>
				}
			></Table>
		</>
	)
}
