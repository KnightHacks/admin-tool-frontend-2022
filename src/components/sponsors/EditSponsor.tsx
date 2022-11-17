import { useState } from 'react'
import InputGroup from '../InputGroup'
import { Sponsor } from '../../models/sponsor'
import Select, { StylesConfig } from 'react-select'
import './sponsors.css'
import { dateToDateTimeLocalString } from '../../util/dateutil'

const emptySponsor: Sponsor = {
	name: '',
	description: '',
	hackathons: [],
	id: '',
	logo: '',
	since: new Date(),
	tier: 'Gold',
	website: '',
}

type Tier = { label: string; value: string }

const tierOptions = [
	{ value: 'BRONZE', label: 'Bronze' },
	{ value: 'SILVER', label: 'Silver' },
	{ value: 'GOLD', label: 'Gold' },
	{ value: 'PLATINUM', label: 'Platinum' },
]

const customStyles: StylesConfig<Tier, false> = {
	valueContainer: (provided, state) => ({
		...provided,
		backgroundColor: '#FBFBFB',
	}),
	indicatorsContainer: (provided, state) => ({
		...provided,
		backgroundColor: '#FBFBFB',
	}),
	container: (provided, state) => ({
		...provided,
		width: '75%',
		maxWidth: '350px',
	}),
}

export default function EditSponsor({
	selectedSponsor,
}: {
	selectedSponsor: Sponsor | null
}) {
	const [sponsor, setSponsor] = useState<Sponsor>(
		selectedSponsor ?? emptySponsor
	)
	const [selectTier, setSelectTier] = useState<Tier>(
		sponsor.tier
			? { label: sponsor.tier, value: sponsor.tier }
			: tierOptions[0]
	)

	const saveSponsor = () => {
		// TODO
	}

	const deleteSponsor = () => {
		// TODO
	}

	console.log(sponsor)

	// TODO: Make a flex with three rows, two if small
	// First row is the heading, second row is for fields,
	// third is for buttons. If small, everything in one line in row 2.
	// Fields are half on the left and half on the right.

	return (
		<>
			<span className="h-[1.5px] m-0 p-0 w-full bg-gray-200"></span>
			<div className="grid h-full grid-cols-1 grid-rows-1 lg:grid-rows-3 items-center justify-start">
				<div className="flex items-center h-full p-4 justify-start flex-col gap-4">
					<div className="text-[28px] font-bold text-popup-heading">
						Sponsor Details
					</div>
				</div>
				<div className="flex items-center p-4 justify-center flex-col lg:flex-row">
					<div>
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

					<div>
						{/* TODO: Date isn't coming out right when converting */}
						<InputGroup
							label="Start Date"
							type={'datetime-local'}
							value={dateToDateTimeLocalString(sponsor.since)}
							setValue={(newVal) => {
								console.log(newVal)
								setSponsor({
									...sponsor,
									since: new Date(newVal),
								})
							}}
						/>

						<InputGroup label="Tier">
							<Select
								styles={customStyles}
								options={tierOptions}
								value={selectTier}
								onChange={(newValue) => {
									if (!newValue) return
									setSponsor({
										...sponsor,
										tier: newValue.value,
									})
									setSelectTier(newValue)
								}}
							/>
						</InputGroup>

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
						className="bg-dark-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-dark-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90"
					>
						Save Sponsor
					</button>
					<button
						onClick={deleteSponsor}
						className="bg-red-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90"
					>
						Delete Sponsor
					</button>
				</div>
			</div>
		</>
	)
}
