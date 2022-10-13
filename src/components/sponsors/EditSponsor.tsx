import { useState } from 'react';
import InputGroup from '../InputGroup';
import { Sponsor, SubscriptionTier } from '../../models/sponsor';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

/*

Sponsor {
	name: string;
	description?: String;
	hackathons: Hackathon[];
	id: string;
	logo?: string;
	since: Date;
	tier: SubscriptionTier;
	website?: string;
}

export enum SubscriptionTier {
	BRONZE,
	SILVER,
	GOLD,
	PLATINUM,
	INVALID,
}

*/

const emptySponsor: Sponsor = {
	name: '',
	description: '',
	hackathons: [],
	id: '',
	logo: '',
	since: new Date(),
	tier: SubscriptionTier.INVALID,
	website: '',
};

export default function EditSponsor({
	selectedSponsor,
}: {
	selectedSponsor: Sponsor | null;
}) {
	// TODO: might need to deep copy this
	const [sponsor, setSponsor] = useState<Sponsor>(
		selectedSponsor ?? emptySponsor
	);

	const saveSponsor = () => {
		// TODO
	};

	return (
		<>
			<span className="h-[1.5px] m-0 p-0 w-full bg-gray-200"></span>
			<div className="grid h-full  grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 items-center justify-start">
				<div className="flex items-center h-full p-4 justify-start flex-col gap-4">
					<div className="text-[28px] font-bold text-popup-heading">
						Attendee Details
					</div>

					<InputGroup
						value={sponsor?.name}
						label={'Name'}
						setValue={(updatedValue) =>
							setSponsor({
								...sponsor,
								name: updatedValue,
							})
						}
					/>

					<InputGroup
						value={sponsor?.description ?? ''}
						label={'Description'}
						setValue={(updatedValue) =>
							setSponsor({
								...sponsor,
								description: updatedValue,
							})
						}
					/>

					{/*TODO: Since date */}

					<DesktopDatePicker
						label="Sponsor Join Date"
						inputFormat="MM/DD/YYYY"
						value={sponsor.since}
						onChange={(newValue) =>
							setSponsor({
								...sponsor,
								since: newValue ?? new Date(),
							})
						}
						renderInput={(params) => <TextField {...params} />}
					/>

					{/*TODO: Tier Dropdown */}

					<InputGroup
						value={sponsor?.website ?? ''}
						label={'Website'}
						setValue={(updatedValue) =>
							setSponsor({
								...sponsor,
								website: updatedValue,
							})
						}
					/>
				</div>
				<div
					className={
						'w-full h-full flex flex-col items-center justify-center p-2 rounded-lg shadow-sm bored-r-8 gap-6'
					}
				>
					<button className="bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						Admit Participant
					</button>
					<button className="bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						Check-in Participant
					</button>
					<button className="bg-red-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						Delete Participant
					</button>
				</div>
			</div>
		</>
	);
}
