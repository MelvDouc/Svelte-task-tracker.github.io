<script>
  import swal from "sweetalert";
  import { setElementHeights } from "../functions";
  import Form from "./components/Form/Form.svelte";
  import Controls from "./components/Controls/Controls.svelte";
  import Task from "./components/Task/Task.svelte";

  setElementHeights();

  let tasks = [];

  function saveTask() {
    const taskText = document.getElementById("task-text").value.trim();
    const taskDate = document.getElementById("task-date").value.trim();

    if (!taskText || !taskDate) {
      swal({
        icon: "error",
        text: "Veuillez indiquer un intitulé de tâche ainsi qu'une date.",
        button: "OK",
      });
      return;
    }

    if (
      tasks.some((task) => task.text === taskText && task.date === taskDate)
    ) {
      swal({
        icon: "warning",
        text: "Cette tâche existe déjà.",
        button: "OK",
      });
      return;
    }
    tasks = tasks.concat({
      id: Date.now(),
      text: taskText,
      date: taskDate,
      completed: false,
    });
  }

  function clearCompleted() {
    if (tasks.length < 1) return;
    const checkNotCompleted = (task) => !task.completed;
    if (tasks.every(checkNotCompleted)) {
      swal({
        icon: "warning",
        text: "Aucune tâche n'est marquée comme complétée.",
        button: "OK",
      });
      return;
    }
    tasks = tasks.filter(checkNotCompleted);
  }

  async function clearAll() {
    if (tasks.length < 1) return;
    const clearConfirm = await swal({
      text: "Êtes-vous sûr(e) de vouloir supprimer toutes les tâches ?",
      buttons: {
        confirm: true,
        cancel: true,
      },
      closeOnClickOutside: true,
    });
    if (!clearConfirm) return;
    tasks = [];
  }

  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id);
  }
</script>

<main>
  <section id="form-section">
    <Form on:submit={saveTask} />
    {#if tasks.length > 0}
      <Controls
        clearCompleted={() => clearCompleted()}
        clearAll={() => clearAll()}
      />
    {/if}
  </section>
  <section id="task-list">
    <ul>
      {#each tasks as task}
        <li>
          <Task
            bind:toggler={task.completed}
            taskText={task.text}
            taskDate={task.date}
            deleteFunction={() => deleteTask(task.id)}
          />
        </li>
      {/each}
    </ul>
  </section>
</main>

<style>
  main {
    flex: 1;
    padding: 1em;
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 1em;
  }

  #task-list {
    background-color: white;
    min-height: var(--height1);
    max-height: var(--height1);
    overflow-y: auto;
    padding: 0.5em;
  }

  #task-list ul {
    list-style: none;
  }

  @media only screen and (orientation: portrait) {
    main {
      grid-template-columns: unset;
    }
  }
</style>
