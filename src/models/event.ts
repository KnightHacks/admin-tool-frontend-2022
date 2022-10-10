import { Hackathon } from './Hackathon'

export interface Event {
	name: string
	description: string
	start_date: Date
	end_date: Date
	hackathon: Hackathon
	id: string
	location: string
}
