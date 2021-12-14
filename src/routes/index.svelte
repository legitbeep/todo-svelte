<script lang="ts" context="module">
	import type {Load} from '@sveltejs/kit';

	// Basically means getInitialProps 
	// this fetch is different from browser provided fetch method
	export const load: Load = async ({ fetch }) => {
		const res = await fetch("/api/todos.json");

		if (res.ok){
			const todos = await res.json();
			return {
				props : {todos},
			}
		}

		const { message } = await res.json();
		return {
			error: new Error(message)
		}
	}
</script>

<script lang="ts">
	// lib is has preconfigured path variable, can be accesed as follow:
	import TodoItem from '$lib/todo-item.svelte';

	// will be recieved from function above
	export let todos: Todo[];
	const title = 'Todo';
</script>

<style>	
	i {
		color: var(--accent-color);
	}
	section{
		margin: 4rem 0;
	}
	.todo-form{
		margin-bottom: 0.5rem;
	}
	.todo-form input {
		font-size: 28px;
		width: 100%;
		padding: 0.5rem 1rem;
		box-sizing: border-box;
		text-align: center;
		border-radius: 0.75rem;
		background: rgba(255,255,255, 0.05);
	}
	section :global(input) {
		border: 1px solid transparent;
	}
	section :global(input:focus-visible){
		border: 1px solid var(--accent-color) !important;
		outline: none;
		box-shadow: inset 1px 1px 6px rgba(0,0,0,0.1);
	}
</style>
	<!-- target all inputs inside todo using :global method -->
<svelte:head><title>{title}</title></svelte:head>

<section>
	<h1>
		{title} <i>Svelte</i>
	</h1>
	<form action="/api/todos.json" method="POST" class="todo-form" >
		<input type="text" name="todo" placeholder="+ Type to add todo" aria-label="add todo" />
	</form>

	{#each todos as todo}
	<TodoItem {todo} />
	{/each}
</section>

