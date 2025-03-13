using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Esittele 3 alkioinen double taulukko ja lue siihen käyttäjältä arvot. 
Tulosta lopuksi syötettyjen lukujen summa ja keskiarvo seuraavasti:

SUMMA :     12.23
KESKIARVO : 4.07
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            double[] taulukko = new double[3];
            
            int i;
            
            for (i = 0; i < taulukko.Length; i++)
            {
                Console.Write("Anna {0} luku:", i+1);
                taulukko[i] =double.Parse(Console.ReadLine());
            }
            Console.WriteLine("SUMMA :     {0:F2}", taulukko.Sum());
            Console.WriteLine("KESKIARVO : {0:F2}",taulukko.Sum()/3);
        }
    }
}
