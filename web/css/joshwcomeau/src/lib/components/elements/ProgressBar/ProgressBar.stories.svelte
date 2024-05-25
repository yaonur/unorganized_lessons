<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import ProgressBar from './ProgressBar.svelte';
</script>

<Meta title="elements/button" component={ProgressBar}/>

<Template let:args>
    <ProgressBar {...args}>
	</ProgressBar>
</Template>

<Story name="ProgressBar primary" args={{intent:"primary",size:"small", value:20}}></Story>

<Story name="ProgressBar Secondary" args={{intent:"secondary",size:"medium", value:20 }}/>