import img0 from "./assets/forca0.png"
import img1 from "./assets/forca1.png"
import img2 from "./assets/forca2.png"
import img3 from "./assets/forca3.png"
import img4 from "./assets/forca4.png"
import img5 from "./assets/forca5.png"
import img6 from "./assets/forca6.png"


export default function Jogo({ setJogo, listaPalavras, palavra, setPalavra, jogo, display, setDisplay, nErros }) {
    const img = [img0, img1, img2, img3, img4, img5, img6];
    return (
        <div className="Jogo">
            <img src={img[nErros]}></img>
            <div>
                <button onClick={() => comecaJogo(setJogo, listaPalavras, setPalavra, setDisplay)} disabled={jogo ? true : false}>Escolher Palavra</button>
                <p className="palavra">{display}</p>
            </div>
        </div>
    );
}

function comecaJogo(setJogo, listaPalavras, setPalavra, setDisplay) {
    let placeHolder = "";
    setJogo(true);
    listaPalavras.sort(comparador);
    setPalavra(listaPalavras[0].split(""));
    for (let i = 0; i < listaPalavras[0].length; i++) {
        placeHolder += " _"
    }
    setDisplay(placeHolder);
}

function comparador() {
    return Math.random() - 0.5;
}