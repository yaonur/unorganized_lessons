<script lang="ts">
	import VisuallyHidden from "./VisuallyHidden.svelte";
    import { cva, type VariantProps } from "class-variance-authority";
    import {cn} from "$utils/cn"
    import {createEventDispatcher} from "svelte";

    const progressBar = cva("bar", {
        variants: {
            intent: {
                primary: "bg-primary",
                secondary: "bg-secondary",
            },
            size: {
                small: "h-4",
                medium: "h-8",
            },
			
			
        },
        compoundVariants: [
            { intent: "primary", size: "medium", class: "primaryMedium" },
        ],
    });
    const dispatch = createEventDispatcher();


    interface $$Props extends HTMLProgressElement, VariantProps<typeof progressBar> {}

    /**
     * For Svelte components, we recommend setting your defaultVariants within
     * Svelte props (which are `undefined` by default)
     */
    export let intent: $$Props["intent"] = "primary";
    export let size: $$Props["size"] = "small";
    export let value: $$Props["value"] = 20;

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div {...$$props} class={cn(progressBar({class: $$props.class }),"bg-slate-300 shadow-md shadow-slate-300 rounded-md overflow-hidden")}
	role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
	<VisuallyHidden>{value}%</VisuallyHidden>
	<div class={cn(progressBar({intent,size}),"rounded-tl-md rounded-bl-md")} style="width:{value}%"></div>
</div>

<style>

</style>