<script lang="ts">
	import "../app.css";
</script>

<style>
	main {
		width: 100%;
		max-width: 42rem;
        margin: 0 auto;
	}
</style>

<main>
<!-- Replace content below with respective URL content -->
<slot />
<footer>
    {new Date().getFullYear()} - <a href="https://github.com/legitbeep" aria-label="legitbeep profile link" >legitbeep</a>
</footer>
</main>