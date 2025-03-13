using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
/*
Lue käyttäjältä teksti string tyyppiseen muuttujaan. Muuta koko teksti pieniksi kirjaimiksi 
ja kirjoita tiedostoon "kirjaimet.txt" allekkain joka toinen kirjain alkaen ensimmäisestä.

Esimerkiksi jos alkuperäinen teksti oli "TiiSTaI", niin se muutetaan "tiistai"
ja kirjoitetaan tiedostoon alla olevalla tavalla (HUOM! ei tyhjiä rivejä)

t
i
t
i

HUOM 1!
Kun kirjoitat tiedostoon tai luet sieltä, niin käytä pelkkää tiedostonimeä kirjaimet.txt
Tiedostonimen yhteydessä ei saa olla määritelty polkua!

StreamWriter ja StreamReader muuttujien esittelyt pitää olla näin:

StreamWriter sw = new StreamWriter("kirjaimet.txt");
*/
namespace Projekti
{
    class MyProgram
    {
        static void Main()
        {
            Console.Write("Anna teksti:");
            string sTeksti = Console.ReadLine();
            string sAlaTeksti = sTeksti.ToLower();

            StreamWriter sw = new StreamWriter("kirjaimet.txt");
            char c;
            for (int i = 0; i < sAlaTeksti.Length; i+=2)
            {
                c = sAlaTeksti[i];
                sw.WriteLine(c);
            }    
            sw.Close();
        }
    }
}