export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return(
        <div className="Letras">
            {alfabeto.map((letra)=><Letra text={letra}></Letra>)}
        </div>
    );
}

function Letra(props){
    return(
        <button className="Letra" disabled>
            {(props.text.toUpperCase())}
        </button>
    );
}