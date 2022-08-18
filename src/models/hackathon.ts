import { Sponsor } from './sponsor';
import { User } from './user';

export interface Hackathon {
	attendees: User[];
	events: Event[];
	id: string;
	sponsors: Sponsor[];
	startDate: Date;
	endDate: Date;
	status: HackathonStatus;
	term: Term;
}

export interface Term {
	semester: Semester;
	year: number;
}

export enum HackathonStatus {
	FUTURE,
	PAST,
	PRESENT,
}

export enum Semester {
	FALL = 'Fall',
	SPRING = 'Spring',
	SUMMER = 'Summer',
}

export let dummyHackathonData: Hackathon[] = [
	{
		attendees: [],
		events: [],
		id: 'nasneofnsofaoewkn',
		sponsors: [],
		startDate: new Date(),
		endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24),
		status: HackathonStatus.PRESENT,
		term: {
			semester: Semester.FALL,
			year: 2022,
		},
	},
];
