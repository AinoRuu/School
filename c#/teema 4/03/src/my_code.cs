using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;


/*
Lue käyttäjältä pitkähkö teksti string muuttujaan. Muuta kaikki kirjaimet isoiksi kirjaimiksi 
ja tulosta muutettu teksti. Korvaa kaikki isot A kirjaimet huutomerkillä ja tulosta teksti. 
Poista kaikki välilyönnit ja tulosta teksti. Tulosta lopuksi kaikki merkit lopusta alkuun 
yhdellä välilyönnillä eroteltuna 
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            // Your code here
            Console.WriteLine("Anna pitkähkö teksti:");
            string teksti = Console.ReadLine();
            int i;
            teksti= teksti.ToUpper();

            Console.WriteLine(teksti);

            teksti = teksti.Replace('A', '!');

            Console.WriteLine(teksti);

            teksti=teksti.Replace(" ","");
            Console.WriteLine(teksti);

            for (i = teksti.Length; i > 0; i--)
            {
                if (teksti[i-1] == ' ')
                {
                    Console.Write("");
                }
                else
                {
                    Console.Write(teksti[i-1] + " ");
                }
                    
            }
        }
    }
}
