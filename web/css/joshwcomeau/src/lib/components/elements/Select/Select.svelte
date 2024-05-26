<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cva, type VariantProps } from 'class-variance-authority';
	import { cn } from '$utils/cn';
	import { createEventDispatcher } from 'svelte';

	const select = cva('select', {
		variants: {
			intent: {
				primary: 'bg-primary',
				secondary: 'bg-secondary'
			},
			size: {
				small: 'w-20 h-10',
				medium: 'w-26 h-14  '
			}
		},
		compoundVariants: [{ intent: 'primary', size: 'medium', class: 'primaryMedium' }]
	});
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}

	interface $Props extends VariantProps<typeof select> {
		value: string | number;
	}

	export let intent: $Props['intent'] = 'primary';
	export let size: $Props['size'] = 'medium';
	export let selectedValue: string | number = 'Some Select';
	export let options: Array<[string, number]> | Array<[string, string]> = [
		['Option 1', 1],
		['Option 2', 2],
		['Option 3', 3]
	];
	$: console.log('value insdie:', selectedValue);
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div {...$$props} class={cn(select({size,class: $$props.class }))} on:click={handleClick}>
	<select bind:value={selectedValue}>
		{#each options as option}
			<option value={option[1]}>{option[0]}</option>
		{/each}
	</select>
    <div class="bg-slate-600 py-3 px-4">{selectedValue}</div>
</div>

<style>
    div {
        position: relative;
        width: max-content;
    }
    select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* opacity: 0; */
    }
    div>div {
    }
</style>
