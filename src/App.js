import Letras from "./Letras";
import Jogo from "./Jogo";
import palavras from "./palavras"

export default function App() {
  const listaPalavras = palavras;
  return (
    <div className="App">
      <Jogo></Jogo>
      <Letras></Letras>
    </div>
  );
}