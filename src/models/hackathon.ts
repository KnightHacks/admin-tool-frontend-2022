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
	FALL,
	SPRING,
	SUMMER,
}
