<script lang="ts">
</script>

<h1>About me</h1>
<p>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nihil possimus nesciunt officiis
	nemo deserunt voluptate! Quo suscipit deserunt numquam voluptatibus, qui adipisci explicabo nihil
	aliquid asperiores, illo impedit dolorum?
</p>

<p id="hidden-text" class="visually-hidden "> some hidden text for readers</p>

<style>
	.visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        border: 0;
        clip: rect(0, 0, 0, 0);
        overflow: hidden;
    }
	@media print {
		@page {
			margin: 0;
		}
	}
</style>
