using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
/*
Jos Main-funktioon ei tullut yhtään parameteriä (0 kpl), niin silloin 
"parametrit.txt tiedostoon kirjoitetaan teksti "Ohjelma ei saanut parametreja".

Jos Main-funktioon tuli parametreja niin kirjoita pelkästään
tulleet parametrit ”parametrit.txt” tiedostoon allekkain.

Lopuksi lue tiedostosta sinne kirjoitetut tiedot rivi kerrallaan ja tulosta näytölle.

Käytä funktioita:

Tallenna
LueJaTulosta


HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void Main()

HUOM 2!
Kun kirjoitat tiedostoon tai luet sieltä, niin käytä pelkkää tiedostonimeä parametrit.txt
Tiedostonimen yhteydessä ei saa olla määritelty polkua!

StreamWriter ja StreamReader muuttujien esittelyt pitää olla näin:

StreamWriter sw = new StreamWriter("parametrit.txt");
StreamReader sr = new StreamReader("parametrit.txt");

*/
namespace Projekti
{
    class MyProgram
    {
        public static void Tallenna(string[] args)
        {
            StreamWriter sw = new StreamWriter("parametrit.txt");

            if (args.Length <= 0 )
            {
                sw.WriteLine("Ohjelma ei saanut parametreja");
            }
            else
            {
                for (int i = 0; i < args.Length; i++)
                {
                    sw.WriteLine(args[i]);
                }
            }
            sw.Close();
        }

        public static void LueJaTulosta()
        {
            StreamReader sr = new StreamReader("parametrit.txt");
            while (sr.EndOfStream == false)
            {
                Console.WriteLine(sr.ReadLine());
            }
            sr.Close();
        }

        public static void Main(string[] args)
        {
            Tallenna(args);
            LueJaTulosta();
        }
    }
}