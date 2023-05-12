import imagem0 from "./assets/forca0.png"

export default function Jogo({setJogo,listaPalavras, palavra, setPalavra, jogo, display, setDisplay}){
    return(
        <div className="Jogo">
            <img src={imagem0}></img>
            <div>
                <button onClick={()=>comecaJogo(setJogo, listaPalavras, setPalavra, setDisplay)} disabled={jogo? true : false}>Escolher Palavra</button>
                <p className="palavra">{display}</p>
            </div>
        </div>
    );
}

function comecaJogo(setJogo, listaPalavras, setPalavra, setDisplay){
    let placeHolder = "";
    setJogo(true);
    listaPalavras.sort(comparador);
    setPalavra(listaPalavras[0].split(""));
    for(let i = 0; i < listaPalavras[0].length; i++){
        if(i !== listaPalavras.length-1){
            placeHolder += "_ "
        }else{
            placeHolder += "_"
        }
    }
    setDisplay(placeHolder);
}

function comparador() { 
	return Math.random() - 0.5; 
}