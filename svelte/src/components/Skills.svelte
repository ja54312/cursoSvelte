<script>
  let skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 1,
      name: "JS",
    },
  ];
</script>

<div class="Skills">
  <h3>Habilidades</h3>
  <ul>
    {#each skills as { name }, i}
      <li>{name}</li>
    {/each}
  </ul>
</div>

<style>
  .Skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline;
    margin: 0 0 0 5px;
  }
</style>
