import { Hackathon } from './hackathon'

export interface Sponsor {
	name: string
	description?: String
	hackathons: Hackathon[]
	id: string
	logo?: string
	since: Date
	tier: SubscriptionTier
	website?: string
}

export enum SubscriptionTier {
	BRONZE,
	GOLD,
	PLATINUM,
	SILVER,
}
