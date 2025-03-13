using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Lotossa arvotaan seitsemän (7) varsinaista numeroa ja yksi (1) lisänumero. Numerot ovat väliltä 1-40. 
Esittele kahdeksan (8) alkioinen lotto-taulukko ja arvo siihen lottonumerot (7 ensimmäistä on siis 
varsinaisia lottonumeroita ja viimeinen on lisänumero). Muista, että samaa numeroa ei saa tulla 
lottoriviin eli mieti miten voisit tarkistaa onko arvottu numero jo lottorivissä entuudestaan ja 
silloin sen tilalle pitää arpoa uusi numero.

Tulosta ensi arvottu rivi ja sitten lajiteltu lottorivi seuraavasti:

ARVOTTU   : 31 4 1 19 25 16 12 13  
LAJITELTU : 1 4 12 16 19 25 31 + 13

HUOM!! seitsemän varsinaista numeroa on lajiteltu suuruusjärjestykseen! 
Mutta lisänumeroa ei tietenkään saa ottaa lajitteluun mukaan! Löytysköhän Array.Sort:sta 
sellainen ominaisuus, jolla tämän saisi ratkaistua?
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            int[] iLotto = new int[8];
            Random rand = new Random();
            int Luku=0;
            int Lisa;
            int i=0;
            int index;

            for (i = 0; i < 8; i++)
            {
                iLotto[i] = rand.Next(1, 41);
                do
                {
                    iLotto[i] = rand.Next(1, 41);
                    index = Array.IndexOf(iLotto, iLotto[i]);
                } while (index != i);
            }

            Console.Write("ARVOTTU   : ");
            foreach (int numero in iLotto)
            {
                Console.Write(numero+ " ");
            }

            Console.WriteLine();
            Lisa = iLotto[7];
            Console.Write("LAJITELTU : ");

            iLotto=iLotto.SkipLast(1).ToArray();

            Array.Sort(iLotto);

            for (i = 0; i < iLotto.Length; i++)
            {
                Console.Write(iLotto[i] + " ");
            }
            Console.WriteLine("+ "  +Lisa);
        }
    }
}

