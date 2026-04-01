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

<div class="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-[#0c0f14]">
	{#if label}
		<div class="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
			<div class="flex gap-1.5">
				<div class="size-2.5 rounded-full bg-[#ef4444]/70"></div>
				<div class="size-2.5 rounded-full bg-[#f59e0b]/70"></div>
				<div class="size-2.5 rounded-full bg-[#4ade80]/70"></div>
			</div>
			<span class="ml-2 font-mono text-xs text-cream/30">{label}</span>
		</div>
	{/if}
	<div class="overflow-x-auto p-4">
		<pre class="font-mono text-[13px] leading-relaxed"><code class="text-cream/70">{displayCode}{#if cursor}<span class="animate-pulse text-sprout">|</span>{/if}</code></pre>
	</div>
	{@render children?.()}
</div>
