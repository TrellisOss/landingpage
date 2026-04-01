<script lang="ts">
	import { apiRoutes } from '$lib/data/api-demo';

	let activeRoute = $state(0);
	let route = $derived(apiRoutes[activeRoute]);
</script>

<section id="api" class="relative py-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-8 max-w-md">
			<h2 class="text-h2 text-cream">
				One API for everything
			</h2>
			<p class="mt-2 text-sm text-warm-grey/70">
				Pet profiles, visit history, vaccinations, conditions, and insurance flags — all from structured vet records.
			</p>
		</div>

		<!-- Route tabs -->
		<div class="mb-4 flex gap-1">
			{#each apiRoutes as r, i}
				<button
					class="rounded-[7px] px-3 py-1.5 font-mono text-xs transition-colors {activeRoute === i
						? 'bg-sprout text-[#0a3520] font-semibold'
						: 'text-cream/40 hover:text-cream/70'}"
					onclick={() => (activeRoute = i)}
				>
					{r.label}
				</button>
			{/each}
		</div>

		<!-- Request + Response -->
		<div class="grid gap-3 lg:grid-cols-2">
			<div class="overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0f14]">
				<div class="flex items-center gap-2 border-b border-white/[0.04] px-4 py-2">
					<span class="rounded bg-sprout/15 px-1.5 py-0.5 font-mono text-[10px] font-bold text-sprout">{route.method}</span>
					<span class="font-mono text-xs text-cream/40">{route.path}</span>
				</div>
				<div class="overflow-x-auto p-4">
					<pre class="font-mono text-[13px] leading-relaxed"><code class="text-cream/65">{route.request}</code></pre>
				</div>
			</div>

			<div class="overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0f14]">
				<div class="flex items-center justify-between border-b border-white/[0.04] px-4 py-2">
					<span class="font-mono text-xs text-cream/40">200 OK</span>
					<span class="font-mono text-[10px] text-cream/20">~120ms</span>
				</div>
				<div class="overflow-x-auto p-4">
					<pre class="font-mono text-[13px] leading-relaxed"><code class="text-cream/65">{route.response}</code></pre>
				</div>
			</div>
		</div>
	</div>
</section>
