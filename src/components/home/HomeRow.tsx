import { Hackathon, Term } from '../../models/hackathon';
import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import { Link } from 'react-router-dom';
import './home.css';

/**
 * @returns row for a hackathon in the recent hackathons table.
*/

export default function HomeRow(props: {
	hackathon: Hackathon;
	term: Term;
}) {
	return (
		<>
			<td className="text-start">{`${props.term.semester} ${props.term.year}`}</td>
            <td> {props.hackathon.attendees.length} </td>
            <td> {props.hackathon.sponsors.length} </td>
			<td className="text-end">
				<Link to="/hackathon">
					<button id="openHome" >
						<div id="openHomeContent">
							<OpenIcon />
							Open Hackathon
						</div>
					</button>
				</Link>
			</td>
		</>
	);
}
