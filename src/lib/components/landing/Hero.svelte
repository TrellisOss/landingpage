<script lang="ts">
	const responseData = `{
  "pet": {
    "name": "Luna",
    "species": "canine",
    "breed": "Golden Retriever",
    "dob": "2020-03-15"
  },
  "conditions": [
    {
      "name": "Cranial cruciate ligament rupture",
      "normalized": "CCL tear",
      "diagnosed": "2023-11-02",
      "status": "resolved",
      "pre_existing": true
    }
  ],
  "vaccinations": [
    { "name": "Rabies", "date": "2024-01-15", "next_due": "2025-01-15" },
    { "name": "DHPP", "date": "2024-01-15", "next_due": "2025-01-15" }
  ],
  "medications": [
    { "name": "Carprofen", "dosage": "75mg", "frequency": "BID", "active": false }
  ]
}`;
</script>

<section class="pt-32 pb-8">
	<div class="mx-auto max-w-5xl px-6">
		<!-- Centered headline -->
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-[48px] font-bold leading-[1.08] tracking-[-0.03em] text-charcoal sm:text-[56px]">
				Pet health infrastructure<br />for the modern age.
			</h1>

			<p class="mt-5 text-[17px] leading-relaxed text-charcoal/50">
				One API to normalize vet records across systems, insurers, and apps &mdash; structured JSON from any PDF, photo, or fax.
			</p>

			<div class="mt-8 flex items-center justify-center gap-4">
				<a href="#cta" class="bg-forest text-cream font-semibold text-[14px] px-6 py-2.5 rounded-[8px] hover:bg-deep-forest transition-colors">
					Get API key
				</a>
				<a href="#features" class="text-[14px] text-charcoal/40 font-medium hover:text-charcoal transition-colors">
					See how it works &darr;
				</a>
			</div>
		</div>

		<!-- API response visualization -->
		<div class="mt-16 mx-auto max-w-2xl">
			<div class="rounded-xl border border-charcoal/[0.06] bg-charcoal shadow-2xl shadow-charcoal/10 overflow-hidden">
				<!-- Window chrome -->
				<div class="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
					<div class="flex gap-1.5">
						<div class="size-[10px] rounded-full bg-[#ef4444]"></div>
						<div class="size-[10px] rounded-full bg-[#f59e0b]"></div>
						<div class="size-[10px] rounded-full bg-[#4ade80]"></div>
					</div>
					<div class="ml-3 flex items-center gap-2">
						<span class="rounded bg-forest/20 px-1.5 py-0.5 font-mono text-[10px] font-bold text-forest">GET</span>
						<span class="font-mono text-[12px] text-white/30">/v1/pets/550e8400-e29b-41d4-a716-446655440000/records</span>
					</div>
				</div>
				<!-- Response body -->
				<div class="overflow-x-auto p-5">
					<pre class="font-mono text-[12px] leading-[1.7] text-white/60">{responseData}</pre>
				</div>
			</div>
		</div>
	</div>
</section>
