import Letra from "./Letra";

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <div className="Letras">
            {alfabeto.map((letra) => <Letra key={letra} text={letra} propriedades={props} ></Letra>)}
        </div>
    );
}

