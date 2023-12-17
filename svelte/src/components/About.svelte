<script>
  let someText = `Frontend Developer at JA54312`;
  let count = 0;
  let styles = {
    darkmode: false,
  };

  function handleClick() {
    count += 1;
  }

  function toggle() {
    styles.darkmode = !styles.darkmode;
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class="About">
  {#if !styles.darkmode}
    <p>
      {someText}
    </p>
  {:else}
    <p>
      <span>Hello DarkMode</span>
    </p>
  {/if}
  <button on:click={handleClick}>Click {count === 0 ? "" : count}</button>
  <button on:click={toggle}>DarkMode</button>
</div>

<style>
  p {
    color: var(--theme-color);
  }
</style>
