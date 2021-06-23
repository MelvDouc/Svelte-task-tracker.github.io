<script>
	import Header from "./app-parts/Header.svelte";
	import Main from "./app-parts/Main.svelte";
	import Footer from "./app-parts/Footer.svelte";
	export let pageTitle;
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<Header {pageTitle} />

<Main />

<Footer />
