<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		code,
		lang = 'json',
		label,
		animate = false,
		animationDelay = 0,
		children
	}: {
		code: string;
		lang?: string;
		label?: string;
		animate?: boolean;
		animationDelay?: number;
		children?: Snippet;
	} = $props();

	let visibleLength = $state(animate ? 0 : code.length);
	let started = $state(!animate);
	let cursor = $state(animate);

	$effect(() => {
		if (!animate) return;

		const timer = setTimeout(() => {
			started = true;
			let i = 0;
			const speed = lang === 'bash' ? 12 : 4;
			const interval = setInterval(() => {
				i += Math.floor(Math.random() * 3) + 1;
				if (i >= code.length) {
					i = code.length;
					clearInterval(interval);
					cursor = false;
				}
				visibleLength = i;
			}, speed);

			return () => clearInterval(interval);
		}, animationDelay);

		return () => clearTimeout(timer);
	});

	let displayCode = $derived(code.slice(0, visibleLength));
</script>

<div class="group relative overflow-hidden rounded-lg border border-border bg-[oklch(0.12_0.015_260)]">
	{#if label}
		<div class="flex items-center gap-2 border-b border-border px-4 py-2.5">
			<div class="flex gap-1.5">
				<div class="size-2.5 rounded-full bg-[oklch(0.65_0.2_25)]"></div>
				<div class="size-2.5 rounded-full bg-[oklch(0.8_0.15_85)]"></div>
				<div class="size-2.5 rounded-full bg-[oklch(0.7_0.2_145)]"></div>
			</div>
			<span class="ml-2 font-mono text-xs text-muted-foreground">{label}</span>
		</div>
	{/if}
	<div class="overflow-x-auto p-4">
		<pre class="font-mono text-[13px] leading-relaxed"><code class="text-[oklch(0.85_0.02_260)]">{displayCode}{#if cursor}<span class="animate-pulse text-primary">|</span>{/if}</code></pre>
	</div>
	{@render children?.()}
</div>
