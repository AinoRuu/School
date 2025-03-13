using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Lue käyttäjältä merkkejä, kunnes käyttäjä painaa enteriä. Isot kirjaimet tulostuvat pienenä 
ja pienet kirjaimet tulostuvat isona. Muut merkit eivät tulostu.

Riittää, että toimii kirjaimilla väliltä a-z ja A-Z.
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            char merkki;
            Console.WriteLine("Syötä merkkejä, enter lopettaa");
            do
            {
                merkki = Console.ReadKey(true).KeyChar;

                if (char.IsLower(merkki))
                {
                    merkki=char.ToUpper(merkki);
                    Console.Write(merkki);
                }
                else if (char.IsUpper(merkki))
                {
                    merkki=char.ToLower(merkki);
                    Console.Write(merkki);
                }
                else
                {
                    Console.Write("");
                }
                    
            } while (merkki != '\r');

            Console.WriteLine();
        }
    }
}

