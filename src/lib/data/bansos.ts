import bansosData from './bansos.json';

export interface BansosItem {
	id: string;
	title: string;
	provider: string;
	providerLogoUrl?: string;
	description: string;
	benefits: string[];
	promoCode?: string;
	validity: string;
	requirements: string[];
	tips?: string;
	contributor?: {
		name: string;
		url: string;
	};
	ctaLink: string;
	tags: string[];
	featured: boolean;
	status: 'active' | 'expired' | 'upcoming';
}

const DEFAULT_UTM = {
	source: 'bansos.dev',
	medium: 'referral',
	campaign: 'bansos'
};

function appendDefaultUtmParams(url: string) {
	try {
		const parsed = new URL(url);
		if (!parsed.searchParams.has('utm_source')) {
			parsed.searchParams.set('utm_source', DEFAULT_UTM.source);
		}
		if (!parsed.searchParams.has('utm_medium')) {
			parsed.searchParams.set('utm_medium', DEFAULT_UTM.medium);
		}
		if (!parsed.searchParams.has('utm_campaign')) {
			parsed.searchParams.set('utm_campaign', DEFAULT_UTM.campaign);
		}
		return parsed.toString();
	} catch {
		return url;
	}
}

export function addTrackedCtaLink(item: BansosItem): BansosItem {
	return {
		...item,
		ctaLink: appendDefaultUtmParams(item.ctaLink)
	};
}

export const bansosList: BansosItem[] = (bansosData as BansosItem[]).map((item) => addTrackedCtaLink(item));

export const latestBansos = (limit = 3) => bansosList.slice(-limit).reverse();

export const allBansosTags = Array.from(new Set(bansosList.flatMap((item) => item.tags))).sort(
	(a, b) => a.localeCompare(b)
);

export function getBansosById(id: string) {
	return bansosList.find((item) => item.id === id);
}

export function getBansosByTag(tag: string) {
	return bansosList.filter((item) => item.tags.includes(tag));
}
