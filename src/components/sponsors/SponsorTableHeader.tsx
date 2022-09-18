import { ReactComponent as FilterIcon } from '../../assets/Attendees/filter.svg';
import { ReactComponent as SortIcon } from '../../assets/Attendees/sort.svg';

/**
 *
 * @param namesAscending determines whether or not {@link AttendeeTable} should sort attendee name's alphabetically.
 * @param setNamesAscending sets namesAscending in {@link AttendeeTable}
 */
export default function SponsorTableHeader(props: {
	namesAscending: boolean;
	setNamesAscending: (namesAscending: boolean) => void;
}) {
	return (
		<>
			<th> Logo </th>
			<th>
				<div id="nameContent">
					Name
					{!props.namesAscending ? (
						<button onClick={() => props.setNamesAscending(false)}>
							<SortIcon id="ascendingSort" />
						</button>
					) : (
						<button onClick={() => props.setNamesAscending(true)}>
							<SortIcon id="descendingSort" />
						</button>
					)}
				</div>
			</th>
			<th>Since</th>
			<th>Level</th>
			<th>Amount</th>
			<th />
		</>
	);
}
