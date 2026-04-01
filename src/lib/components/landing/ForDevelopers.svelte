<script lang="ts">
	import { inview } from '$lib/actions/inview';
	import { pythonSample, nodeSample } from '$lib/data/api-demo';

	let activeTab = $state('python');

	const tabs = [
		{ id: 'python', label: 'Python' },
		{ id: 'node', label: 'Node.js' }
	] as const;

	const codeMap: Record<string, string> = {
		python: pythonSample,
		node: nodeSample
	};

	const features = [
		'RESTful API with JSON responses',
		'Embeddable Link widget for record collection',
		'Webhook notifications on record processing',
		'Veterinary terminology normalization',
		'Multi-visit timeline reconstruction',
		'Insurance-specific extraction flags'
	];
</script>

<section id="developers" class="relative py-8">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid items-center gap-8 lg:grid-cols-2">
			<!-- Left: SDK samples -->
			<div
				class="opacity-0 translate-y-4 transition-all duration-500 in-view:opacity-100 in-view:translate-y-0"
				use:inview
			>
				<div class="overflow-hidden rounded-lg border border-border bg-card/50">
					<div class="flex border-b border-border">
						{#each tabs as tab}
							<button
								class="px-3 py-2 text-xs font-medium transition-colors {activeTab === tab.id
									? 'border-b-2 border-primary text-primary'
									: 'text-muted-foreground hover:text-foreground'}"
								onclick={() => (activeTab = tab.id)}
							>
								{tab.label}
							</button>
						{/each}
					</div>
					<div class="overflow-x-auto p-3">
						<pre class="font-mono text-[12px] leading-relaxed"><code class="text-[oklch(0.85_0.02_260)]">{codeMap[activeTab]}</code></pre>
					</div>
				</div>
			</div>

			<!-- Right: Copy + features -->
			<div
				class="opacity-0 translate-y-4 transition-all duration-500 in-view:opacity-100 in-view:translate-y-0"
				style="transition-delay: 100ms"
				use:inview
			>
				<p class="mb-2 text-xs font-medium tracking-wide text-primary uppercase">SDKs</p>
				<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
					Ship in minutes, not months
				</h2>
				<p class="mt-3 text-sm text-muted-foreground">
					Official SDKs for Python and Node.js. Embed the widget, fetch structured data — no ML expertise required.
				</p>

				<ul class="mt-5 space-y-2">
					{#each features as feature}
						<li class="flex items-center gap-2 text-xs">
							<svg class="size-3.5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-muted-foreground">{feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
