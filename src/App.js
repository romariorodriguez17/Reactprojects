import imagerick from "./img/rick-morty.png"
import './App.css';
import { useState} from "react";
import Characters from "./components/Characters.1";


function App() {


  const [characters , setCharacters]= useState(null);
    const reqApi = async()=> {
     const api = await fetch("https://rickandmortyapi.com/api/character")
     const characterApi = await api.json ();
     setCharacters(characterApi.results);
    };

console.log(characters);
    
    return (
    <div className="App">
      <header className="App-header">
        <h1 className='Title'> Ricky & Morty</h1>
        
         {characters ? (
          <Characters Characters={characters} setCharacters={setCharacters}/>
        ): 
        (
     <>
        <img src ={imagerick} alt= "ricky & morty " className='img-home'  />
        <button onClick={reqApi} className="btn-search"> Buscar Personajes 
        </button> 
        </>
        )}
      </header>
    </div>
  );
}

export default App;
