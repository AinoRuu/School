using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Kysy käyttäjältä ensin tiedot:
- mistä luvusta tulostetaan
- mihin asti ja
- millaisella askelluksella. 

Tarkista sen jälkeen, että;
- mistä on oltava pienempi kuin mihin ja 
- askelluksen on oltava suurempi kuin 0.

Jos ehdot eivät toteudu, kysy kaikki tiedot uudestaan.

Esimerkki:
Jos mistä on 5, mihin on 11 ja askellus on 2, niin ohjelma tulostaa kaikilla
kolmella silmukalla saman, alla olevan lukusarjan (lukujen välissä kaksi välilyöntiä).
Tulosta myös millä silmukalla luvut on tulostettu. 

WHILE:
5  7  9  11

DO-WHILE:
5  7  9  11

FOR:
5  7  9  11
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            int j = 0;
            while (j == 0)
            {
                Console.WriteLine("Mistä luvusta tulostetaan?");
                int alku;
                int.TryParse(Console.ReadLine(), out alku);

                Console.WriteLine("Mihin asti?");
                int loppu;
                int.TryParse(Console.ReadLine(), out loppu);

                Console.WriteLine("Millaisella askelluksella?");
                int askellus;
                int.TryParse(Console.ReadLine(), out askellus);

                int k = alku;
                int c = alku;
                int a = alku;
                int b = alku;
                if (c < loppu && askellus > 0)
                {
                    Console.WriteLine("WHILE:");
                    while (k <= loppu)
                    {
                        Console.Write(c + "  ");
                        c += askellus;
                        k += askellus;
                    }
                    k = a;
                    Console.WriteLine();
                    Console.WriteLine("DO-WHILE:");
                    do
                    {
                        Console.Write(a + "  ");
                        a += askellus;
                        k += askellus;
                    } while (k <= loppu);

                    Console.WriteLine();
                    Console.WriteLine("FOR:");
                    for (k = b; k <= loppu; k += askellus)
                    {
                        Console.Write(b + "  ");
                        b += askellus;
                        j++;
                    }
                }
                else if (j >= loppu || askellus == 0)
                {
                    Console.WriteLine("Mistä luvusta tulostetaan?");
                    int.TryParse(Console.ReadLine(), out alku);

                    Console.WriteLine("Mihin asti?");
                    int.TryParse(Console.ReadLine(), out loppu);

                    Console.WriteLine("Millaisella askelluksella?");
                    int.TryParse(Console.ReadLine(), out askellus);
                }
                else
                {
                    Console.WriteLine("Mistä luvusta tulostetaan?");
                    int.TryParse(Console.ReadLine(), out alku);

                    Console.WriteLine("Mihin asti?");
                    int.TryParse(Console.ReadLine(), out loppu);

                    Console.WriteLine("Millaisella askelluksella?");
                    int.TryParse(Console.ReadLine(), out askellus);
                }
            }
        }
    }
}

