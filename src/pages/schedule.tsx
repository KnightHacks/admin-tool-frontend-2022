import React from 'react';
import HackathonInfoBar from '../components/hackathon/HackathonInfoBar';
import ScheduleDay from '../components/schedule/ScheduleDay';
import { Event } from '../models/event';
import { dummyHackathonData } from '../models/hackathon';

export default function Schedule() {
	const sampleEvent: Event = {
		name: 'Team Building',
		description: 'Build Hackathon Teams',
		start_date: new Date(),
		end_date: new Date(),
		hackathon: dummyHackathonData[0],
		id: '1',
		location: 'HEC 125',
	};

	var events = [];
	for (var i = 0; i < 4; i++) {
		events.push(sampleEvent);
	}
	return (
		<div>
			<HackathonInfoBar />
			<div className="w-screen h-screen p-10">
				<div className="h-auto w-full px-5">
					<h1 className=" font-bold text-3xl text-subHeading-color mb-4">
						Schedule
					</h1>
				</div>
				<ScheduleDay events={events} dayNum={1} />
				<ScheduleDay events={events} dayNum={2} />
				<ScheduleDay events={events} dayNum={3} />
			</div>
		</div>
	);
}
