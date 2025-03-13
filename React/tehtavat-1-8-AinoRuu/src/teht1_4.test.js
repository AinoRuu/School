import { fireEvent, render, screen } from '@testing-library/react';
import { Laskuri, Arvo } from './teht1_4'


describe("Tehtävä 1, Laskuri ja kasvata nappi (1p)", () => {
  test('Tehtävä 1, Laskuri renderöi (0.25p)', () => {
    render(<Laskuri />);
  });
  test('Tehtävä 1, H1-elementti löytyy (0.25p)', () => {  
    render(<Laskuri />);
    const laskuriElement = screen.getByText(/Laskuri on/i);
    expect(laskuriElement).toBeInTheDocument();
  });
  test('Tehtävä 1, Kasvata nappi löytyy (0.25p)', () => {  
    render(<Laskuri />);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    expect(kasvataNappi).toBeInTheDocument();
  });
  test('Tehtävä 1, Kasvata nappi toimii (0.25p)', () => {  
    render(<Laskuri />);
    const laskuriElement = screen.getByText(/Laskuri on/i);
    expect(laskuriElement).toHaveTextContent('Laskuri on 0');

    const kasvataNappi = screen.getByText(/Kasvata/i);
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 1');
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 2');
    const rnd = Math.floor(Math.random() * 10)
    for(let i=0; i < rnd; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent(`Laskuri on ${rnd+2}`);
  });
})

describe("Tehtävä 2, Nollaa nappi (1p)", () => {
  test('Tehtävä 2, Nollaa nappi löytyy (0.25p)', () => {
    render(<Laskuri />);
    const nollaaNappi = screen.getByText(/Nollaa/i);
    expect(nollaaNappi).toBeInTheDocument();
  })
  test('Tehtävä 2, Nollaa nappi toimii (0.75p)', () => {
    render(<Laskuri />);
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 2');
    const nollaaNappi = screen.getByText(/Nollaa/i);
    fireEvent.click(nollaaNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 0');
  });
})

describe("Tehtävä 3, Laskurin arvo punaisella (1p)", () => {
  test('Tehtävä 3, Ei tyyliä pienillä arvoilla (0.25p)', () => {
    render(<Laskuri />);
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    const rnd = Math.floor(Math.random() * 10)
    for(let i=0; i < rnd; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent(`Laskuri on ${rnd}`);
    expect(laskuriElement).toHaveStyle('color : black')
  });
  test('Tehtävä 3, Tyyli yli 10 arvoilla (0.75p)', () => {
    render(<Laskuri />);
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    for(let i=0; i < 12; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent('Laskuri on 12');
    expect(laskuriElement).toHaveStyle('color : red')
  });
})

describe("Tehtävä 4, Arvo-komponentin testaaminen (1p)", () => {
  test('Tehtävä 4, Arvo-komponentti renderöi (0.25p)', () => {
    render(<Arvo />);
  });
  test('Tehtävä 4, Arvo-props toimii (0.75p)', () => {
    const rnd = Math.floor(Math.random() * (50 - 11) + 11)
    render(<Arvo arvo={rnd} />);
    const laskuriElement = screen.getByText(/Laskuri on/i);

    expect(laskuriElement).toHaveTextContent(`Laskuri on ${rnd}`);
    expect(laskuriElement).toHaveStyle('color : red')
  });
})
