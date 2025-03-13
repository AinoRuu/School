import { fireEvent, render, screen, within  } from '@testing-library/react';
import { Lista, Rivi, Taulukko, Otsikko, TauluRivi, Teht6  } from './teht5_8'

describe("Tehtävä 5, Lista-elementti (1p)", () => {
  test('Tehtävä 5, Lista-elementti olemassa(0.25p)', () => {
    render(<Lista />);
    const lista = screen.getByRole("list");
    expect(lista).toBeInTheDocument();
  });
  test('Tehtävä 5, Listalla on oikeat elementit (0.25p)', () => {
    render(<Lista />);
    const lista = screen.getByRole("list");
    const { getAllByRole } = within(lista)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(4)
    expect(items[0]).toBeInTheDocument();
    expect(items[1]).toBeInTheDocument();
    expect(items[2]).toBeInTheDocument();
    expect(items[3]).toBeInTheDocument();

  });
  test('Tehtävä 5, Rivi-elementti olemassa(0.25p)', () => {
    render(<Rivi />);
    const li = screen.getByRole("listitem");
    expect(li).toBeInTheDocument();
  });
  test('Tehtävä 5, Rivi-elementti arvoilla(0.25p)', () => {
    render(<Rivi etunimi="Maija" sukunimi="Opiskelija" aloitusvuosi="2013" />);
    const li = screen.getByRole("listitem");
    expect(li).toHaveTextContent("Maija, Opiskelija, 2013")
  });

})

const otsikot = { nimi: "Etunimi", osoite : "Lähiosoite", aloitusvuosi : "Aloitusvuosi"}
const opiskelijat = [
    { nimi : "Maija", osoite : "Microkatu 1", aloitusvuosi : 2001},
    { nimi : "Liisa", osoite : "Opistotie 2", aloitusvuosi : 1999},
    { nimi : "Leena", osoite : "Kauppakatu 7 a 2", aloitusvuosi : 1997},
    { nimi : "Kaisa", osoite : "Wilman polku 9", aloitusvuosi : 2012},
    { nimi : "Sirpa", osoite : "Kotipolku 8", aloitusvuosi : 2021}
];

describe("Tehtävä 6, Taulukko-elementti (1p)", () => {  

    test('Tehtävä 6, Taulukko-elementti thead-lohko (0.25p)', () => {
        render(<Taulukko data={opiskelijat} otsikot={otsikot}/>)
        
        const lohkot = screen.getAllByRole("rowgroup");
        expect(lohkot.length).toBe(2);

        const { getAllByRole } = within(lohkot[0])
        const rows = getAllByRole("row")
        expect(rows.length).toBe(1);
        const th = getAllByRole("columnheader")
        expect(th.length).toBe(3);
    });
    test('Tehtävä 6, Taulukko-elementti tbody-lohko (0.25p)', () => {
        render(<Taulukko data={opiskelijat} otsikot={otsikot}/>)
        
        const lohkot = screen.getAllByRole("rowgroup");
        expect(lohkot.length).toBe(2);

        const data_rows = within(lohkot[1]).getAllByRole("row")
        expect(data_rows.length).toBe(5);        
        const td = within(data_rows[0]).getAllByRole("cell");
        expect(td.length).toBe(3);
        expect(td[0]).toHaveTextContent("Maija")
        expect(td[1]).toHaveTextContent("Microkatu 1")
        expect(td[2]).toHaveTextContent("2001")
    });

    test('Tehtävä 6, TauluRivi-elementti (0.25p)', () => {
        const table = document.createElement('table')
        const { debug } = render(<TauluRivi rivit={opiskelijat}/>, {
            container: document.body.appendChild(table)
        });
        const tbody = screen.getByRole("rowgroup");
        const { getAllByRole } = within(tbody)
        const items = getAllByRole("row")
        expect(items.length).toBe(5)
        //debug(tbody)
    });
    test('Tehtävä 6, Otsikko-elementti (0.25p)', () => {
        const table = document.createElement('table')
        const { debug } = render(<Otsikko otsikot={otsikot}/>, {
            container: document.body.appendChild(table)
        });

        const thead = screen.getByRole("rowgroup");
        const { getAllByRole } = within(thead)
        const items = getAllByRole("columnheader")
        expect(items.length).toBe(3)
    });  
  })
  
  describe("Tehtävä 7, 2 erillistä taulukkoa (1p)", () => {  
  
    test('Tehtävä 7, 2 taulukkoa (0.25p)', () => {
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);
    });
    test('Tehtävä 7, 2 taulukkoa, 4 lohkoa (0.25p)', () => {
        const { debug } = render(<Teht6 />)

        const lohkot = screen.getAllByRole("rowgroup");
        expect(lohkot.length).toBe(4);
    });
    test('Tehtävä 7, Ensimmäisen taulukon otsikot suomeksi (0.25p)', () => {
        //Vinkki tehtävään testin nimessä!
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);
        
        const lohkot = screen.getAllByRole("rowgroup");
        expect(lohkot.length).toBe(4);

        const { getAllByRole } = within(lohkot[0])
        const rows = getAllByRole("row")
        expect(rows.length).toBe(1);
        const th = getAllByRole("columnheader")
        expect(th.length).toBe(3);
        expect(th[0]).toHaveTextContent("Etunimi")
        expect(th[1]).toHaveTextContent("Lähiosoite")
        expect(th[2]).toHaveTextContent("Aloitusvuosi")
    });
    test('Tehtävä 7, Toisen taulukon otsikot englanniksi (0.25p)', () => {
        //Vinkki tehtävään testin nimessä!
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);

        const lohkot = screen.getAllByRole("rowgroup");
        expect(lohkot.length).toBe(4);

        const { getAllByRole } = within(lohkot[2])
        const rows = getAllByRole("row")
        expect(rows.length).toBe(1);
        const th = getAllByRole("columnheader")
        expect(th.length).toBe(3);
        expect(th[0]).toHaveTextContent("First name")
        expect(th[1]).toHaveTextContent("Address")
        expect(th[2]).toHaveTextContent("Starting year")
    });
})

describe("Tehtävä 8, Piilota-nappi (1p)", () => {  
  
    test('Tehtävä 8, Piilota-nappi löytyy (0.25p)', () => {
        const { debug } = render(<Teht6 />)

        const piilotaNappi = screen.getByText(/Piilota/i);
        expect(piilotaNappi).toBeInTheDocument();

    });
    test('Tehtävä 8, Nappi ja taulukot näkyvissä (0.25p)', () => {
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);

        const piilotaNappi = screen.getByText(/Piilota/i);
        expect(piilotaNappi).toBeInTheDocument();
    });
    test('Tehtävä 8, Taulukot piiloon (0.25p)', () => {
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);

        const piilotaNappi = screen.getByText(/Piilota/i);
        // Piilotetaan taulukot
        fireEvent.click(piilotaNappi);
        const tables_after = screen.queryAllByRole("table");
        expect(tables_after.length).toBe(0);
    });
    test('Tehtävä 8, Taulukot näkyvissä taas (0.25p)', () => {
        const { debug } = render(<Teht6 />)

        const tables = screen.getAllByRole("table");
        expect(tables.length).toBe(2);

        const piilotaNappi = screen.getByText(/Piilota/i);
        // Piilotetaan taulukot
        fireEvent.click(piilotaNappi);
        const tables_hidden = screen.queryAllByRole("table");
        expect(tables_hidden.length).toBe(0);
        //Taulukot näkyviin
        fireEvent.click(piilotaNappi);
        const tables_again = screen.queryAllByRole("table");
        expect(tables_again.length).toBe(2);
    });
})