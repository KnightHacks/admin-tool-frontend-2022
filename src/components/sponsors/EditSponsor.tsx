import { useState } from 'react'
import InputGroup from '../InputGroup'
import { allTiers, Sponsor } from '../../models/sponsor'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import TextField from '@mui/material/TextField'
import {
	FormControl,
	MenuItem,
	Select,
	InputLabel,
	SelectChangeEvent,
} from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

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
	tier: 'Gold',
	website: '',
}

export default function EditSponsor({
	selectedSponsor,
}: {
	selectedSponsor: Sponsor | null
}) {
	const [sponsor, setSponsor] = useState<Sponsor>(
		selectedSponsor ?? emptySponsor
	)
	const [selectTier, setSelectTier] = useState<string>(sponsor.tier)

	// TODOS
	/* 
        Make formatting of all fields look good
            Either re-style fields or maybe just make my own and scrap all MUI additions?
        Add in any extra fields that might be changed
        Button just on the bottom all the time, not just at small breakpoints
        Save sponsor
        Whitespace in tr thing
    */

	const saveSponsor = () => {
		// TODO
	}

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

					<LocalizationProvider dateAdapter={AdapterDayjs}>
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
					</LocalizationProvider>

					<FormControl sx={{ m: 1, minWidth: 80 }}>
						<InputLabel id="demo-simple-select-autowidth-label">
							Age
						</InputLabel>
						<Select
							labelId="demo-simple-select-autowidth-label"
							id="demo-simple-select-autowidth"
							value={selectTier}
							onChange={(event: SelectChangeEvent<string>) => {
								const newTier = event.target.value
								setSelectTier(newTier)
								setSponsor({ ...sponsor, tier: newTier })
							}}
							autoWidth
							label="Tier"
						>
							{allTiers.map((stringTier) => (
								<MenuItem value={stringTier} key={stringTier}>
									{stringTier}
								</MenuItem>
							))}
						</Select>
					</FormControl>

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
					<button className="bg-red-action-color p-2 text-white w-3/4 max-w-[400px] rounded-lg font-bold text-lg border-2 border-solid border-red-action-border flex items-center justify-center flex-row gap-3 hover:brightness-90">
						Delete Sponsor
					</button>
				</div>
			</div>
		</>
	)
}
