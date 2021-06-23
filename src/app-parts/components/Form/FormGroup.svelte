<script>
  export let id;
  export let type;
  export let labelText;
</script>

<div class="form-group">
  <label for={id}>{labelText}</label>
  <input {type} {id} required />
</div>

<style>
  .form-group {
    background-color: hsla(0, 0%, 75%, 0.7);
    padding: 0.1em 0.33em;
  }

  label {
    font-size: 1.2rem;
    color: hsl(0, 0%, 98%);
    display: block;
    width: fit-content;
    margin-bottom: 0.25em;
  }

  input {
    width: 100%;
    min-height: 25px;
  }
</style>
