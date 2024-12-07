import { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Info from "./Info";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [monsterName, setMonsterName] = useState("");

  useEffect(() => {
    const monsterName = encodeURIComponent(
      name.trim().toLowerCase().replaceAll(" ", "-")
    );
    console.log(monsterName);
    const url = `https://www.dnd5eapi.co/api/monsters/${monsterName}`;
    setMonsterName(monsterName);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <Title name="D&D Bestiary" />
      <Entry action={setName} />
      <Info name={name} data={data} monsterName={monsterName} />
    </div>
  );
}
