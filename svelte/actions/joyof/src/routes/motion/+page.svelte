<script lang="ts">
	import type { Action } from 'svelte/action';
	import { animate, stagger, type AnimationControls, type AnimationOptions } from 'motion';
	interface TextAnimationOptions {
		options: AnimationOptions;
		action: ({animation}: { animation: AnimationControls }) => void;
	}
	interface Attributes {
		onfinished?: (event: CustomEvent) => void;
	}
	type TextAction = Action<HTMLElement, TextAnimationOptions, Attributes>;

	const text: TextAction = (element: HTMLElement,{options, action}) => {
		const letters = element.innerText.trim().split('');

		element.innerHTML = '';

		letters.forEach((letter) => {
			element.innerHTML += `<span class="letter"> ${letter}</span> `;
		});
		const animation = animate(
			[...element.children],
			{
				color: 'orangered',
				y: [0, 30, -60, 0],
				rotate: 360
			},
			{ duration: 1, delay: stagger(0.1), ...options }
		);
		action({ animation });
		animation.finished.then(() => {
			element.dispatchEvent(new CustomEvent('finished'));
		});
	};
	let controls: AnimationControls;
	let time = 0;
	$: if (controls) {
		controls.currentTime = time;
	}
</script>

<div
	onfinished={() => console.log('finished')}
	use:text={{
		options: { duration: 2 },
		action({ animation }) {
			// animation.stop();
			controls = animation
		}
	}}
	class="m-auto w-32 py-12 text-center"
>
	Svelte
</div>

{#if controls}
	<input bind:value={time} min={0} max={controls.duration} type="range" step="0.1">
{/if}

