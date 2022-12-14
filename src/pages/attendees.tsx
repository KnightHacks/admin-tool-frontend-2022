import AttendeeTable from '../components/attendees/AttendeeTable'
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar'
import HeaderBar from '../components/HeaderBar'

export default function Attendees() {
	return (
		<>
			<HeaderBar />
			<HackathonInfoBar />
			<div className="w-screen h-screen p-10">
				<AttendeeTable />
			</div>
		</>
	)
}
