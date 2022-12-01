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

export enum HackathonTier {
	BRONZE = 'Bronze',
	SILVER = 'Silver',
	GOLD = 'Gold',
	PLATINUM = 'Platinum',
	CUSTOM = 'Custom',
}

export const allTiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Custom']

export function isValidTier(val: string) {
	return allTiers.indexOf(val) !== -1
}

export function getAmount(tier: string) {
	switch (tier) {
		case 'Bronze':
			return 3000
		case 'Silver':
			return 5000
		case 'Gold':
			return 7000
		case 'Platinum':
			return 10000
		default:
			return 0
	}
}
