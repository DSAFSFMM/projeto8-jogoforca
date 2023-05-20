export default function Chute({jogo, input, setInput, palavra, setCor, setDisplay, setJogo}){
    function verificaChute(){
        setInput("");
        setDisplay(palavra.join(""));
        setJogo(false);
        if (input === palavra.join("")) {
            setCor("verde");
        }else{
            setCor("vermelho");
        }
    }
    return(
        <div className="Chute">
            <p>Já sei a palavra!</p>
            <input placeholder="Digite aqui..." disabled={jogo?false:true} value={input} onChange={(event)=>setInput(event.target.value)}></input>
            <button disabled={jogo?false:true} onClick={verificaChute}>Chutar</button>
        </div>
    );
}