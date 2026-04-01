<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/landing/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Trellis.pet — Plaid for Vet Data</title>
	<meta name="description" content="One API to normalize and structure pet health records across vet systems, insurers, and apps." />
</svelte:head>

<!-- Subtle lattice texture background -->
<div class="pointer-events-none fixed inset-0 -z-10">
	<div class="absolute inset-0 bg-cream"></div>
	<svg class="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="trellis" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
				<line x1="0" y1="30" x2="30" y2="0" stroke="#1a2e25" stroke-width="0.5" />
				<line x1="30" y1="0" x2="60" y2="30" stroke="#1a2e25" stroke-width="0.5" />
				<line x1="60" y1="30" x2="30" y2="60" stroke="#1a2e25" stroke-width="0.5" />
				<line x1="30" y1="60" x2="0" y2="30" stroke="#1a2e25" stroke-width="0.5" />
			</pattern>
			<filter id="trellis-blur">
				<feGaussianBlur stdDeviation="0.8" />
			</filter>
		</defs>
		<rect width="100%" height="100%" fill="url(#trellis)" filter="url(#trellis-blur)" />
	</svg>
</div>

<Navbar />
{@render children()}
