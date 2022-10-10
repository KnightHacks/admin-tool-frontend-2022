import { ReactComponent as FilterIcon } from '../../assets/Attendees/filter.svg'
import { ReactComponent as SortIcon } from '../../assets/Attendees/sort.svg'

/**
 *
 * @param namesAscending determines whether or not {@link AttendeeTable} should sort attendee name's alphabetically.
 * @param setNamesAscending sets namesAscending in {@link AttendeeTable}
 */
export default function AttendeeTableHeader(props: {
	namesAscending: boolean
	setNamesAscending: (namesAscneding: boolean) => void
}) {
	return (
		<>
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
			<th> Email </th>
			<th> Discord </th>
			<th> Auth </th>
			<th> School </th>
			<th> Accepted </th>
			<th> Confirmed </th>
			<th> Checked In </th>
			<th>
				<div className="flex w-full justify-end align-center">
					<FilterIcon />
				</div>
			</th>
		</>
	)
}
