import { Hackathon, dummyHackathonData } from '../../models/hackathon';
import HomeRow from './HomeRow';
import HomeTableHeader from './HomeTableHeader';
import Table from '../Table';

/**
 * Creation of the Recent Hackathons Table component for the Home page. The filter for the Recent Hackathons Table will be applied here to display the corresponding hackathons.
 * @returns the table of recent hacakthons. 
 */
export default function AttendeeTable() {
	let hackathonData: Hackathon = dummyHackathonData[0];
	let hackathon = []
	
	// TODO: Remove after adding APIs
	for (var i = 0; i < 3; i++) {
		hackathon.push(hackathonData)
	}

	return (
		<>
			<Table
				headerContent={
					<HomeTableHeader/>
				}
				bodyContent={
					<>
						{hackathon.map((hackathon) => {
							return (
								<tr key={hackathon.id}>
									<HomeRow
										key={hackathon.id}
										hackathon = {hackathon}
										term = {hackathon.term}
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
