using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Esittele sellainen 2-ulotteinen taulukko, johon voit tallentaa maanantain ja perjantain välisenä aikana 
neljä mittaustulosta jokaiselta päivältä (mittaustulos on sademäärä milleinä). Lue käyttäjältä nämä 
mittaustulokset taulukkoon ja tulosta lopuksi jokaisen päivän mittaustulosten 
keskiarvo seuraavan esimerkin mukaisesti :

Maanantai   : 12.0 mm
Tiistai     : 0.0 mm
Keskiviikko : 1.9 mm
Torstai     : 22.8 mm
Perjantai   : 0.9 mm
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            double[,] dTaulukko = new double[5,4];
            int j=0;

            do
            {
                Console.WriteLine("Anna maanantain {0}. mittaustulos milleinä:",j+1);
                dTaulukko[0, j] = double.Parse(Console.ReadLine());
                j++;
            }while(j<4);
            

            j = 0;
            do
            {
                Console.WriteLine("Anna tiistain {0}. mittaustulos milleinä:", j+1);
                dTaulukko[1, j] = double.Parse(Console.ReadLine());
                j++;
            } while (j < 4);

            j = 0;
            do
            {
                Console.WriteLine("Anna keskiviikon {0}. mittaustulos milleinä:", j + 1);
                dTaulukko[2, j] = double.Parse(Console.ReadLine());
                j++;
            } while (j < 4);


            
            j = 0;
            do
            {
                Console.WriteLine("Anna torstain {0}. mittaustulos milleinä:", j + 1);
                dTaulukko[3, j] = double.Parse(Console.ReadLine());
                j++;
            } while (j < 4);
            

            j = 0;
            do
            {
                Console.WriteLine("Anna perjantain {0}. mittaustulos milleinä:", j + 1);
                dTaulukko[4, j] = double.Parse(Console.ReadLine());
                j++;
            } while (j < 4);
            

            double MaKa = (dTaulukko[0, 0] + dTaulukko[0, 1] + dTaulukko[0, 2] + dTaulukko[0, 3]) / 4;
            double TiKa = (dTaulukko[1, 0] + dTaulukko[1, 1] + dTaulukko[1, 2] + dTaulukko[1, 3]) / 4;
            double KeKa = (dTaulukko[2, 0] + dTaulukko[2, 1] + dTaulukko[2, 2] + dTaulukko[2, 3]) / 4;
            double ToKa = (dTaulukko[3, 0] + dTaulukko[3, 1] + dTaulukko[3, 2] + dTaulukko[3, 3]) / 4;
            double PeKa = (dTaulukko[4, 0] + dTaulukko[4, 1] + dTaulukko[4, 2] + dTaulukko[4, 3]) / 4;

            Console.WriteLine("Maanantai   : {0:F1} mm",MaKa);
            Console.WriteLine("Tiistai     : {0:F1} mm",TiKa);
            Console.WriteLine("Keskiviikko : {0:F1} mm",KeKa);
            Console.WriteLine("Torstai     : {0:F1} mm",ToKa);
            Console.WriteLine("Perjantai   : {0:F1} mm",PeKa);
        }
    }
}

