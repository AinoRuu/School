import React from "react";
import { useState } from "react";

const Lomake = () => {
    const [joukkue, setJoukkue] = useState("");
    const [valmentaja, setValmentaja] = useState("");
    const [kotipaikka, setKotipaikka] = useState("");
    const [joukkueet, setJoukkueet] = useState([]);
    const [idCounter, setIdCounter] = useState(1);
    const [editId, setEditId] = useState(null);

    const handleAddTeam = () => {
        const newTeam = {
            joukkue,
            kotipaikka,
            valmentaja,
            id: idCounter
        };
        setJoukkueet([...joukkueet, newTeam]);
        setIdCounter(idCounter + 1);
        resetForm();

    }
    const handleEditTeam = (id) => {
        const team = joukkueet.find((joukkue) => joukkue.id === id);
        setJoukkue(team.joukkue);
        setValmentaja(team.valmentaja);
        setKotipaikka(team.kotipaikka);
        setEditId(id);
    }

    const handleSaveTeam = () => {
        setJoukkueet(
            joukkueet.map((joukkue) =>
                joukkue.id === editId
                    ? { ...joukkue, joukkue, kotipaikka, valmentaja }
                    : joukkue
            ));
        resetForm();
    }

    const resetForm = () => {
        setJoukkue("");
        setValmentaja("");
        setKotipaikka("");
        setEditId(null);
    }

    const handleDeleteTeam = (id) => {
        setJoukkueet(joukkueet.filter((joukkue) => joukkue.id !== id));
    }

    return (
        <div>
            <input
                type="text"
                value={joukkue}
                onChange={(e) => setJoukkue(e.target.value)}
                placeholder="Joukkue"
                data-testid="joukkue"
            />
            <input
                type="text"
                value={kotipaikka}
                onChange={(e) => setKotipaikka(e.target.value)}
                placeholder="Kotipaikka"
                data-testid="kotipaikka"
            />
            <Valmentaja
                data={['valmentaja1', 'valmentaja2', 'valmentaja3', 'valmentaja4', 'valmentaja5']}
                valueSelected={setValmentaja}
                value={valmentaja}
            />
            {editId ? (
                <button onClick={handleSaveTeam}
                    data-testid="tallenna">Tallenna</button>
            ) : (
                <button onClick={handleAddTeam}
                    data-testid="lisaa">Lisää joukkue</button>
            )}
            <Joukkueet joukkueet={joukkueet} onDelete={handleDeleteTeam} onChange={handleEditTeam} />

        </div>
    );

};


const Valmentaja = ({ data, valueSelected, value }) => {
    return (
        <select data-testid="valmentajaSelect" onChange={(e) => valueSelected(e.target.value)}
            value={value}
        >
            {data.map((valmentaja, index) => (
                <option key={index} value={valmentaja} data-testid="valmentajaOption">
                    {valmentaja}</option>
            ))}
        </select>
    )
};

const Joukkueet = ({ joukkueet, onDelete, onChange }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Joukkue</th>
                    <th>Kotipaikka</th>
                    <th>Valmentaja</th>
                    <th>ID</th>
                    {onDelete && <th>Poista</th>}
                    {onChange && <th>Muuta</th>}
                </tr>
            </thead>
            <tbody>
                {joukkueet.map((joukkue) => (
                    <tr key={joukkue.id}>
                        <td>{joukkue.joukkue}</td>
                        <td>{joukkue.kotipaikka}</td>
                        <td>{joukkue.valmentaja}</td>
                        <td>{joukkue.id}</td>
                        {onDelete && (
                            <td>
                                <button onClick={() => onDelete(joukkue.id)}
                                    data-testid="poista"
                                >Poista</button>
                            </td>
                        )}
                        {onChange && (
                            <td>
                                <button onClick={() => onChange(joukkue.id)}
                                    data-testid="muuta"
                                >Muuta</button>
                            </td>
                        )}

                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export { Lomake, Valmentaja, Joukkueet };