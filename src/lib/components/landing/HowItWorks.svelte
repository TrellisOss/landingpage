<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const steps = [
		{
			number: '01',
			title: 'Upload Records',
			description: 'Pet owners upload vet records through your app — PDFs, photos, scanned documents.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>`
		},
		{
			number: '02',
			title: 'AI Extraction',
			description: 'Our pipeline parses SOAP notes, invoices, and lab results with veterinary terminology normalization.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>`
		},
		{
			number: '03',
			title: 'Structured Data',
			description: 'Receive clean JSON — diagnoses, medications, vaccination history, pre-existing condition flags.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>`
		}
	];
</script>

<section id="how-it-works" class="relative py-8">
	<div class="mx-auto max-w-6xl px-6">
		<div
			class="mb-6 text-center opacity-0 translate-y-4 transition-all duration-500 in-view:opacity-100 in-view:translate-y-0"
			use:inview
		>
			<p class="text-label uppercase text-sprout">How It Works</p>
			<h2 class="mt-2 text-h2 text-cream">
				Three steps to structured data
			</h2>
		</div>

		<div class="grid gap-4 md:grid-cols-3">
			{#each steps as step, i}
				<div
					class="group relative opacity-0 translate-y-4 transition-all duration-500 in-view:opacity-100 in-view:translate-y-0"
					style="transition-delay: {i * 100}ms"
					use:inview
				>
					<div class="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 backdrop-blur-sm transition-colors hover:border-white/[0.1]">
						<div class="mb-3 flex items-center gap-2">
							<div class="flex size-8 items-center justify-center rounded-md bg-sprout/10 text-sprout">
								{@html step.icon}
							</div>
							<span class="font-mono text-xs text-cream/25">{step.number}</span>
						</div>
						<h3 class="mb-1 text-sm font-semibold text-cream">{step.title}</h3>
						<p class="text-xs leading-relaxed text-warm-grey/70">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
