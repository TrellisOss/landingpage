<script lang="ts">
	const features = [
		{
			title: 'SOAP note parsing',
			description: 'Extracts diagnoses, medications, and treatment plans from veterinary SOAP notes automatically.'
		},
		{
			title: 'Terminology normalization',
			description: 'CCL tear, ACL tear, cranial cruciate ligament rupture — mapped to one canonical condition.'
		},
		{
			title: 'Pre-existing flags',
			description: 'Condition timeline relative to policy dates. Know what\'s pre-existing before you write the policy.'
		},
		{
			title: 'Multi-visit timeline',
			description: 'Reconstructs a pet\'s complete health history across clinics, visits, and document types.'
		},
		{
			title: 'Any input format',
			description: 'PDFs, photos, scanned faxes, handwritten notes. OCR extraction handles it all.'
		},
		{
			title: 'Embeddable widget',
			description: 'Drop in Trellis Link. Pet owners upload records. You receive structured JSON via webhook.'
		}
	];
</script>

<section id="features" class="py-24">
	<div class="mx-auto max-w-5xl px-6">
		<div class="mx-auto max-w-lg text-center">
			<p class="text-[11px] font-medium uppercase tracking-[0.08em] text-forest">How it works</p>
			<h2 class="mt-3 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-charcoal">
				Raw records in, clean data out
			</h2>
			<p class="mt-3 text-[15px] text-charcoal/45 leading-relaxed">
				Upload any vet document. Our AI pipeline returns structured, normalized JSON.
			</p>
		</div>

		<div class="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<div>
					<h3 class="text-[15px] font-semibold text-charcoal">{feature.title}</h3>
					<p class="mt-1.5 text-[14px] leading-relaxed text-charcoal/45">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
