import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras"
import { useState } from "react"
import Chute from "./Chute";


export default function App() {
  const [jogo, setJogo] = useState(false);
  const [nErros, setNErros] = useState(0);
  const [palavra, setPalavra] = useState("");
  const [display, setDisplay] = useState("");
  const [letrasClicadas, setLetrasClicadas] = useState([]);
  const [cor, setCor] = useState("");
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <Jogo cor={cor} setJogo={setJogo} listaPalavras={palavras} setPalavra={setPalavra} display={display} setDisplay={setDisplay} nErros={nErros} setNErros={setNErros} setCor={setCor} setLetrasClicadas={setLetrasClicadas}></Jogo>
      <Letras setCor={setCor} setDisplay={setDisplay} jogo={jogo} setJogo={setJogo} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas} palavra={palavra} setNErros={setNErros} nErros={nErros}></Letras>
      <Chute jogo={jogo} input={input} setInput={setInput} palavra={palavra} setDisplay={setDisplay} setCor={setCor} setJogo={setJogo}></Chute>
    </div>
  );
}
