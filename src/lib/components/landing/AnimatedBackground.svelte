<script lang="ts">
	// Full-page animated background with gradient blobs + blurred trellis pattern
</script>

<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
	<!-- Base dark -->
	<div class="absolute inset-0 bg-background"></div>

	<!-- Animated gradient blobs — large, slow-moving, heavily blurred for soft transitions -->
	<div class="absolute inset-0">
		<div class="gradient-blob blob-1"></div>
		<div class="gradient-blob blob-2"></div>
		<div class="gradient-blob blob-3"></div>
	</div>

	<!-- Blurred trellis / lattice pattern -->
	<svg class="absolute inset-0 h-full w-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<pattern id="trellis" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
				<!-- Diamond lattice / trellis -->
				<line x1="0" y1="30" x2="30" y2="0" stroke="white" stroke-width="0.5" />
				<line x1="30" y1="0" x2="60" y2="30" stroke="white" stroke-width="0.5" />
				<line x1="60" y1="30" x2="30" y2="60" stroke="white" stroke-width="0.5" />
				<line x1="30" y1="60" x2="0" y2="30" stroke="white" stroke-width="0.5" />
			</pattern>
			<filter id="trellis-blur">
				<feGaussianBlur stdDeviation="1.5" />
			</filter>
		</defs>
		<rect width="100%" height="100%" fill="url(#trellis)" filter="url(#trellis-blur)" />
	</svg>

	<!-- Vignette fade at edges so pattern doesn't tile abruptly -->
	<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_80%)]"></div>
</div>

<style>
	.gradient-blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(120px);
		will-change: transform;
	}

	.blob-1 {
		width: 60vw;
		height: 60vh;
		top: -15vh;
		left: -10vw;
		background: oklch(0.22 0.08 260 / 0.6);
		animation: drift-1 25s ease-in-out infinite;
	}

	.blob-2 {
		width: 50vw;
		height: 50vh;
		bottom: -10vh;
		right: -10vw;
		background: oklch(0.18 0.07 165 / 0.5);
		animation: drift-2 30s ease-in-out infinite;
	}

	.blob-3 {
		width: 40vw;
		height: 40vh;
		top: 40%;
		left: 30%;
		background: oklch(0.16 0.05 200 / 0.4);
		animation: drift-3 35s ease-in-out infinite;
	}

	@keyframes drift-1 {
		0%, 100% { transform: translate(0, 0) scale(1); }
		33% { transform: translate(8vw, 5vh) scale(1.1); }
		66% { transform: translate(-3vw, 8vh) scale(0.95); }
	}

	@keyframes drift-2 {
		0%, 100% { transform: translate(0, 0) scale(1); }
		33% { transform: translate(-6vw, -4vh) scale(1.05); }
		66% { transform: translate(5vw, -8vh) scale(1.1); }
	}

	@keyframes drift-3 {
		0%, 100% { transform: translate(0, 0) scale(1); }
		33% { transform: translate(5vw, -6vh) scale(1.08); }
		66% { transform: translate(-7vw, 3vh) scale(0.92); }
	}
</style>
