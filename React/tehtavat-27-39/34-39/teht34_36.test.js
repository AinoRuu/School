import {testTeht34_a, testTeht34_b, testTeht35, testTeht36} from './test_34_36'

// HUOM! Aja tämä tiedosto JEST:llä!!!

describe("Tehtävä 34", () => {  

    test('Tehtävä 34, testataan lisääminen (1p)', () => {
        testTeht34_a();
    });

    test('Tehtävä 34, testataan TableRow-komponentti (1p)', () => {
      testTeht34_b();
    });
  })

  describe("Tehtävä 35", () => {  

    test('Tehtävä 35, testataan Poista nappi (1p)', () => {
      testTeht35();
    });

  });

  describe("Tehtävä 36", () => {  

    test('Tehtävä 36, Lisätään opintojakso (1p)', () => {
        testTeht36();
    });
  });
