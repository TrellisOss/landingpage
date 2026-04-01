<script lang="ts">
	const cases = [
		{
			title: 'Claims automation',
			description: 'Process vet records in seconds. Structured diagnoses, medications, and pre-existing condition flags — ready for your claims pipeline.'
		},
		{
			title: 'Underwriting',
			description: 'Verified condition history from actual vet records. Know what\'s pre-existing before you write the policy.'
		},
		{
			title: 'Pet health apps',
			description: 'Give pet owners a structured health profile from any vet record. Vaccination timelines, condition history, medication tracking.'
		},
		{
			title: 'Fraud detection',
			description: 'Cross-reference records across clinics. Match microchip numbers, flag inconsistencies, verify real pets with real histories.'
		}
	];
</script>

<section id="use-cases" class="relative py-12">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid gap-px overflow-hidden rounded-lg border border-white/[0.06] sm:grid-cols-2">
			{#each cases as c, i}
				<div class="bg-white/[0.02] p-6 {i < 2 ? 'border-b border-white/[0.06]' : ''} {i % 2 === 0 ? 'sm:border-r sm:border-white/[0.06]' : ''}">
					<h3 class="text-sm font-semibold text-cream">{c.title}</h3>
					<p class="mt-1.5 text-xs leading-relaxed text-warm-grey/70">{c.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
