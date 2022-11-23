import { useState } from 'react'
import PopUp from '../PopUp'
import { Sponsor } from '../../models/sponsor'
import SponsorRow from './SponsorRow'
import SponsorTableHeader from './SponsorTableHeader'
import Table from '../Table'
import EditSponsor from './EditSponsor'

export enum Mode {
	CREATE,
	EDIT,
}

export default function SponsorTable() {
	const sponsorData: Array<Sponsor> = []
	const [namesAscending, setNamesAscending] = useState(false)
	const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null)
	const [popUpOpen, setPopUpOpen] = useState(false)
	const [popUpMode, setPopUpMode] = useState(Mode.CREATE)

	let dummySponsor: Sponsor = {
		name: 'Knight Hacks',
		description:
			"UCF's largest software development organization. We run technical and nontechnical events to help students succeed.",
		hackathons: [],
		id: 'dummyID',
		logo: undefined,
		since: new Date('2017-08-22T12:17:21.264Z'),
		tier: 'Bronze',
		website: 'https://knighthacks.org',
	}

	// TODO: Remove after adding APIs
	for (var i = 0; i < 10; i++) {
		sponsorData.push({
			...dummySponsor,
			id: '' + i,
		})
	}

	return (
		<>
			<PopUp
				open={popUpOpen}
				setOpen={(isOpen) => setPopUpOpen(isOpen)}
				headerContent={
					<div className="text-popup-heading text-bold text-xl">
						{selectedSponsor?.name}
					</div>
				}
				bodyContent={
					<EditSponsor
						selectedSponsor={selectedSponsor}
						popUpMode={popUpMode}
					/>
				}
			></PopUp>

			{/* Table Component */}
			<Table
				headerContent={
					<SponsorTableHeader
						namesAscending={namesAscending}
						setNamesAscending={(namesAscending) =>
							setNamesAscending(namesAscending)
						}
						createNewSponsor={() => {
							setPopUpMode(Mode.CREATE)
							setPopUpOpen(true)
							setSelectedSponsor(null)
						}}
					/>
				}
				bodyContent={
					<>
						{sponsorData.map((sponsor) => {
							return (
								<tr key={sponsor.id}>
									<SponsorRow
										key={sponsor.id}
										sponsor={sponsor}
										editSponsor={(sponsor: Sponsor) => {
											setPopUpMode(Mode.EDIT)
											setPopUpOpen(true)
											setSelectedSponsor(sponsor)
										}}
									/>
								</tr>
							)
						})}
					</>
				}
			></Table>
		</>
	)
}
