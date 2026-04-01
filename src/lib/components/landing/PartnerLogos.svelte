<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const partners = [
		'PetHealth Co',
		'InsurePaws',
		'VetConnect',
		'PawShield',
		'TailGuard',
		'FurCare'
	];
</script>

<section class="relative py-6">
	<div class="mx-auto max-w-6xl px-6">
		<div
			class="opacity-0 transition-all duration-500 in-view:opacity-100"
			use:inview
		>
			<p class="mb-4 text-center text-xs text-muted-foreground">
				Trusted by leading pet health companies
			</p>

			<div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
				{#each partners as partner}
					<div class="text-sm font-semibold tracking-tight text-muted-foreground/30 select-none">
						{partner}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
