export default function Letra({propriedades, text}) {
    const {jogo, setLetrasClicadas, letrasClicadas, palavra, setNErros , nErros, setDisplay, setCor, setJogo} = propriedades;
    function selecionaLetra() {
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


    return (
        <button data-test="letter" onClick={() => selecionaLetra(setLetrasClicadas, text, letrasClicadas, palavra, setNErros, nErros, setDisplay, setCor, setJogo)} className="Letra" disabled={(!jogo || letrasClicadas.includes(text)) ? true : false}>
            {(text.toUpperCase())}
        </button>
    );
}
