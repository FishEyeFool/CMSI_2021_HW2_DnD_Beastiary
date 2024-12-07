import React from "react";
import "./styles.css";

export default function Info({ name, data, monsterName }) {
  return !data || !name ? (
    <p></p>
  ) : !data?.name ? (
    <p>
      No monster called "{name}" found. Please try again with a different name.
    </p>
  ) : (
    <section>
      <section id="monsterInfo">
        <h1 id="monsterName">{data.name}</h1>
        <img
          src={`https://www.dnd5eapi.co/api/images/monsters/${monsterName}.png`}
          alt="monster image"
        />
        {data.desc}
      </section>
      <section id="monsterStats">
        <section>
          <h3>Monster Size</h3>
          <ul>
            <li>
              <p>{data.size}</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Monster Type</h3>
          <ul>
            <li>
              <p>{data.type}</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Monster Alignment</h3>
          <ul>
            <li>
              <p>{data.alignment}</p>
            </li>
          </ul>
        </section>
        {data.armor_class ? (
          <section id="armorClassInfo">
            <h3>Armor Class</h3>
            <ul>
              {data.armor_class.map((ac, index) => (
                <React.Fragment key={index}>
                  <li>Type: {ac.type}</li>
                  <li>Value: {ac.value}</li>
                </React.Fragment>
              ))}
            </ul>
          </section>
        ) : (
          <p>No armor class data available.</p>
        )}
        <section>
          <h3>Hit Points</h3>
          <ul>
            <li>
              <p>{data.hit_points}</p>
            </li>
          </ul>
        </section>
        <section id="hitDice">
          <h3>Hit Dice</h3>
          <ul>
            <li>
              <p>{data.hit_dice}</p>
            </li>
          </ul>
        </section>
        <section>
          <h3>Hit Points Roll</h3>
          <ul>
            <li>
              <p>{data.hit_points_roll}</p>
            </li>
          </ul>
        </section>
        {data.speed ? (
          <section id="speedInfo">
            <h3>Speed</h3>
            <ul>
              {Object.entries(data.speed).map(([type, value], index) => (
                <li key={index}>
                  {type[0].toUpperCase() + type.slice(1)}: {value}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <p>No speed data available.</p>
        )}
        <section id="abilityScores">
          <h3>Ability Scores</h3>{" "}
          <ul>
            <li>Strength: {data.strength}</li>
            <li>Dexterity: {data.dexterity}</li>
            <li>Constitution: {data.constitution}</li>
            <li>Intelligence: {data.intelligence}</li>
            <li>Wisdom: {data.wisdom}</li>
            <li>Charisma: {data.charisma}</li>
          </ul>
        </section>
      </section>
    </section>
  );
}
