<script lang="ts">
	// lib is has preconfigured path variable, can be accesed as follow:
	import TodoItem from '$lib/todo-item.svelte';

	const title = 'Todo';
</script>

<svelte:head><title>{title}</title></svelte:head>


<section>
	<h1>
		{title} <i>Svelte</i>
	</h1>
	<form action="" method="POST">
		<input type="text" name="todo" placeholder="+ Type to add todo" aria-label="add todo" />
	</form>

	<TodoItem />
</section>

