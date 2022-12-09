import { ReactComponent as CreateIcon } from '../../assets/sponsors/add.svg'
import { ReactComponent as SortIcon } from '../../assets/sponsors/sort.svg'
import './sponsors.css'

export default function SponsorTableHeader({
	namesAscending,
	setNamesAscending,
	createNewSponsor,
}: {
	namesAscending: boolean
	setNamesAscending: (namesAscending: boolean) => void
	createNewSponsor: () => void
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
			<th>
				<button id="openSponsor" onClick={createNewSponsor}>
					<div id="openSponsorContent">
						<CreateIcon />
						New Sponsor
					</div>
				</button>
			</th>
		</>
	)
}
