import React from 'react';
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar';
import LaunchCard from '../components/hackathon/LaunchCard';
import { ReactComponent as LogisticsIcon } from '../assets/logistics.svg';
import { ReactComponent as AttendeesIcon } from '../assets/attendees.svg';
import { ReactComponent as SponsorsIcon } from '../assets/sponsors.svg';
import { ReactComponent as ScheduleIcon } from '../assets/schedule.svg';
import { ReactComponent as HackathonSettingsIcon } from '../assets/eventsettings.svg';
import { useNavigate } from 'react-router-dom';

export default function Hackathon() {
	let navigate = useNavigate();
	return (
		<>
			<HackathonInfoBar />
			<div className="mt-8 ml-4 flex flex-wrap">
				<LaunchCard
					text="Event Logistics"
					icon={<LogisticsIcon />}
					onClick={() => navigate('/logistics')}
				/>
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
				<LaunchCard
					text="Hackathon Settings"
					icon={<HackathonSettingsIcon />}
					onClick={() => navigate('/settings')}
				/>
			</div>
		</>
	);
}
