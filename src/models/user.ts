import { Hackathon } from './hackathon'

export interface User {
	age?: number
	email: string
	firstName: string
	lastName: string
	fullName: string
	hackathons: Hackathon[]
	id: string
	// oAuth was left out for unclear importance
	phoneNumber: string
	pronouns: string
	role: Role
}

export enum Role {
	ADMIN = 'ADMIN',
	NORMAL = 'NORMAL',
	SPONSOR = 'SPONSOR',
	NONE = 'NONE',
}
