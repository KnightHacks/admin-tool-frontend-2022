import React from 'react';
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar';
import LaunchCard from '../components/hackathon/LaunchCard';
import { ReactComponent as LogisticsIcon } from '../assets/logistics.svg';
import { ReactComponent as AttendeesIcon } from '../assets/attendees.svg';
import { ReactComponent as SponsorsIcon } from '../assets/sponsors.svg';
import { ReactComponent as ScheduleIcon } from '../assets/schedule.svg';
import { ReactComponent as HackathonSettingsIcon } from '../assets/eventsettings.svg';

export default function Hackathon() {
	return (
		<>
			<HackathonInfoBar />
			<div className="mt-8">
				<LaunchCard text="Event Logistics" icon={<LogisticsIcon />} />
				<LaunchCard text="View Attendees" icon={<AttendeesIcon />} />
				<LaunchCard text="View Sponsors" icon={<SponsorsIcon />} />
				<LaunchCard text="View Schedule" icon={<ScheduleIcon />} />
				<LaunchCard
					text="Event Logistics"
					icon={<HackathonSettingsIcon />}
				/>
			</div>
		</>
	);
}
