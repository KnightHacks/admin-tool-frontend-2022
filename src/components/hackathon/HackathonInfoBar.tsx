import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
	dummyHackathonData,
	Hackathon,
	HackathonStatus,
} from '../../models/Hackathon'
import { getDateRangeString } from '../../util/DateUtil'
import HackathonInfoCard from './HackathonInfoCard'

interface HackathonProps {
	hackathonData?: Hackathon
}

export default function HackathonInfoBar({
	hackathonData = dummyHackathonData[0],
}: HackathonProps) {
	let navigate = useNavigate()
	const location = useLocation()

	return (
		<div className="flex bg-hinfobar-bg border-border-gray border-b h-[144px] lg:p-16 p-8">
			<div className="flex flex-col justify-center min-w-fit">
				<div className="flex justify-center items-center">
					<p className="text-hinfobar-maintext text-3xl font-Inter font-extrabold">
						{hackathonData.term.semester +
							' ' +
							hackathonData.term.year}
					</p>
					{location.pathname === '/hackathon' ? (
						<div
							className={`w-4 h-4 rounded-full ml-2 ${
								hackathonData.status === HackathonStatus.PRESENT
									? 'bg-status-active'
									: 'bg-status-inactive'
							}`}
						/>
					) : (
						<></>
					)}
				</div>
				<p className="text-hinfobar-subtext text-xl font-Inter font-semibold">
					{getDateRangeString(hackathonData)}
				</p>
			</div>
			<div className="md:flex hidden h-full w-full justify-end items-center text-3xl">
				<HackathonInfoCard
					label="Hackers"
					count={hackathonData.attendees.length}
					onClick={() => navigate('/attendees')}
				/>
				<HackathonInfoCard
					label="Sponsors"
					count={hackathonData.sponsors.length}
					onClick={() => navigate('/sponsors')}
				/>
				<HackathonInfoCard
					label="Events"
					count={hackathonData.events.length}
					onClick={() => navigate('/schedule')}
				/>
			</div>
		</div>
	)
}
