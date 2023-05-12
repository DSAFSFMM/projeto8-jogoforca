export default function Letras({ jogo, setLetrasClicadas, letrasClicadas, palavra, setNErros, nErros, setDisplay}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="Letras">
            {alfabeto.map((letra) => <Letra setDisplay={setDisplay} nErros={nErros} setNErros={setNErros} palavra={palavra} jogo={jogo} text={letra} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas}></Letra>)}
        </div>
    );
}

function Letra({ jogo, text, setLetrasClicadas, letrasClicadas, palavra, setNErros , nErros, setDisplay}) {
    return (
        <button onClick={() => selecionaLetra(setLetrasClicadas, text, letrasClicadas, palavra, setNErros, nErros, setDisplay)} className="Letra" disabled={(!jogo || letrasClicadas.includes(text)) ? true : false}>
            {(text.toUpperCase())}
        </button>
    );
}

function selecionaLetra(setLetrasClicadas, text, letrasClicadas, palavra, setNErros, nErros, setDisplay) {
    let novoErro;
    const novaLista = [...letrasClicadas, text];
    setLetrasClicadas(novaLista);
    if(palavra.includes(text)){
        let novoDisplay = "";
        for (let i = 0; i < palavra.length; i++){
            if(novaLista.includes(palavra[i])){
                novoDisplay += palavra[i];
            }else{
                novoDisplay += " _";
            }
        }
        setDisplay(novoDisplay);
    }else{
        novoErro = nErros + 1;
        setNErros(novoErro);
    }
    if(novoErro === 6){
        alert("game over");
    }
}