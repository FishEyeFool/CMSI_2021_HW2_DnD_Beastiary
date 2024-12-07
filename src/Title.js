export default function Title({ name }) {
  return (
    <>
      <h1 id="monsterInfo">{name}</h1>
      <h1>Welcome to the D&D Bestiary!</h1>
      <p>
        Our bestiary provides detailed information about various monsters and
        enemys found whithin the world of Dungens & Dragons, including their
        size, type, alignment, and more. Simply enter the name of a monster to
        learn about some of its characteristics and stats.
      </p>
      <p>
        Info pulled from the{" "}
        <a href="https://www.dnd5eapi.co/" id="API">
          <label>D&D 5th edition API</label>
        </a>
      </p>
      <p>
        <a
          href="https://codesandbox.io/p/sandbox/cmsi2021-homework2-api-gabrielw-85r2jm"
          id="Repo"
        >
          <label>Code Sandbox Repo</label>
        </a>
      </p>
    </>
  );
}
