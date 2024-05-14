<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { PageData } from './$types';
	import type { Action } from 'svelte/action';
	let open = false;

    interface Attributes {
        'onoutside'? : (event:CustomEvent) => void
    }
    type clickOutsideAction = Action<HTMLElement, any , Attributes>

	function openModal() {
		open = true;
	}
	function closeModal() {
		open = false;
	}

	const clickOutside: clickOutsideAction = (element) => {
		function handleClick(event: MouseEvent) {
			const targetEl = event.target as HTMLElement;
			if (element && !element.contains(targetEl)) {
				const clickOutsideEvent = new CustomEvent('outside');
				element.dispatchEvent(clickOutsideEvent);
			}
		}
		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	};
</script>

<div class="flex items-center justify-center">
	{#if open}
		<div class="background">
			<div class="modal" onoutside={closeModal} use:clickOutside transition:scale>
				<h2>Modal</h2>
				<p>What's up?</p>
			</div>
		</div>
	{/if}

	<button onclick={openModal}>Open</button>
</div>

<style>
	.background {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: center;
		& .modal {
			width: 400px;
			min-height: 300px;
			padding: 2rem;
			background-color: hsl(200 10% 10% / 80%);
			backdrop-filter: blur(20px);
			border: 1 px solid hsl(200 10% 12%);
			border-radius: 8px;
			box-shadow: 1px 1px 10px hsl(0 0% 0% / 20%);
			& p {
				margin-top: 1rem;
			}
		}
	}
</style>
