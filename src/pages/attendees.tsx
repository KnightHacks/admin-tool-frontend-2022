import AttendeeTable from '../components/attendees/AttendeeTable'
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar'

export default function Attendees() {
	return (
		<>
			<HackathonInfoBar />
			<div className="w-screen h-screen p-10">
				<AttendeeTable />
			</div>
		</>
	)
}
