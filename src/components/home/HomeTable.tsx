import { useState } from 'react';
import { Hackathon , HackathonStatus, Semester} from '../../models/hackathon';
import HomeRow from './HomeRow';
import HomeTableHeader from './HomeTableHeader';
import Table from '../Table';
import PopUp from '../PopUp';
import EditHackathon from './EditHackathon';

/**
 * Creation of the Recent Hackathons Table component for the Home page. The filter for the Recent Hackathons Table will be applied here to display the corresponding hackathons.
 * @returns the table of recent hacakthons. 
 */
export default function AttendeeTable() {
	const hackathonData: Array<Hackathon> = [];
	const [popUp, setPopUp] = useState<{
		seenHackathonPopUp: boolean;
		selectedHackathon: Hackathon;
		open: boolean;
	}>({
		seenHackathonPopUp: false,
		selectedHackathon: {
			attendees: [],
			events: [],
			id: 'nasneofnsofaoewkn',
			sponsors: [],
			startDate: new Date(),
			endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
			status: HackathonStatus.PRESENT,		
			term: {
				semester: Semester.FALL,
				year: 2022,
			},
		},
		open: false,
	});

	let dummyHackathonData: Hackathon = {
		attendees: [],
		events: [],
		id: 'nasneofnsofaoewkn',
		sponsors: [],
		startDate: new Date(),
		endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
		status: HackathonStatus.PRESENT,		
		term: {
			semester: Semester.FALL,
			year: 2022,
		},
	};
	// TODO: Remove after adding APIs
	for (var i = 0; i < 4; i++) {
		hackathonData.push({
			...dummyHackathonData,
		});
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
					}));
				}}
				headerContent={
					<div className=" text-popup-heading text-bold text-xl">
						{`${popUp.selectedHackathon.term.semester} ${popUp.selectedHackathon.term.year}`}
					</div>
				}
				bodyContent={
					<EditHackathon selectedHackathon={popUp.selectedHackathon} />
				}
			></PopUp>

			{/* Table Component */}
			<Table
				headerContent={
					<HomeTableHeader/>
				}
				bodyContent={
					<>
						{hackathonData.map((hackathon) => {
							return (
								<tr key={hackathon.id}>
									<HomeRow
										key={hackathon.id}
										hackathon = {hackathon}
										term = {hackathon.term}
										popUp={popUp}
										setOpen={(isOpen) => {
											if (!popUp.seenHackathonPopUp) {
												setPopUp({
													seenHackathonPopUp: true,
													selectedHackathon: hackathon,
													open: isOpen,
												});
											} else {
												setPopUp((popUp) => ({
													...popUp,
													selectedHackathon: hackathon,
													open: isOpen,
												}));
											}
										}}
									/>
								</tr>
							);
						})}
					</>
				}
			></Table>
		</>
	);
}
