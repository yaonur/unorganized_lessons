<script lang="ts">
	import { Accordion, AccordionItem } from '$ui/Accordion';
	import { availableLanguageTags } from '$paraglide/runtime';
	import * as m from '$paraglide/messages';
	import { page } from '$app/stores';
	import { route } from '$lib/i18n-routing';
	const items = [
		{
			title: 'Item 0',
			content: 'Content 0'
		},
		{
			title: 'Item 1',
			content: 'Content 1'
		},
		{
			title: 'Item 2',
			content: 'Content 2'
		}
	];
</script>

<article class="recipe">
	<h2>Chicken Vindaloo</h2>
	<p>
		“Vindaloo” is a popular Indian <a href="">curry dish</a> that calls for meat to be marinated in a
		highly flavorful spicy mixture with vinegar, then quickly cooked up when you’re ready to eat.
	</p>
	<p>
		While this dish has a long list of spices, most are quite common in the average spice rack. If
		you find you're missing one, it's not a deal breaker. You will still have a lovely, fragrant
		curry.
	</p>
	<aside>
		<p>
			Quick warning: <strong>this recipe is <em>spicy</em></strong>. <a href="">Click here</a> for an
			alternative recipe with less heat.
		</p>
	</aside>
</article>

<style>
	/* TODO */
	article  a {
		text-decoration: none;
		color: deeppink;
	}
	article  a:hover {
		text-decoration: underline;
	}
	aside a {
		color: hsl(0, 0%, 56%);
		text-decoration: underline;
	}
	aside a:hover {
		text-decoration: none;
	}
	
	body {
		padding: 16px 32px;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 24px;
	}

	aside p:last-of-type {
		margin-bottom: 0;
	}

	aside {
		background: peachpuff;
		border: 2px solid;
		padding: 16px;
	}
</style>
