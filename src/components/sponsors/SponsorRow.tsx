import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import { ReactComponent as DefaultLogo } from '../../assets/logo.svg';
import { getTierString, getAmount, Sponsor } from '../../models/sponsor';
import './sponsors.css';

export default function SponsorRow({
	sponsor,
	setOpen,
}: {
	sponsor: Sponsor;
	setOpen: (isOpen: boolean) => void;
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
			<td>{getTierString(sponsor.tier)}</td>
			<td>{`$${getAmount(sponsor.tier)}`}</td>
			<td>
				<button id="openSponsor" onClick={() => setOpen(true)}>
					<div id="openSponsorContent">
						<OpenIcon />
						Open User
					</div>
				</button>
			</td>
		</>
	);
}
