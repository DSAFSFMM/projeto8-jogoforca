import img0 from "./assets/forca0.png"
import img1 from "./assets/forca1.png"
import img2 from "./assets/forca2.png"
import img3 from "./assets/forca3.png"
import img4 from "./assets/forca4.png"
import img5 from "./assets/forca5.png"
import img6 from "./assets/forca6.png"


export default function Jogo({ setJogo, listaPalavras, setPalavra, display, setDisplay, nErros, cor, setCor, setNErros, setLetrasClicadas}) {
    const img = [img0, img1, img2, img3, img4, img5, img6];

    function comecaJogo() {
        let placeHolder = "";
        setJogo(true);
        setCor("");
        setNErros(0);
        setLetrasClicadas([]);
        listaPalavras.sort(comparador);
        setPalavra(listaPalavras[0].split(""));
        for (let i = 0; i < listaPalavras[0].length; i++) {
            placeHolder += " _"
        }
        setDisplay(placeHolder);
    }

    return (
        <div className="Jogo">
            <img data-test="game-image" src={img[nErros]} alt={`imgaem da forca no estagio ${nErros}`}></img>
            <div>
                <button data-test="choose-word" onClick={() => comecaJogo()} >Escolher Palavra</button>
                <p data-test="word" className={`palavra ${cor}`}>{display}</p>
            </div>
        </div>
    );
}

function comparador() {
    return Math.random() - 0.5;
}