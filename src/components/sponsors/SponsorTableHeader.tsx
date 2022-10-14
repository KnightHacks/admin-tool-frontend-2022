import { ReactComponent as SortIcon } from '../../assets/Sponsors/sort.svg';
import './sponsors.css';

export default function SponsorTableHeader({
	namesAscending,
	setNamesAscending,
}: {
	namesAscending: boolean;
	setNamesAscending: (namesAscending: boolean) => void;
}) {
	return (
		<>
			<th>
				<div id="sponsorNameContent">
					Name
					{namesAscending ? (
						<button onClick={() => setNamesAscending(false)}>
							<SortIcon id="ascendingSortArrow" />
						</button>
					) : (
						<button onClick={() => setNamesAscending(true)}>
							<SortIcon id="descendingSortArrow" />
						</button>
					)}
				</div>
			</th>
			<th>Logo</th>
			<th>Since</th>
			<th>Level</th>
			<th>Amount</th>
			<th />
		</>
	);
}
