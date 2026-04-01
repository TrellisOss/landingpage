<script lang="ts">
	import { apiRoutes } from '$lib/data/api-demo';

	let activeRoute = $state(0);
	let route = $derived(apiRoutes[activeRoute]);
</script>

<section id="api" class="relative py-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-8 max-w-md">
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
				One API for everything
			</h2>
			<p class="mt-2 text-sm text-muted-foreground">
				Pet profiles, visit history, vaccinations, conditions, and insurance flags — all from structured vet records.
			</p>
		</div>

		<!-- Route tabs as a horizontal list -->
		<div class="mb-4 flex gap-1">
			{#each apiRoutes as r, i}
				<button
					class="rounded-md px-3 py-1.5 font-mono text-xs transition-colors {activeRoute === i
						? 'bg-primary text-primary-foreground'
						: 'text-muted-foreground hover:text-foreground'}"
					onclick={() => (activeRoute = i)}
				>
					{r.label}
				</button>
			{/each}
		</div>

		<!-- Request + Response -->
		<div class="grid gap-3 lg:grid-cols-2">
			<div class="overflow-hidden rounded-lg border border-border bg-[oklch(0.11_0.015_260)]">
				<div class="flex items-center gap-2 border-b border-border/50 px-4 py-2">
					<span class="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[10px] font-bold text-primary">{route.method}</span>
					<span class="font-mono text-xs text-muted-foreground">{route.path}</span>
				</div>
				<div class="overflow-x-auto p-4">
					<pre class="font-mono text-[13px] leading-relaxed"><code class="text-[oklch(0.8_0.02_260)]">{route.request}</code></pre>
				</div>
			</div>

			<div class="overflow-hidden rounded-lg border border-border bg-[oklch(0.11_0.015_260)]">
				<div class="flex items-center justify-between border-b border-border/50 px-4 py-2">
					<span class="font-mono text-xs text-muted-foreground">200 OK</span>
					<span class="font-mono text-[10px] text-muted-foreground/60">~120ms</span>
				</div>
				<div class="overflow-x-auto p-4">
					<pre class="font-mono text-[13px] leading-relaxed"><code class="text-[oklch(0.8_0.02_260)]">{route.response}</code></pre>
				</div>
			</div>
		</div>
	</div>
</section>
