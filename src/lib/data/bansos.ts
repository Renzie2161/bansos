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
	ctaLink: string;
	tags: string[];
	featured: boolean;
	status: 'active' | 'expired' | 'upcoming';
}

export const bansosList: BansosItem[] = [
	{
		id: 'namecom-domain-app',
		title: 'Promo Domain .DEV & .APP Gratis dari Name.com',
		provider: 'Name.com',
		description: 'Bansos paling krusial buat kalian yang pengen rilis aplikasi tapi terhalang dana beli domain. Domain .dev dan .app premium langsung gas tanpa biaya, no cap! 🚀',
		benefits: [
			'Domain .dev dan .app gratis tanpa bayar sama sekali',
			'Tidak perlu kartu kredit (Anti-CC-ribet-club)',
			'Limit 1 domain per akun (Biar semua kebagian, fr fr)',
			'Berlaku dari tanggal 8–30 Juni 2026'
		],
		promoCode: 'DEVWEEK26',
		validity: '8–30 Juni 2026',
		requirements: [
			'Punya akun Name.com aktif',
			'Pilih domain .dev atau .app yang tersedia',
			'Gunakan promo code pas checkout'
		],
		tips: 'Cuma bisa 1 akun per orang! Jangan coba-coba tuyul akun ya dek ya, biar berkah dan websitenya awet.',
		ctaLink: 'https://www.name.com',
		tags: ['Domain', 'Gratisan', 'No Credit Card'],
		featured: true,
		status: 'active'
	}
];
