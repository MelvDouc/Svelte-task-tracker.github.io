<script>
  export let taskText;
  export let taskDate;
  export let toggler;
  export let deleteFunction;
</script>

<div class="task" on:dblclick>
  <div class="checkbox-container">
    <input type="checkbox" bind:checked={toggler} />
  </div>
  <div class="task-info">
    <h3 class="task-text">{taskText}</h3>
    <p class="task-date">{taskDate}</p>
  </div>
  <button class="delete-btn" on:click={deleteFunction}>×</button>
</div>

<style>
  .task {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    border-radius: 4px;
    font-size: 1.05rem;
    padding: 0.5em;
    margin-bottom: 0.5em;
    background-color: hsl(173.6, 84.6%, 84.7%);
    user-select: none;
    -moz-user-select: none;
    transition: box-shadow 0.2s ease-in;
  }

  .task:hover {
    box-shadow: 2px 2px 4px 2px hsl(0, 0%, 85%);
  }

  .checkbox-container {
    display: grid;
    place-items: center;
  }

  input[type="checkbox"] {
    all: unset;
    height: 1.25em;
    width: 1.25em;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  input[type="checkbox"]:checked {
    background-image: url("../img/checkmark.png");
  }

  .task-text {
    font-size: 1.85rem;
    margin-bottom: 0.2em;
  }

  .task-date {
    font-style: italic;
  }

  .delete-btn {
    min-height: 50px;
    font-size: 2rem;
    display: grid;
    place-items: center;
    border-radius: unset;
    padding: unset;
    background-image: unset;
    color: inherit;
    background-color: inherit;
  }
</style>
