import { useState } from "react";
const Lista = () => {


    return (

        <div>
            <ul>
                <Rivi etunimi="Pirkka" sukunimi="Pekka" aloitusvuosi="1998"></Rivi>
                <Rivi etunimi="Paavo" sukunimi="Paananen" aloitusvuosi="1999"></Rivi>
                <Rivi etunimi="Pauli" sukunimi="Parviainen" aloitusvuosi="2000"></Rivi>
                <Rivi etunimi="Pauliina" sukunimi="Paasi" aloitusvuosi="2001"></Rivi>

            </ul>
        </div>
    )
}

const Rivi = (props) => {
    return <li>{props.etunimi}, {props.sukunimi}, {props.aloitusvuosi}</li>
}

const Teht6 = () => {
    const otsikotSuomi = {
        nimi: "Etunimi",
        osoite: "Lähiosoite",
        aloitusvuosi: "Aloitusvuosi"
    };

    const otsikotEnglanti = {
        nimi: "First name",
        osoite: "Address",
        aloitusvuosi: "Starting year"
    };

    const [visible, setVisible] = useState(true);

    const data = [
        { nimi: "Matti", osoite: "Katu 1", aloitusvuosi: 2020 },
        { nimi: "Maija", osoite: "Katu 2", aloitusvuosi: 2019 },
        { nimi: "Pekka", osoite: "Katu 3", aloitusvuosi: 2021 },
        { nimi: "Liisa", osoite: "Katu 4", aloitusvuosi: 2018 },
        { nimi: "Kalle", osoite: "Katu 5", aloitusvuosi: 2022 }
    ];

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>{visible ? "Piilota" : "Näytä"}</button>
            {visible &&(
                <>
            <Taulukko otsikot={otsikotSuomi} data={data} ></Taulukko>
            <Taulukko otsikot={otsikotEnglanti} data={data} ></Taulukko>
            </>
        )}
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <thead>
            <tr>
                <th>{props.otsikot.nimi}</th>
                <th>{props.otsikot.osoite}</th>
                <th>{props.otsikot.aloitusvuosi}</th>
            </tr>
        </thead>
    )
}

const TauluRivi = (props) => {
    return (
        <tbody>
        <>
            {props.rivit.map((rivi, index) => (
                <tr key={index}>
                    <td>{rivi.nimi}</td>
                    <td>{rivi.osoite}</td>
                    <td>{rivi.aloitusvuosi}</td>
                </tr>
            ))}
        </>
        </tbody>
    );
};

const Taulukko = (props) => {
    return (
        <div>
            <table>
                    <Otsikko otsikot={props.otsikot}></Otsikko>
                    <TauluRivi rivit={props.data}></TauluRivi>
            </table>
        </div>
    )
}

export { Lista, Rivi, Teht6, Taulukko, Otsikko, TauluRivi};