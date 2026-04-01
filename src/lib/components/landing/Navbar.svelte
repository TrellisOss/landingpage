<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-background/80 border-b border-border backdrop-blur-xl'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
		<a href="/" class="text-lg font-semibold tracking-tight">
			<span class="text-primary">trellis</span><span class="text-muted-foreground">.pet</span>
		</a>

		<div class="hidden items-center gap-6 md:flex">
			<a href="#api" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Products</a>
			<a href="#use-cases" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Use Cases</a>
			<a href="#api" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Developers</a>
			<a href="#" class="text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
		</div>

		<div class="flex items-center gap-3">
			<Button variant="ghost" size="sm" href="#api">Docs</Button>
			<Button size="sm" href="#cta">Get API Key</Button>
		</div>
	</div>
</nav>
