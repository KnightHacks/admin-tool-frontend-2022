import { Hackathon } from './hackathon'

export interface Sponsor {
	name: string
	description?: String
	hackathons: Hackathon[]
	id: string
	logo?: string
	since: Date
	tier: string
	website?: string
}

export const allTiers = ['Bronze', 'Silver', 'Gold', 'Platinum']

export function isValidTier(val: string) {
	return allTiers.indexOf(val) !== -1
}

export function getAmount(tier: string) {
	return 0 // TODO
}
