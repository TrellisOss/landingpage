<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import CodeBlock from './CodeBlock.svelte';
	import { widgetEmbed } from '$lib/data/api-demo';
</script>

<section class="relative overflow-hidden pt-14">
	<div class="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-12 pb-6 lg:grid-cols-[1fr_1.2fr] lg:pt-20">
		<!-- Left: Copy -->
		<div>
			<p class="mb-3 text-sm text-muted-foreground">
				Pet health records infrastructure
			</p>

			<h1 class="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
				The easiest way to integrate <span class="text-primary">pet health data</span>
			</h1>

			<p class="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
				Embed our widget. Pet owners link their vet records. You get clean, structured JSON.
			</p>

			<div class="mt-6 flex gap-3">
				<Button size="lg" href="#cta" class="rounded-md px-5">
					Get API Key
				</Button>
				<Button variant="outline" size="lg" href="#api" class="rounded-md px-5">
					See the API
				</Button>
			</div>
		</div>

		<!-- Right: Widget Embed Code -->
		<div>
			<CodeBlock code={widgetEmbed} lang="html" label="your-app.html" animate={true} />
		</div>
	</div>
</section>
