import React from 'react';
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar';
import LaunchCard from '../components/hackathon/LaunchCard';
import { ReactComponent as LogisticsIcon } from '../assets/hackathon/logistics.svg';
import { ReactComponent as AttendeesIcon } from '../assets/hackathon/attendees.svg';
import { ReactComponent as SponsorsIcon } from '../assets/hackathon/sponsors.svg';
import { ReactComponent as ScheduleIcon } from '../assets/hackathon/schedule.svg';
import { ReactComponent as SettingsIcon } from '../assets/hackathon/settings.svg';
import { useNavigate } from 'react-router-dom';

export default function Hackathon() {
	let navigate = useNavigate();
	return (
		<>
			<HackathonInfoBar />
			<div className="flex flex-wrap w-full justify-center bg-red-100 mt-4">
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
					icon={<SettingsIcon />}
					onClick={() => navigate('/settings')}
				/>
			</div>
		</>
	);
}
