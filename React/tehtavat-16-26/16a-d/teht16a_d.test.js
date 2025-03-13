import { fireEvent, render, screen } from '@testing-library/react';
import { Laskuri, Arvo } from './teht16a_d'


describe("Tehtävä 16a, kasvata nappi (1p)", () => {
  test('Tehtävä 16a (1p)', () => {
    render(<Laskuri />);
    expect(new Laskuri()).not.toBeInstanceOf(Function) 
    const laskuriElement = screen.getByText(/Laskuri on/i);
    expect(laskuriElement).toHaveTextContent('Laskuri on 0');

    const kasvataNappi = screen.getByText(/Kasvata/i);
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 1');
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 2');
    for(let i=0; i < 10; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent('Laskuri on 12');
  });
})

describe("Tehtävä 16b, nollaa nappi (1p)", () => {
  test('Tehtävä 16b (1p)', () => {
    render(<Laskuri />);
    expect(new Laskuri()).not.toBeInstanceOf(Function) 
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    fireEvent.click(kasvataNappi)
    fireEvent.click(kasvataNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 2');
    const nollaaNappi = screen.getByText(/Nollaa/i);
    fireEvent.click(nollaaNappi)
    expect(laskuriElement).toHaveTextContent('Laskuri on 0');
  })
})

describe("Tehtävä 16c, laskurin arvo punaisella (1p)", () => {
  test('Tehtävä 16c (1p)', () => {
    render(<Laskuri />);
    expect(new Laskuri()).not.toBeInstanceOf(Function) 
    const laskuriElement = screen.getByText(/Laskuri on/i);
    const kasvataNappi = screen.getByText(/Kasvata/i);
    for(let i=0; i < 12; i++)
      fireEvent.click(kasvataNappi)

    expect(laskuriElement).toHaveTextContent('Laskuri on 12');
    const nollaaNappi = screen.getByText(/Nollaa/i);
    expect(laskuriElement).toHaveStyle('color : red')
  })
})

describe("Tehtävä 16d, Arvo-komponentin testaaminen (1p)", () => {
  test('Tehtävä 16d (1p)', () => {
    render(<Arvo arvo="34" />);
    expect(new Arvo()).not.toBeInstanceOf(Function)

    const laskuriElement = screen.getByText(/Laskuri on/i);

    expect(laskuriElement).toHaveTextContent('Laskuri on 34');
    expect(laskuriElement).toHaveStyle('color : red')
  })
})
