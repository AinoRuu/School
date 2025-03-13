import { useState } from "react";
const Laskuri = () =>{
    const [arvo, setArvo] = useState(0);

    const kasvata = () => {
        setArvo(arvo + 1);
    }
    const nollaa = () => {
        setArvo(0);
    }


  return (<div>
    <button onClick={() => kasvata()}>Kasvata</button>
    <button onClick={() => nollaa()}>Nollaa</button>
    <Arvo arvo = {arvo}/>
    
  </div>)
   
}

const Arvo = (props) => {
    const arvonVari = props.arvo > 10 ? 'red' : 'black';
    return <h1 style={{ color: arvonVari}}>Laskuri on {props.arvo} </h1>

}

export {Laskuri, Arvo};