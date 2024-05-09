<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Button from '$elements/Button';
	import Neko from '$lib/Neko.svelte';
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';

	import { i18n } from '$lib/i18n.js';
	import LangSwitcher from '$ui/LangSwitcher/LangSwitcher.svelte';

	function handleClick() {
		console.log('hey');
	}
</script>


<Neko />
