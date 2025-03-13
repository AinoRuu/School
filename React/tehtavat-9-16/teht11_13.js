import { useState } from "react"

const ListForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [birthYear, setBirthYear] = useState("");
    const [list, setList] = useState([]);
    const [errorState, setErrorState] = useState({ name: "", address: "", birthYear: "" });

    const handleAdd = () => {
        const errors = {
            name: name.trim().length < 4 ? name : "",
            address: address.trim().length < 4 ? address : "",
            birthYear: birthYear.trim().length < 4 ? birthYear : ""
        };

        setErrorState(errors);


        if (!errors.name && !errors.address && !errors.birthYear) {
            setList([...list, { name, address, birthYear }]);
            setName("");
            setAddress("");
            setBirthYear("");
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="name">Nimi</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="address">Osoite</label>
                <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="birthYear">vuosi</label>
                <input
                    id="birthYear"
                    type="text"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                />
            </div>

            <button onClick={handleAdd} >Add</button>

            <Error
                name={errorState.name}
                address={errorState.address}
                birthYear={errorState.birthYear}
            />

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.name},{item.address},{item.birthYear}</li>
                ))}
            </ul>
        </div>
    )

}

const Error = ({ name, address, birthYear}) => {
    const errors = [];
    if (name.trim().length < 4) errors.push("nimi");
    if (address.trim().length < 4) errors.push("osoite");
    if (birthYear.trim().length < 4) errors.push("vuosi");

    return errors.length > 0 ? (
        <p>Virheelliset kentät: {errors.join(",")}</p>
    ) : null;
}

export { ListForm, Error }