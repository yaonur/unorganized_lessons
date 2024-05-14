<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Button from '$elements/Button';
	let show: Boolean;
	let content: String;
	// $: console.log(show)
	function greet(element: HTMLElement, content?: String) {
		console.log('element mounted');

		const greetEvent = new CustomEvent('greet', { detail: 'hi with event' });
		element.dispatchEvent(greetEvent);
		element.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 1300,
			fill: 'forwards'
		});
		return {
			update(content: String) {
				console.log(content);
			},
			destroy() {
				console.log('bye');
			}
		};
	}
	function customEventHandler (event:CustomEvent) {
		console.log(event.detail)
	}
</script>

<label for="">
	<input bind:checked={show} type="checkbox" />
	Toggle
</label>
<br />
{#if show}
	<input class="border border-blue-200 bg-slate-100" type="text" bind:value={content} />

	<div on:greet={customEventHandler} use:greet={content}>Action</div>
{/if}