import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

type Character = {
  id: number;
  name: string;
  status: string;
  image: string;
}

// setInterval(() => {
//   console.log("A");
// }, 1);

async function getRickAndMortyCharacter (): Promise<Character[]> {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    return response.data.results;
  } catch (e) {
    throw e;
  }
}

function App() {
  console.log("App");
  const [name, setName] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const characters = await getRickAndMortyCharacter();
        setCharacters(characters);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <input value={name} onChange={e => setName(e.currentTarget.value)}/>
        </div>
      </header>
    </div>
  );
}

export default App;
