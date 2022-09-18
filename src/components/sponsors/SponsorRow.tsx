import { ReactComponent as OpenIcon } from '../../assets/Attendees/open.svg';
import { ReactComponent as DefaultLogo } from '../../assets/logo.svg';
import { getTierString, Sponsor, SubscriptionTier } from '../../models/sponsor';
import './styles.css';

const getAmount = (tier: SubscriptionTier) => {
	return 0;
};

export default function SponsorRow({
	sponsor,
	setOpen,
}: {
	sponsor: Sponsor;
	setOpen: (isOpen: boolean) => void;
}) {
	return (
		<>
			<td>{sponsor.logo ?? <DefaultLogo />}</td>
			<td>{sponsor.name}</td>
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
