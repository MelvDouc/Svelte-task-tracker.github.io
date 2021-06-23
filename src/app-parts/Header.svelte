<script>
  export let pageTitle;
</script>

<header>
  <h1>{pageTitle}</h1>
</header>

<style>
  header {
    font-size: 2.25rem;
    display: grid;
    place-items: center;
    padding: 0.25em;
    background-image: radial-gradient(var(--green1), var(--green2));
    color: hsl(0, 0%, 16%);
  }

  h1 {
    text-align: center;
  }
</style>
