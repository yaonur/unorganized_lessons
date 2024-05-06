<script lang="ts">
	import Button from '$elements/Button';
	type Todo = {
		text: string;
		done: boolean;
	};
	type Filters = 'all' | 'active' | 'completed';
	let todos = $state<Todo[]>([
		{
			text: 'Learn Svelte',
			done: false
		},
		{ text: 'Learn SvelteKit', done: false }
	]);
	let filter = $state<Filters>('all');

	$effect(() => {
		console.log(todos);
	});
	function addTodo(event: KeyboardEvent) {
		if (event.key !== 'Enter') return;
		const todoEl = event.target as HTMLInputElement;
		const text = todoEl.value;
		const done = false;
		todos = [...todos, { text, done }];
		todoEl.value = '';
	}

	function editTodo(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const inputEl = event.target as HTMLInputElement;
		const index = +inputEl.dataset.index!;
		todos[index].text = inputEl.value;
	}

	function toggleTodo(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const inputEl = event.target as HTMLInputElement;
		const index = +inputEl.dataset.index!;
		todos[index].done = !todos[index].done;
	}
	function setFilter(newFilter: Filters) {
		filter = newFilter;
	}
</script>

<input type="text" placeholder="Add Todo" onkeydown={addTodo} />
<div class="todos">
	{#each todos as todo, i}
		<!-- content here -->
		<div class="todo">
			<input oninput={editTodo} data-index={i} type="text" value={todo.text} />
			<input onchange={toggleTodo} data-index={i} type="checkbox" checked={todo.done} />
		</div>
	{/each}
</div>
<div class="flex gap-2 text-blue-50">
	{#each ['all', 'active', 'completed'] as filter}
		<!-- content here -->
		<Button onclick={()=> setFilter(filter as Filters)}>{filter}</Button>
	{/each}
</div>

<style>
	.todos {
		display: grid;
		gap: 1rem;
		margin-block-start: 1rem;
	}
	.todo {
		position: relative;
		max-width: 500px;
		border: 1px solid #ccc;
	}
	input[type='text'] {
		width: 100%;
		padding: 1rem;
	}
	input[type='checkbox'] {
		position: absolute;
		top: 50%;
		right: 4%;
		translate: 0% -50%;
	}
</style>
