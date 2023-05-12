import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras"
import { useState } from "react"


export default function App() {
  const [jogo, setJogo] = useState(false);
  const [nErros, setNErros] = useState(0);
  const [palavra, setPalavra] = useState("");
  const [display, setDisplay] = useState("");
  console.log(palavra);
  return (
    <div className="App">
      <Jogo setJogo={setJogo} listaPalavras={palavras} palavra={palavra} setPalavra={setPalavra} jogo={jogo} display={display} setDisplay={setDisplay}></Jogo>
      <Letras jogo={jogo}></Letras>
    </div>
  );
}
