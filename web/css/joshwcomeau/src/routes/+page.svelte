<script lang='ts'> 
	import { dev,browser } from "$app/environment"
	import {ProgressBar} from "$elements/ProgressBar";
	import Select from "$elements/Select/Select.svelte";
	console.log("isDev:",dev)
	console.log("browser:",browser)
	let options: Array<[string, number]> | Array<[string, string]> = [["Option 1", 1], ["Option 2", 2], ["Option 3", 3]]
	let value : string | number = 1;
	$: console.log("value:",value)
</script>
<div class="flex flex-col justify-center  gap-8">

	<ProgressBar value={40}></ProgressBar>
	<Select {options}  bind:selectedValue={value}></Select>
</div>

