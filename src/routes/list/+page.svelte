<script lang="ts">
	import { bansosList } from '$lib/data/bansos';

	let floatingEmojis = $state<{ id: number; x: number; y: number; text: string }[]>([]);

	function spawnEmoji(e: MouseEvent, text: string) {
		const emoji = {
			id: Math.random(),
			x: e.clientX,
			y: e.clientY,
			text
		};
		floatingEmojis = [...floatingEmojis, emoji];
		setTimeout(() => {
			floatingEmojis = floatingEmojis.filter((i) => i.id !== emoji.id);
		}, 1000);
	}
</script>

<svelte:head>
	<title>Daftar Bantuan Sosial Developer - bansos.dev</title>
	<meta name="description" content="Temukan berbagai program bantuan sosial (bansos), diskon, dan gratisan tools khusus untuk developer dan programmer Indonesia." />
</svelte:head>

<main class="page-wrapper">
	<div class="glow-orb list-glow"></div>

	<!-- Header -->
	<header class="feed-header container">
		<a href="/" class="btn-back-home">← Home</a>
		<h1 class="section-title">
			<span>📦 Semua Info Bansos Aktif</span>
			<svg class="anxious-icon inline-anxious" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M25 25 H75 L70 75 C69 80 64 84 59 84 H41 C36 84 31 80 30 75 Z" fill="var(--bg-secondary)" stroke="var(--color-success)" stroke-width="4"/>
				<path d="M75 35 H85 C90 35 93 39 93 44 V56 C93 61 90 65 85 65 H73" stroke="var(--color-success)" stroke-width="4" stroke-linecap="round" fill="none"/>
				<path d="M40 10 Q43 14 40 18 M50 8 Q53 13 50 18 M60 10 Q63 14 60 18" stroke="var(--text-muted)" stroke-width="3" stroke-linecap="round" fill="none"/>
				<path d="M34 43 Q39 40 44 43 M52 43 Q57 40 62 43" stroke="var(--text-primary)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
				<circle cx="39" cy="49" r="3" fill="var(--text-primary)"/>
				<circle cx="57" cy="49" r="3" fill="var(--text-primary)"/>
				<path d="M44 58 Q48 55 52 58 T56 58" stroke="var(--text-primary)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
				<path class="sweat-drop" d="M68 44 C68 47 66.5 49 65 49 C63.5 49 63.5 47 65 44 C66 42 67.5 40 68 38 Z" fill="#38bdf8"/>
			</svg>
		</h1>
		<p class="subtitle-text text-pretty">Klik kartu bansos untuk melihat langkah-langkah detail dan cara klaim kodenya, fr fr! 🚀</p>
	</header>

	<!-- Grid List -->
	<section class="feed-section container">
		<div class="bansos-grid">
			{#each bansosList as item (item.id)}
				<article class="glass-card bansos-card">
					<div class="card-header">
						<div class="tags-container">
							{#each item.tags as tag}
								<span class="tag-badge">{tag}</span>
							{/each}
						</div>
						<span class="status-badge status-{item.status}">
							{item.status === 'active' ? '● Aktif' : item.status}
						</span>
					</div>

					<h2 class="card-title">{item.title}</h2>
					<p class="provider-label">Provider: <strong>{item.provider}</strong></p>
					
					<p class="card-desc text-pretty">{item.description}</p>
					
					<!-- Warning banner -->
					<div class="promo-important-banner flex-banner">
						<span class="banner-alert-icon">⚠️</span>
						<p>Khusus domain <strong>.DEV</strong> & <strong>.APP</strong>!</p>
					</div>

					<div class="card-actions">
						<a href="/list/{item.id}" class="btn-primary" onclick={(e) => spawnEmoji(e, '🚀')}>
							Lihat Cara Klaim Lengkap 🔎
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer container">
		<p>© 2026 <a href="/">bansos.dev</a>. Dipersembahkan oleh developer jelata.</p>
	</footer>

	<!-- Floating Emojis -->
	{#each floatingEmojis as emoji (emoji.id)}
		<span class="floating-emoji" style="left: {emoji.x}px; top: {emoji.y}px;">
			{emoji.text}
		</span>
	{/each}
</main>

<style>
	.page-wrapper {
		position: relative;
		padding-block: 3rem;
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
		z-index: 1;
	}

	.list-glow {
		top: -15rem;
		left: 50%;
		transform: translateX(-50%);
		background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 60%);
	}

	.btn-back-home {
		display: inline-flex;
		align-items: center;
		color: var(--text-secondary);
		border: 1px solid var(--border-color);
		padding: 0.4rem 0.8rem;
		border-radius: 0.5rem;
		background: var(--glass-bg);
		font-size: 0.85rem;
		font-weight: 600;
		width: fit-content;
		margin-bottom: 1rem;
		transition: background-color 0.2s, color 0.2s;
	}

	.btn-back-home:hover {
		color: var(--text-primary);
		background-color: rgba(255, 255, 255, 0.05);
	}

	.feed-header {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.section-title {
		font-size: var(--font-size-h2);
		font-weight: 800;
		letter-spacing: -0.02em;
		display: flex;
		align-items: center;
	}

	.subtitle-text {
		color: var(--text-secondary);
		font-size: 1rem;
	}

	.feed-section {
		min-height: 40vh;
	}

	.bansos-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.bansos-card {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.tags-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag-badge {
		font-size: 0.75rem;
		font-weight: 600;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--border-color);
		padding: 0.2rem 0.6rem;
		border-radius: 0.5rem;
		color: var(--text-secondary);
	}

	.status-badge {
		font-size: 0.75rem;
		font-weight: 750;
		padding: 0.2rem 0.6rem;
		border-radius: 0.5rem;
		background: rgba(16, 185, 129, 0.1);
		color: var(--color-success);
	}

	.card-title {
		font-size: var(--font-size-h3);
		font-weight: 700;
		line-height: 1.3;
	}

	.provider-label {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-top: -0.75rem;
	}

	.card-desc {
		color: var(--text-secondary);
	}

	.card-actions {
		margin-top: auto;
	}

	.card-actions .btn-primary {
		width: 100%;
	}

	/* Warning banner modifications for compact listing */
	.flex-banner {
		background: rgba(244, 63, 94, 0.08);
		border: 1px solid rgba(244, 63, 94, 0.4);
		border-radius: 0.5rem;
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.flex-banner p {
		margin: 0;
		font-size: 0.9rem;
		color: #fda4af;
	}

	.banner-alert-icon {
		animation: pulse 1.5s infinite alternate;
	}

	.inline-anxious {
		width: 2.25rem;
		height: 2.25rem;
		vertical-align: middle;
		margin-left: 0.5rem;
	}

	.anxious-icon:hover {
		animation: shake 0.4s infinite alternate;
	}

	.sweat-drop {
		animation: drip 1.8s infinite ease-in;
		transform-origin: center;
	}

	/* Floating emojis */
	.floating-emoji {
		position: fixed;
		pointer-events: none;
		z-index: 9999;
		font-size: 2.5rem;
		animation: float-up-fade 0.8s forwards cubic-bezier(0.1, 0.8, 0.3, 1);
		transform: translate(-50%, -50%);
	}

	@keyframes pulse {
		0% { transform: scale(1); }
		100% { transform: scale(1.1); }
	}

	@keyframes float-up-fade {
		0% {
			transform: translate(-50%, -50%) scale(0.6) rotate(0deg);
			opacity: 1;
		}
		100% {
			transform: translate(-50%, -50%) scale(1.4) translateY(-100px) rotate(15deg);
			opacity: 0;
		}
	}

	@keyframes shake {
		0% { transform: translate(1px, 1px) rotate(0deg); }
		10% { transform: translate(-1px, -2px) rotate(-1deg); }
		20% { transform: translate(-3px, 0px) rotate(1deg); }
		30% { transform: translate(0px, 2px) rotate(0deg); }
		40% { transform: translate(1px, -1px) rotate(1deg); }
		50% { transform: translate(-1px, 2px) rotate(-1deg); }
		60% { transform: translate(-3px, 1px) rotate(0deg); }
		70% { transform: translate(2px, 1px) rotate(-1deg); }
		80% { transform: translate(-1px, -1px) rotate(1deg); }
		90% { transform: translate(2px, 2px) rotate(0deg); }
		100% { transform: translate(1px, -2px) rotate(-1deg); }
	}

	@keyframes drip {
		0% { transform: translateY(-4px); opacity: 0; }
		20% { opacity: 1; }
		80% { opacity: 0.8; }
		100% { transform: translateY(12px); opacity: 0; }
	}

	@media (min-width: 48rem) {
		.bansos-grid {
			grid-template-columns: repeat(2, 1fr);
		}
		
		.bansos-card {
			max-width: none;
		}
	}
</style>
