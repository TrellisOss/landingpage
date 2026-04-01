<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';

	const columns = [
		{
			title: 'Products',
			links: [
				{ label: 'Trellis Link', href: '#' },
				{ label: 'Pet Health API', href: '#api' },
				{ label: 'Insurance Flags', href: '#api' },
				{ label: 'Pricing', href: '#' }
			]
		},
		{
			title: 'Developers',
			links: [
				{ label: 'Documentation', href: '#' },
				{ label: 'API Reference', href: '#api' },
				{ label: 'SDKs', href: '#' },
				{ label: 'Status', href: '#' }
			]
		},
		{
			title: 'Company',
			links: [
				{ label: 'About', href: '#' },
				{ label: 'Blog', href: '#' },
				{ label: 'Careers', href: '#' },
				{ label: 'Contact', href: '#' }
			]
		},
		{
			title: 'Legal',
			links: [
				{ label: 'Privacy', href: '#' },
				{ label: 'Terms', href: '#' },
				{ label: 'Security', href: '#' },
				{ label: 'DPA', href: '#' }
			]
		}
	];
</script>

<!-- CTA -->
<section id="cta" class="py-16">
	<div class="mx-auto max-w-6xl px-6">
		<div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h2 class="text-2xl font-bold tracking-tight">Get started for free</h2>
				<p class="mt-1 text-sm text-muted-foreground">Free during beta. No credit card.</p>
			</div>
			<div class="flex gap-3">
				<Button size="lg" class="rounded-md px-6">Get API Key</Button>
				<Button variant="outline" size="lg" class="rounded-md px-6">Talk to us</Button>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-border py-10">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
			<div>
				<a href="/" class="text-lg font-semibold tracking-tight">
					<span class="text-primary">trellis</span><span class="text-muted-foreground">.pet</span>
				</a>
				<p class="mt-2 text-xs leading-relaxed text-muted-foreground">
					Pet health records infrastructure.
				</p>
			</div>

			{#each columns as column}
				<div>
					<h4 class="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">{column.title}</h4>
					<ul class="space-y-1.5">
						{#each column.links as link}
							<li>
								<a href={link.href} class="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-8 flex items-center justify-between border-t border-border pt-6">
			<p class="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Trellis Pet, Inc.</p>
			<div class="flex gap-4 text-xs text-muted-foreground">
				<a href="#" class="transition-colors hover:text-foreground">Twitter</a>
				<a href="#" class="transition-colors hover:text-foreground">GitHub</a>
				<a href="#" class="transition-colors hover:text-foreground">LinkedIn</a>
			</div>
		</div>
	</div>
</footer>
