<script>
  import FormGroup from "./FormGroup.svelte";
</script>

<form on:submit|preventDefault>
  <FormGroup labelText="Nouvelle tâche" id="task-text" type="text" />
  <FormGroup labelText="Date" id="task-date" type="text" />
  <div id="submit-container">
    <button type="submit">Ajouter</button>
  </div>
</form>

<style>
  form {
    color: white;
    background-color: turquoise;
    background-image: url("../img/mountain-road.jpg");
    border-radius: 5px;
    padding: 0.75em;
    max-width: 750px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 0.75em;
  }

  #submit-container {
    display: grid;
    place-items: center;
  }
</style>
