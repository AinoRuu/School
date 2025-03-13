using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Laita vakioon ARVATTAVA_LUKU joku arvo väliltä 1-500. Tee ohjelma, joka pyytää arvaamaan lukua
do-while-silmukassa, kunnes käyttäjä arvaa luvun oikein.

Jos käyttäjä syötti isomman luvun kuin vakiossa, niin tulosta :

"Annoit liian ison luvun" 

Jos taas käyttäjän syöttämä luku oli pienempi kuin vakion luku niin tulosta :

"Annoit liian pienen luvun"

Kun käyttäjä arvaa luvun oikein niin tulosta :

"Oikein, arvasit luvun 27 kerralla!" 

Missä siis arvo 27 kertoo montako kierrosta meni ennen kuin käyttäjä arvasi oikein

Kun testaat/palautat koodin, niin laita vakioon arvoksi 308.
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Your code here
            const int ARVATTAVA_LUKU = 308;
            int kierros = 0;
            int arvaus = 0;

            do
            {
                Console.WriteLine("Arvaa kokonaisluku");
                arvaus = int.Parse(Console.ReadLine());
                if (arvaus > ARVATTAVA_LUKU)
                {
                    Console.WriteLine("Annoit liian ison luvun");
                }
                else if (arvaus < ARVATTAVA_LUKU) 
                {
                    Console.WriteLine("Annoit liian pienen luvun");
                }
                kierros++;
            } while (arvaus != ARVATTAVA_LUKU);
            Console.WriteLine("Oikein, arvasit luvun {0} kerralla!", kierros);
        }
    }
}
