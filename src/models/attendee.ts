export interface Pronouns {
	subjective: string;
	objective: string;
}

export interface Attendee {
	id?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
	pronouns?: Pronouns;
	age?: number;
	role?: string;
	oAuth?: string;
	isAccepted?: boolean;
	isConfirmed?: boolean;
	isCheckedIn?: boolean;
	discord?: string;
	userLink?: string;
	school?: string;
}
