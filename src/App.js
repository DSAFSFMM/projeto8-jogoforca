import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras"
import { useState } from "react"


export default function App() {
  const [jogo, setJogo] = useState(false);
  const [nErros, setNErros] = useState(0);
  const [palavra, setPalavra] = useState("");
  const [display, setDisplay] = useState("");
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  console.log(palavra);
  console.log(letrasClicadas);
  return (
    <div className="App">
      <Jogo setJogo={setJogo} listaPalavras={palavras} palavra={palavra} setPalavra={setPalavra} jogo={jogo} display={display} setDisplay={setDisplay} nErros={nErros}></Jogo>
      <Letras setDisplay={setDisplay} jogo={jogo} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas} palavra={palavra} setNErros={setNErros} nErros={nErros}></Letras>
    </div>
  );
}
