<script lang="ts">
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 20;
	}
</script>

<svelte:window onscroll={handleScroll} />

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {scrolled
		? 'bg-cream/80 backdrop-blur-xl border-b border-charcoal/[0.06]'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex h-[60px] max-w-5xl items-center justify-between px-6">
		<!-- Wordmark -->
		<a href="/" class="flex items-center gap-2.5" aria-label="trellis.pet home">
			<div class="h-6 w-auto" style="color: #1d9e75; --mark-bg: {scrolled ? 'rgba(245,240,232,0.8)' : '#f5f0e8'};">
				<svg viewBox="0 0 92 108" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="trellis mark" class="h-full w-auto">
					<line x1="4"  y1="4"  x2="4"  y2="104" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
					<line x1="21" y1="4"  x2="21" y2="104" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-opacity="0.32"/>
					<line x1="38" y1="4"  x2="38" y2="104" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
					<line x1="55" y1="4"  x2="55" y2="104" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-opacity="0.32"/>
					<line x1="72" y1="4"  x2="72" y2="104" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
					<line x1="89" y1="4"  x2="89" y2="104" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-opacity="0.32"/>
					<rect x="0" y="17"  width="92" height="13" rx="6.5" fill="var(--mark-bg, #f5f0e8)"/>
					<rect x="0" y="36"  width="92" height="13" rx="6.5" fill="var(--mark-bg, #f5f0e8)"/>
					<rect x="0" y="55"  width="92" height="13" rx="6.5" fill="var(--mark-bg, #f5f0e8)"/>
					<rect x="0" y="74"  width="92" height="13" rx="6.5" fill="var(--mark-bg, #f5f0e8)"/>
					<rect x="0" y="93"  width="92" height="13" rx="6.5" fill="var(--mark-bg, #f5f0e8)"/>
					<line x1="0" y1="23.5" x2="92" y2="23.5" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-opacity="0.68"/>
					<line x1="0" y1="42.5" x2="92" y2="42.5" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-opacity="0.68"/>
					<line x1="0" y1="61.5" x2="92" y2="61.5" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-opacity="0.68"/>
					<line x1="0" y1="80.5" x2="92" y2="80.5" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-opacity="0.68"/>
					<line x1="0" y1="99.5" x2="92" y2="99.5" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-opacity="0.68"/>
				</svg>
			</div>
			<span class="text-[17px] font-bold tracking-[-0.4px] leading-none text-charcoal">
				trellis<span class="font-light text-deep-forest opacity-50">.pet</span>
			</span>
		</a>

		<!-- Center links -->
		<div class="hidden items-center gap-8 text-[14px] text-charcoal/40 md:flex">
			<a href="#features" class="transition-colors hover:text-charcoal">Docs</a>
			<a href="#features" class="transition-colors hover:text-charcoal">API Reference</a>
			<a href="#" class="transition-colors hover:text-charcoal">Pricing</a>
			<a href="#" class="transition-colors hover:text-charcoal">Blog</a>
		</div>

		<!-- CTA right -->
		<a href="#cta" class="bg-forest text-cream font-semibold text-[13px] px-4 py-2 rounded-[7px] hover:bg-deep-forest transition-colors">
			Get API key &rarr;
		</a>
	</div>
</nav>
