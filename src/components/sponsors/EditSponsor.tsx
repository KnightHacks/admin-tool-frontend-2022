import { useState } from 'react'
import InputGroup from '../InputGroup'
import { Sponsor, HackathonTier } from '../../models/sponsor'
import './sponsors.css'
import { dateToDateTimeLocalString } from '../../util/dateutil'
import { Option, SelectGroup } from '../SelectGroup'

const emptySponsor: Sponsor = {
	name: '',
	description: '',
	hackathons: [],
	id: '',
	logo: '',
	since: new Date(),
	tier: HackathonTier.GOLD,
	website: '',
}

const tierOptions: Option<HackathonTier>[] = [
	{ value: HackathonTier.BRONZE, label: 'Bronze' },
	{ value: HackathonTier.SILVER, label: 'Silver' },
	{ value: HackathonTier.GOLD, label: 'Gold' },
	{ value: HackathonTier.PLATINUM, label: 'Platinum' },
]

export default function EditSponsor({
	selectedSponsor,
}: {
	selectedSponsor: Sponsor | null
}) {
	const [sponsor, setSponsor] = useState<Sponsor>(
		selectedSponsor ?? emptySponsor
	)

	const saveSponsor = () => {
		// TODO
	}

	const deleteSponsor = () => {
		// TODO
	}

	return (
		<>
			<span className="h-[1.5px] m-0 p-0 w-full bg-gray-200"></span>
			<div className="flex justify-center items-center flex-col">
				<div className="text-[28px] font-bold text-popup-heading">
					Sponsor Details
				</div>
				<div className="flex items-center p-4 justify-center flex-col lg:flex-row w-10/12">
					<div className="flex flex-col gap-2 w-full lg:w-1/2">
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
							value={sponsor?.description}
							label={'Description'}
							setValue={(updatedValue) =>
								setSponsor({
									...sponsor,
									description: updatedValue,
								})
							}
							numLines={3}
						/>
					</div>

					<div className="flex flex-col gap-2 w-full lg:w-1/2">
						<InputGroup
							label="Start Date"
							type="date"
							value={sponsor.since.toISOString().split('T')[0]}
							setValue={(newDateStr) =>
								setSponsor({
									...sponsor,
									since: new Date(newDateStr),
								})
							}
						/>

						<SelectGroup
							value={sponsor.tier}
							setValue={(newValue) => {
								if (!newValue) return
								setSponsor({
									...sponsor,
									tier: newValue,
								})
							}}
							label="Tier"
							options={tierOptions}
						/>

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
				</div>
				<div
					className={
						'w-full h-full flex flex-col items-center justify-center p-2 rounded-lg shadow-sm bored-r-8 gap-6'
					}
				>
					<button
						onClick={saveSponsor}
						className="bg-dark-action-color p-2 text-white w-1/2 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90"
					>
						Save Sponsor
					</button>
					<button
						onClick={deleteSponsor}
						className="bg-red-action-color p-2 text-white w-1/2 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90"
					>
						Delete Sponsor
					</button>
				</div>
			</div>
		</>
	)
}
