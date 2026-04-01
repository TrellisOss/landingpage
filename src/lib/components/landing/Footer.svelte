<script lang="ts">
	const columns = [
		{
			title: 'Product',
			links: [
				{ label: 'Trellis Link', href: '#' },
				{ label: 'API Reference', href: '#' },
				{ label: 'Pricing', href: '#' }
			]
		},
		{
			title: 'Developers',
			links: [
				{ label: 'Documentation', href: '#' },
				{ label: 'SDKs', href: '#' },
				{ label: 'Status', href: '#' }
			]
		},
		{
			title: 'Company',
			links: [
				{ label: 'About', href: '#' },
				{ label: 'Blog', href: '#' },
				{ label: 'Contact', href: '#' }
			]
		}
	];
</script>

<!-- CTA -->
<section id="cta" class="py-20">
	<div class="mx-auto max-w-5xl px-6 text-center">
		<h2 class="text-[32px] font-bold tracking-[-0.02em] text-charcoal">Start building today</h2>
		<p class="mt-2 text-[15px] text-charcoal/40">Free during beta. No credit card required.</p>
		<div class="mt-6">
			<a href="#" class="inline-block bg-forest text-cream font-semibold text-[14px] px-6 py-2.5 rounded-[8px] hover:bg-deep-forest transition-colors">
				Get API key &rarr;
			</a>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-charcoal/[0.06] py-10">
	<div class="mx-auto max-w-5xl px-6">
		<div class="flex flex-col gap-8 sm:flex-row sm:justify-between">
			<!-- Brand -->
			<div class="max-w-[200px]">
				<a href="/" class="flex items-center gap-2" aria-label="trellis.pet home">
					<div class="h-[18px] w-auto" style="color: #1d9e75; --mark-bg: #f5f0e8;">
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
					<span class="text-[14px] font-bold tracking-[-0.3px] leading-none text-charcoal">
						trellis<span class="font-light text-deep-forest opacity-50">.pet</span>
					</span>
				</a>
				<p class="mt-3 text-[13px] leading-relaxed text-charcoal/30">
					Pet health records infrastructure for developers.
				</p>
			</div>

			<!-- Link columns -->
			<div class="flex gap-16">
				{#each columns as column}
					<div>
						<h4 class="text-[11px] font-medium uppercase tracking-[0.08em] text-charcoal/30">{column.title}</h4>
						<ul class="mt-3 space-y-2">
							{#each column.links as link}
								<li>
									<a href={link.href} class="text-[13px] text-charcoal/40 transition-colors hover:text-charcoal">{link.label}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>

		<div class="mt-10 flex items-center justify-between border-t border-charcoal/[0.06] pt-6">
			<p class="text-[12px] text-charcoal/25">&copy; {new Date().getFullYear()} Trellis Pet, Inc.</p>
			<div class="flex gap-5 text-[12px] text-charcoal/25">
				<a href="#" class="transition-colors hover:text-charcoal/50">Twitter</a>
				<a href="#" class="transition-colors hover:text-charcoal/50">GitHub</a>
				<a href="#" class="transition-colors hover:text-charcoal/50">LinkedIn</a>
			</div>
		</div>
	</div>
</footer>
