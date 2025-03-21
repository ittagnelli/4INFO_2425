<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import Banner from "$lib/components/banner.svelte";
</script>

<div class="text-column">
	<h1>About Me!!!</h1>

	<Banner />

	<p>
		Ciao io sono <a href="https://svelte.dev/docs/kit"> Nicolò Riglietti </a> e studio informatica all'Agnelli
		the following into your command line and following the prompts:
	</p>

	<pre>npx sv create</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
