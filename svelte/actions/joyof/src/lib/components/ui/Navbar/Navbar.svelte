<script>
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { page } from '$app/stores';
    import * as m from '$lib/paraglide/messages';

	import { i18n } from '$lib/i18n.js';
</script>

<div class="flex justify-between {$$props.class}">
    <nav>
        <ul class="flex gap-2 bg-gray-300">
            <li><a
                href="/"
                class=""
            >{m._home()}</li>
            <li>
                <a href="/action">Action</a>
            </li>
            <li>
                <a href="/tooltip">Tooltip</a>
            </li>
            <li>
                <a href="/modal">Modal</a>
            </li>
            <li>
                <a href="/motion">Motion</a>
            </li>
            <li>
                <a href="/forms">Forms</a>
            </li>
        </ul>
    </nav>
    <!-- <select bind:value={selectedLanguage} on:change={changeLanguage}>
        {#each availableLanguages as lang}
            <option value={lang}>{lang}</option>
        {/each}
    </select> -->
</div>