import imagem0 from "./assets/forca0.png"

export default function Jogo(){
    return(
        <div className="Jogo">
            <img src={imagem0}></img>
            <button>Escolher Palavra</button>
        </div>
    );
}