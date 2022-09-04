import React, { useState, useRef, Fragment } from 'react';
import AttendeeRow from './AttendeeRow';
import AttendeePopUp from './EditAttendee';
import { Attendee } from '../../models/attendee';
import { ReactComponent as FilterIcon } from '../../assets/Attendees/filter.svg';
import { ReactComponent as SortIcon } from '../../assets/Attendees/sort.svg';
import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import { ReactComponent as CloseIcon } from '../../assets/Attendees/close.svg';
import { Dialog, Transition } from '@headlessui/react';
import './styles.css';

/**
 * Creation of the Attendee Table component for the Attendee page. The filter for the Attendee Table will be applied here to display the corresponding hackers.
 * @returns the table of selected hackathon attendees.
 */
export default function AttendeeTable() {
	const cancelButtonRef = useRef(null);

	const attendeeData: Array<Attendee> = [];

	const [search, setSearch] = useState('');
	const [namesAscending, setNamesAscending] = useState(false);

	const [popUp, setPopUp] = useState<{
		seenAttendeePopUp: boolean;
		selectedAttendee: Attendee;
		open: boolean;
	}>({
		seenAttendeePopUp: false,
		selectedAttendee: {},
		open: false,
	});

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
	};
	// TODO: Remove after adding APIs
	for (var i = 0; i < 10; i++) {
		attendeeData.push({
			...blankAttendee,
			id: '' + i,
		});
	}

	return (
		<>
			{/* PopUp Component */}
			<Transition.Root show={popUp.open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					initialFocus={cancelButtonRef}
					onClose={() => {
						setPopUp((popUp) => ({
							...popUp,
							open: false,
						}));
					}}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-50  transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 pb-10 max-w-[900px]">
									<div className="w-full h-max pb-10 bg-white rounded-xl flex flex-col">
										<div className="px-8 py-4 text-xl font-bold flex items-start justify-start gap-4">
											<button
												className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-attendee-name"
												onClick={() => {
													setPopUp((popUp) => ({
														...popUp,
														open: false,
													}));
												}}
											>
												<CloseIcon />
											</button>
											<div className=" text-popup-heading text-bold text-xl">
												{`${popUp.selectedAttendee.firstName} ${popUp.selectedAttendee.lastName}`}
											</div>
										</div>
										<AttendeePopUp
											selectedAttendee={
												popUp.selectedAttendee
											}
										/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
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
						setSearch(e.target.value);
					}}
				/>
			</div>
			{/* Table Component */}
			<div className="h-full w-full overflow-auto  p-5">
				<table className="w-full border-collapse border-spacing-0 p-5">
					<tbody>
						<tr>
							<th>
								<div id="nameContent">
									Name
									{!namesAscending ? (
										<button>
											<SortIcon id="ascendingSort" />
										</button>
									) : (
										<button>
											<SortIcon id="descendingSort" />
										</button>
									)}
								</div>
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
									<FilterIcon />
								</div>
							</th>
						</tr>
						{attendeeData.map((attendee) => {
							return (
								<tr key={attendee.id}>
									<AttendeeRow
										key={attendee.id}
										attendee={attendee}
									/>
									<td>
										<button
											id="openUser"
											onClick={() => {
												if (!popUp.seenAttendeePopUp) {
													setPopUp((popUp) => ({
														...popUp,
														seenAttendeePopUp: true,
														selectedAttendee:
															attendee,
														open: true,
													}));
												} else {
													setPopUp((popUp) => ({
														...popUp,
														selectedAttendee:
															attendee,
														open: true,
													}));
												}
											}}
										>
											<div id="openUserContent">
												<OpenIcon />
												<div> Open User </div>
											</div>
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
}
