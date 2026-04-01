<script lang="ts">
	import { inview } from '$lib/actions/inview';

	const signals = [
		{
			title: 'SOC 2 Type II',
			description: 'Enterprise-grade security controls with annual audits.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`
		},
		{
			title: 'Encrypted At Rest',
			description: 'AES-256 encryption. TLS 1.3 in transit.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>`
		},
		{
			title: 'Data Isolation',
			description: 'Per-partner isolation. Records never co-mingled.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>`
		},
		{
			title: 'HIPAA-Aligned',
			description: 'Healthcare-grade privacy. BAA available.',
			icon: `<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>`
		}
	];
</script>

<section class="relative py-8">
	<div class="mx-auto max-w-6xl px-6">
		<div
			class="mb-6 text-center opacity-0 translate-y-4 transition-all duration-500 in-view:opacity-100 in-view:translate-y-0"
			use:inview
		>
			<p class="mb-2 text-xs font-medium tracking-wide text-primary uppercase">Security</p>
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
				Enterprise-ready from day one
			</h2>
		</div>

		<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
			{#each signals as signal, i}
				<div
					class="opacity-0 translate-y-4 transition-all duration-500 in-view:opacity-100 in-view:translate-y-0"
					style="transition-delay: {i * 75}ms"
					use:inview
				>
					<div class="h-full rounded-lg border border-border bg-card/50 p-4 text-center backdrop-blur-sm">
						<div class="mx-auto mb-2 flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary">
							{@html signal.icon}
						</div>
						<h3 class="mb-1 text-xs font-semibold">{signal.title}</h3>
						<p class="text-[11px] leading-relaxed text-muted-foreground">{signal.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
