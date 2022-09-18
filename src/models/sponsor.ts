import { Hackathon } from './hackathon';

export interface Sponsor {
	name: string;
	description?: String;
	hackathons: Hackathon[];
	id: string;
	logo?: string;
	since: Date;
	tier: SubscriptionTier;
	website?: string;
}

export enum SubscriptionTier {
	BRONZE,
	SILVER,
	GOLD,
	PLATINUM,
	INVALID,
}

export function getTierString(tier: SubscriptionTier) {
	if (tier === SubscriptionTier.BRONZE) return 'Bronze';
	else if (tier === SubscriptionTier.SILVER) return 'Silver';
	else if (tier === SubscriptionTier.GOLD) return 'Gold';
	else if (tier === SubscriptionTier.PLATINUM) return 'Platinum';
	else return '';
}

export function getTierFromString(tier: string) {
	tier = tier.toLowerCase();
	if (tier === 'bronze') return SubscriptionTier.BRONZE;
	if (tier === 'silver') return SubscriptionTier.SILVER;
	if (tier === 'gold') return SubscriptionTier.GOLD;
	if (tier === 'platinum') return SubscriptionTier.PLATINUM;
	else return SubscriptionTier.INVALID;
}
