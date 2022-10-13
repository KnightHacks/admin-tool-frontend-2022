import { Hackathon } from './hackathon';

export interface User {
	age?: number;
	email: string;
	firstName: string;
	lastName: string;
	fullName: string;
	hackathons: Hackathon[];
	id: string;
	// oAuth was left out for unclear importance
	phoneNumber: string;
	pronouns: Pronouns;
	role: Role;
}

export interface Pronouns {
	objective: string;
	subjective: string;
}

export enum Role {
	ADMIN,
	NORMAL,
	OWNS,
	SPONSOR,
}
