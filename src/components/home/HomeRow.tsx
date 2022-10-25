import { Hackathon, Term } from '../../models/hackathon';
import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import './home.css';

/**
 * @returns row for a hackathon in the recent hackathons table.
 */

export default function HomeRow(props: {
	popUp: {
		seenHackathonPopUp: boolean;
		selectedHackathon: Hackathon;
		open: boolean;
	};
	hackathon: Hackathon;
	term: Term;
	setOpen: (isOpen: boolean) => void; 
}) {
	return (
		<>
			<td>{`${props.term.semester} ${props.term.year}`}</td>
            <td> {props.hackathon.attendees.length} </td>
            <td> {props.hackathon.sponsors.length} </td>
			<td>
				<button
					id="openUser"
					style={{width: "206px"}}
					onClick={() => {
						{
							props.setOpen(true);
						}
					}}
				>
					<div id="openUserContent">
						<OpenIcon />
						Open Hackathon
					</div>
				</button>
			</td>
		</>
	);
}
