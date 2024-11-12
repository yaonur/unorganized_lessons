<script>
	function printPage() {
		const iframe = document.getElementById('printFrame');
		iframe.contentWindow.print();
	}
</script>

<iframe id="printFrame" src="/cv" style="display:none;"></iframe>

<h1 class="mx-4 font-bold">Welcome to SvelteKit</h1>
<p class="mx-4 flex">
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>

<button on:click={printPage} class="mx-4 mt-4 rounded bg-blue-500 p-2 text-white"
	>Print Page as PDF</button
>

<style>
	@media print {
		@page {
			margin: 0;
		}
	}
</style>
