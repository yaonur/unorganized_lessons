<script>
	import '../app.css'
</script>
<section class="app ">
	<slot/>
</section>
<!-- <section class="links">
	<a href="/">Home</a>
	<a href="/basic">basic</a>
	<a href="/cursor-events">Cursor Events</a>
	<a href="/update">update</a>
	<a href="/destory">Destory</a>
	<a href="/tooltip">Tooltip</a>
</section> -->
<style>
	
	.app {
		flex:1;
	}
	
	.links {
		padding: 1rem;
	}
	:global(body) {
		margin:0;
		display:flex;
		flex-direction: column;;
		height: 100svh;
		background-color: hsl(237, 9%, 48%);
	}
</style>