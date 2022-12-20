import { useNavigate } from 'react-router-dom'
import { ReactComponent as AttendeesIcon } from '../assets/hackathon/attendees.svg'
import { ReactComponent as ScheduleIcon } from '../assets/hackathon/schedule.svg'
import { ReactComponent as SponsorsIcon } from '../assets/hackathon/sponsors.svg'
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar'
import LaunchCard from '../components/hackathon/LaunchCard'
import HeaderBar from '../components/HeaderBar'

export default function Hackathon() {
	let navigate = useNavigate()
	return (
		<>
			<HeaderBar />
			<HackathonInfoBar />
			<div className="flex flex-wrap w-full justify-center mt-4">
				<LaunchCard
					text="View Attendees"
					icon={<AttendeesIcon />}
					onClick={() => navigate('/attendees')}
				/>
				<LaunchCard
					text="View Sponsors"
					icon={<SponsorsIcon />}
					onClick={() => navigate('/sponsors')}
				/>
				<LaunchCard
					text="View Schedule"
					icon={<ScheduleIcon />}
					onClick={() => navigate('/schedule')}
				/>
			</div>
		</>
	)
}
