import { ReactComponent as OpenIcon } from '../../assets/sponsors/open.svg'
import { ReactComponent as DefaultLogo } from '../../assets/logo.svg'
import { getAmount, Sponsor } from '../../models/sponsor'
import './sponsors.css'

export default function SponsorRow({
	sponsor,
	editSponsor,
}: {
	sponsor: Sponsor
	editSponsor: (editing: Sponsor) => void
}) {
	return (
		<>
			<td className="">{sponsor.name}</td>
			<td>
				<div className="flex w-full justify-center align-center">
					{sponsor.logo ?? <DefaultLogo />}
				</div>
			</td>
			<td>{sponsor.since.toLocaleDateString()}</td>
			<td>{sponsor.tier}</td>
			<td>{`$${getAmount(sponsor.tier)}`}</td>
			<td>
				<button id="openSponsor" onClick={() => editSponsor(sponsor)}>
					<div id="openSponsorContent">
						<OpenIcon />
						Open Sponsor
					</div>
				</button>
			</td>
		</>
	)
}
