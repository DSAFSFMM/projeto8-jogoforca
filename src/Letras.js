export default function Letras({ jogo, setLetrasClicadas, letrasClicadas, palavra, setNErros, nErros, setDisplay, setCor, setJogo}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="Letras">
            {alfabeto.map((letra) => <Letra key={letra} setJogo={setJogo} setCor={setCor} setDisplay={setDisplay} nErros={nErros} setNErros={setNErros} palavra={palavra} jogo={jogo} text={letra} setLetrasClicadas={setLetrasClicadas} letrasClicadas={letrasClicadas}></Letra>)}
        </div>
    );
}

function Letra({ jogo, text, setLetrasClicadas, letrasClicadas, palavra, setNErros , nErros, setDisplay, setCor, setJogo}) {
    return (
        <button onClick={() => selecionaLetra(setLetrasClicadas, text, letrasClicadas, palavra, setNErros, nErros, setDisplay, setCor, setJogo)} className="Letra" disabled={(!jogo || letrasClicadas.includes(text)) ? true : false}>
            {(text.toUpperCase())}
        </button>
    );
}

function selecionaLetra(setLetrasClicadas, text, letrasClicadas, palavra, setNErros, nErros, setDisplay, setCor, setJogo) {
    let novoErro;
    const novaLista = [...letrasClicadas, text];
    let novoDisplay = "";
    setLetrasClicadas(novaLista);
    if(palavra.includes(text)){
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
        setDisplay(palavra.join(""));
        setCor("vermelho");
        setJogo(false);
    }
    if(novoDisplay === palavra.join("")){
        setCor("verde");
        setJogo(false);
    }
}