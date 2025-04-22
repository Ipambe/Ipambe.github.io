<style>
  :root {
    --glitch-red: #ff0000;
    --glitch-blue: #00ffff;
    --glitch-translate: 2px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #c9d1d9;
  }

  .introduction {
    display: inline-flex;
    margin-inline: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      padding: 0;
    }

    p:first-child {
      align-self: flex-start;
      font-size: 1.5rem;
    }

    h1 {
      font-size: 4rem;
      font-weight: 900;
      text-align: center;
      animation: glitch 1s infinite;
    }

    p:last-child {
      align-self: flex-end;
      font-size: 1.5rem;
    }
  }

  @keyframes glitch {
    0% {
      text-shadow:
        var(--glitch-translate) var(--glitch-translate) var(--glitch-red),
        calc(-1 *var(--glitch-translate)) calc(-1 *var(--glitch-translate)) var(--glitch-blue);
    }

    5% {
      text-shadow:
        calc(-1 *var(--glitch-translate)) calc(-1 *var(--glitch-translate)) var(--glitch-red),
        var(--glitch-translate) var(--glitch-translate) var(--glitch-blue);
    }

    10% {
      text-shadow:
        var(--glitch-translate) var(--glitch-translate) var(--glitch-red),
        calc(-1 *var(--glitch-translate)) calc(-1 *var(--glitch-translate)) var(--glitch-blue);
    }

    15% {
      text-shadow:
        calc(-1 *var(--glitch-translate)) calc(-1 *var(--glitch-translate)) var(--glitch-red),
        var(--glitch-translate) var(--glitch-translate) var(--glitch-blue);
    }

    20% {
      text-shadow:
        var(--glitch-translate) var(--glitch-translate) var(--glitch-red),
        calc(-1 *var(--glitch-translate)) calc(-1 *var(--glitch-translate)) var(--glitch-blue);
    }
  }
</style>
<main>
  <section class='introduction'>
    <p>Full-Stack</p>
    <h1>Adolfo Rosa</h1>
    <p>Developer</p>
  </section>
</main>