<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ProgressBar from './ProgressBar.svelte';

	const argTypes = {
		intent: {
			options: ['primary', 'secondary'],
			control: { type: 'select' }
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'select' }
		},
		value: {
			control: {
				type: 'range',
				min: 0,
				max: 100,
				step: 1,
			}
		}

	};
</script>

<Meta title="elements/progress" component={ProgressBar} />

<Template let:args>
	<ProgressBar {...args} />
</Template>

<Story
	name="ProgressBar primary"
	args={{ intent: 'primary', size: 'small', value: 20 }}
	{argTypes}
/>

<Story name="ProgressBar Secondary" args={{ intent: 'secondary', size: 'medium', value: 20 }} />
