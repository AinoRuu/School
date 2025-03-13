import React, { useState, useEffect } from "react";

const Asiakas = () => {
    const [nimi, setNimi] = useState('');
    const [osoite, setOsoite] = useState('');
    const [puhelin, setPuhelin] = useState('');
    const [asiakkaat, setAsiakkaat] = useState([]);
    const [asiakastyypit, setAsiakastyypit] = useState([]);
    const [selectedTyyppi, setSelectedTyyppi] = useState('');
    const [loading, setLoading] = useState(false);
    const [noData, setNoData] = useState(false);
    const [showNoDataMessage, setShowNoDataMessage] = useState(false);
    const [showAddForm, setShowAddForm] = useState(false); // State to control visibility of add form
    const [showEditForm, setShowEditForm] = useState(false); // State to control visibility of edit form
    const [editCustomerId, setEditCustomerId] = useState(null); // State to store the ID of the customer being edited

    useEffect(() => {
        const fetchAsiakastyypit = async () => {
            try {
                let response = await fetch('http://localhost:3004/asiakastyyppi');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await response.json();
                console.log('Fetched customer types:', data);
                setAsiakastyypit(data);
            } catch (error) {
                console.error('Error fetching customer types:', error);
            }
        };

        fetchAsiakastyypit();
    }, []);

    const handleSearch = async () => {
        setLoading(true);
        setNoData(false);
        setShowNoDataMessage(false);
        try {
            let response = await fetch(`http://localhost:3004/asiakas?nimi=${nimi}&osoite=${osoite}&tyyppi_id=${selectedTyyppi}&_delay=2000`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json();
            console.log('Fetched data:', data);
            setAsiakkaat(data);
            if (data.length === 0) {
                setNoData(true);
                setShowNoDataMessage(true);
                setTimeout(() => {
                    setShowNoDataMessage(false);
                }, 2000);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (id, name) => {
        const confirmed = window.confirm(`Haluatko varmasti poistaa asiakkaan ${name}?`);
        if (!confirmed) {
            return;
        }

        try {
            let response = await fetch(`http://localhost:3004/asiakas/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log(`Deleted customer with id ${id}`);
            handleSearch();
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    }

    const handleAdd = () => {
        setShowAddForm(true);
    }

    const handleSave = async () => {
        try {
            let response = await fetch('http://localhost:3004/asiakas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nimi,
                    osoite,
                    puhelinnro: puhelin,
                    tyyppi_id: selectedTyyppi
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Added new customer');
            setShowAddForm(false);
            setNimi('');
            setOsoite('');
            setPuhelin('');
            setSelectedTyyppi('');

            handleSearch();
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    }

    const handleCancel = () => {
        setShowAddForm(false);
    }

    const handleEdit = async (id) => {
        try {
            let response = await fetch(`http://localhost:3004/asiakas/${id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            let data = await response.json();
            setNimi(data.nimi);
            setOsoite(data.osoite);
            setPuhelin(data.puhelinnro);
            setSelectedTyyppi(data.tyyppi_id);
            setEditCustomerId(id);
            setShowEditForm(true);
        } catch (error) {
            console.error('Error fetching customer data:', error);
        }
    }

    const handleSaveEdit = async () => {
        try {
            let response = await fetch(`http://localhost:3004/asiakas/${editCustomerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nimi,
                    osoite,
                    puhelinnro: puhelin,
                    tyyppi_id: selectedTyyppi
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Updated customer');
            setShowEditForm(false);
            setNimi('');
            setOsoite('');
            setPuhelin('');
            setSelectedTyyppi('');
            setEditCustomerId(null);
            handleSearch();
        } catch (error) {
            console.error('Error updating customer:', error);
        }
    }

    const handleCancelEdit = () => {
        setShowEditForm(false);
    }

    return (
        <div>
            {!showAddForm && !showEditForm ? (
                <>
                    <div>
                        <label htmlFor="nameInput">Nimi</label>
                        <input
                            type="text"
                            id="nameInput"
                            data-testid="nameInput"
                            value={nimi}
                            onChange={(e) => setNimi(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="addressInput">Osoite</label>
                        <input
                            type="text"
                            id="addressInput"
                            data-testid="addressInput"
                            value={osoite}
                            onChange={(e) => setOsoite(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="customertypeSelect">Asiakastyyppi</label>
                        <select
                            data-testid="customertypeSelect"
                            id="customerSelect"
                            value={selectedTyyppi}
                            onChange={(e) => setSelectedTyyppi(e.target.value)}
                        >
                            <option value="" >Valitse asiakastyyppi</option>
                            {asiakastyypit.map((tyyppi) => (
                                <option key={tyyppi.id} value={tyyppi.id} data-testid="customertypeOption">
                                    {tyyppi.selite}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleSearch} data-testid="searchButton">Hae</button>
                    <button onClick={handleAdd} data-testid="addButton">Lisää uusi</button>

                    {loading && <p data-testid="loading">Loading...</p>}
                    {showNoDataMessage && <p data-testid="notFound">Annetuilla hakuehdoilla ei löytynyt dataa</p>}

                    {!loading && !noData && (
                        <table data-testid="customerTable">
                            <thead>
                                <tr type="row">
                                    <th>Id</th>
                                    <th>Nimi</th>
                                    <th>Osoite</th>
                                    <th>Postinumero</th>
                                    <th>Postitoimipaikka</th>
                                    <th>Puhelinnumero</th>
                                    <th>Tyyppi_id</th>
                                    <th>Tyyppi_selite</th>
                                    <th>Poista</th>
                                    <th>Muokkaa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asiakkaat.map((asiakas) => (
                                    <tr key={asiakas.id} role="row">
                                        <td >{asiakas.id}</td>
                                        <td >{asiakas.nimi}</td>
                                        <td >{asiakas.osoite}</td>
                                        <td >{asiakas.postinumero}</td>
                                        <td >{asiakas.postitoimipaikka}</td>
                                        <td >{asiakas.puhelinnro}</td>
                                        <td >{asiakas.tyyppi_id}</td>
                                        <td >{asiakas.tyyppi_selite}</td>
                                        <td ><button data-testid="deleteButton" onClick={() => handleDelete(asiakas.id, asiakas.nimi)}>Poista {asiakas.id}</button></td>
                                        <td ><button data-testid="editButton" onClick={() => handleEdit(asiakas.id)}>Muokkaa asiakasta {asiakas.id}</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            ) : showAddForm ? (
                <div>
                    <div>
                        <label htmlFor="nameEdit">Nimi</label>
                        <input
                            type="text"
                            id="nameEdit"
                            data-testid="nameEdit"
                            value={nimi}
                            onChange={(e) => setNimi(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="addressEdit">Osoite</label>
                        <input
                            type="text"
                            id="addressEdit"
                            data-testid="addressEdit"
                            value={osoite}
                            onChange={(e) => setOsoite(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneEdit">Puhelin</label>
                        <input
                            type="text"
                            id="phoneEdit"
                            data-testid="phoneEdit"
                            value={puhelin}
                            onChange={(e) => setPuhelin(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="customertypeSelectEdit">Asiakastyyppi</label>
                        <select
                            data-testid="customertypeSelectEdit"
                            id="customertypeSelectEdit"
                            value={selectedTyyppi}
                            onChange={(e) => setSelectedTyyppi(e.target.value)}
                        >
                            <option value="" >Valitse asiakastyyppi</option>
                            {asiakastyypit.map((tyyppi) => (
                                <option key={tyyppi.id} value={tyyppi.id} data-testid="customertypeOption">
                                    {tyyppi.selite}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleSave} data-testid="saveButton">Tallenna</button>
                    <button onClick={handleCancel} data-testid="cancelButton">Peruuta</button>
                </div>
            ) :  (
                <div>
                    <div>
                        <label htmlFor="nameEdit">Nimi</label>
                        <input
                            type="text"
                            id="nameEdit"
                            data-testid="nameEdit"
                            value={nimi}
                            onChange={(e) => setNimi(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="addressEdit">Osoite</label>
                        <input
                            type="text"
                            id="addressEdit"
                            data-testid="addressEdit"
                            value={osoite}
                            onChange={(e) => setOsoite(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneEdit">Puhelin</label>
                        <input
                            type="text"
                            id="phoneEdit"
                            data-testid="phoneEdit"
                            value={puhelin}
                            onChange={(e) => setPuhelin(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="customertypeSelectEdit">Asiakastyyppi</label>
                        <select
                            data-testid="customertypeSelectEdit"
                            id="customertypeSelectEdit"
                            value={selectedTyyppi}
                            onChange={(e) => setSelectedTyyppi(e.target.value)}
                        >
                            <option value="" >Valitse asiakastyyppi</option>
                            {asiakastyypit.map((tyyppi) => (
                                <option key={tyyppi.id} value={tyyppi.id} data-testid="customertypeOptionEdit">
                                    {tyyppi.selite}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button onClick={handleSaveEdit} data-testid="saveEditButton">Tallenna muutos</button>
                    <button onClick={handleCancelEdit} data-testid="cancelEditButton">Peruuta muokkaus</button>
                </div>
            )}
        </div>
    )
}

export { Asiakas };