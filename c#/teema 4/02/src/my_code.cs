using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


/*
Esittele 10 alkioinen int taulukko ja arvo siihen lukuja väliltä 0-10. 
Vain parilliset luvut sallitaan.Jos arvottiin pariton luku niin sen 
tilalle on arvottava uusi luku.

Tulosta luvut ensin taulukon alusta loppuun tabulaattorilla eroteltuna
ja seuraavalla rivillä lopusta alkuun tabulaattorilla eroteltuna
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            int[] taulukko = new int[10];
            int i;
            
            for (i = 0; i < taulukko.Length; i++)
            {
                Random r = new Random();
                int satunnainen = r.Next(11);

                if (satunnainen % 2 == 0)
                {
                    taulukko[i] = satunnainen;
                }
                else
                {

                }
            }
            
            foreach(int luku in taulukko) 
            { 
                Console.Write(luku+"\t");
            }
            Console.WriteLine();
            for (i = 9;i >= 0;i--) 
            {
                Console.Write(taulukko[i] + "\t");
            }
        }
    }
}

