<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/landing/Navbar.svelte';
	import AnimatedBackground from '$lib/components/landing/AnimatedBackground.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Trellis.pet — Plaid for Vet Data</title>
	<meta name="description" content="Extract structured pet health records from any document. One API call turns vet PDFs into clean JSON — diagnoses, medications, vaccinations, pre-existing conditions." />
</svelte:head>

<AnimatedBackground />
<Navbar />
{@render children()}
