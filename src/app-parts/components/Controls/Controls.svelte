<script>
  import Button from "./Button.svelte";
  export let clearCompleted;
  export let clearAll;
</script>

<div id="controls-container">
  <div id="controls">
    <Button
      id="clear-completed"
      text="Supprimer complétées"
      on:click={clearCompleted}
    />
    <Button id="clear-all" text="Tout supprimer" on:click={clearAll} />
  </div>
</div>

<style>
  #controls-container {
    display: grid;
    place-items: center;
    flex: 1;
    animation: fadeIn 0.75s linear forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  #controls {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
  }
</style>
