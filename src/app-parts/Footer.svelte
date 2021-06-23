<script>
  import FooterIcon from "./components/FooterIcon.svelte";

  let footerIconsInfo = [
    {
      iconClass: "bi bi-github",
      href: "https://github.com/MelvDouc",
    },
    {
      iconClass: "bi bi-linkedin",
      href: "https://www.linkedin.com/in/melvin-doucet-b11931114/",
    },
    {
      iconClass: "jobteaser-icon",
      href: "https://www.jobteaser.com/en/profiles/e23e3ceb-e97d-4b39-b9ee-28b6452a86f0",
    },
    {
      iconClass: "bi bi-youtube",
      href: "https://www.youtube.com/channel/UC9BJqAqRlOJBAA0O4WYSmnw",
    },
  ];
</script>

<footer>
  <section id="footer-left">
    <p>{@html "&copy;"} Melvin DOUCET {@html "&mdash;"} 2021</p>
  </section>
  <section id="footer-right">
    <ul>
      {#each footerIconsInfo as infoObject}
        <li>
          <FooterIcon {...infoObject} />
        </li>
      {/each}
    </ul>
  </section>
</footer>

<style>
  footer {
    margin-top: auto;
    display: flex;
    font-size: 1.1rem;
    background-color: #333;
    color: white;
  }

  footer > * {
    width: 100%;
  }

  #footer-left {
    padding: 1em;
    display: grid;
    place-items: center;
  }

  #footer-left p {
    font-family: "Inconsolata", var(--font-family);
    text-align: center;
  }

  #footer-right ul {
    height: 100%;
    display: flex;
    list-style: none;
  }

  #footer-right li {
    width: 100%;
    display: grid;
    place-items: center;
  }
</style>
