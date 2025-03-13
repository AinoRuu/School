using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Data;
/*
Arvo 40 kpl liukulukuja väliltä 1.4 – 5.8 ja kirjoita ne "datat.txt" tiedostoon allekkain. 
Älä käytä taulukkoa tässä vaiheessa.

Sen jälkeen luo 40 alkioinen double-taulukko ja lue 
arvot tiedostosta taulukkoon. Tämän jälkeen tulosta taulukon lukujen 
summa, keskiarvo, minimiarvo ja maksimiarvo seuraavalla tavalla

SUMMA : 143.2
KA    : 3.6
MIN   : 1.4
MAX   : 5.7

Käytä funktioita:

ArvoJaTallennaTiedostoon
LueTiedostosta
TulostaTiedot


HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void Main()

HUOM 2!
Kun kirjoitat tiedostoon tai luet sieltä, niin käytä pelkkää tiedostonimeä datat.txt
Tiedostonimen yhteydessä ei saa olla määritelty polkua!

StreamWriter ja StreamReader muuttujien esittelyt pitää olla näin:

StreamWriter sw = new StreamWriter("datat.txt");
StreamReader sr = new StreamReader("datat.txt");
*/
namespace Projekti
{
    class MyProgram
    {
        public static void ArvoJaTallennaTiedostoon()
        {
            Random satunnainen = new Random();
            double dArvottu, dVali, dLuku;
            StreamWriter sw = new StreamWriter("datat.txt");
            dVali = 5.8 - 1.4;


            for (int i = 0; i < 40; i++)
            {
                dArvottu= satunnainen.NextDouble();
                dLuku = (dVali * dArvottu) + 1.4;
                sw.WriteLine(dLuku);
            }
            sw.Close();
        }
        public static void LueTiedostosta(double[] taulukko)
        {
            StreamReader sr = new StreamReader("datat.txt");
            double dLuku;
            bool bOnnistui;
            for (int i = 0; sr.EndOfStream == false; i++)
            {
                bOnnistui = double.TryParse(sr.ReadLine(), out dLuku);
                taulukko[i] =dLuku;
            }
            sr.Close();
            Array.Sort(taulukko);
        }
        public static void TulostaTiedot(double[] taulukko)
        {
            double dsumma = 0;
            double dkeski = 0;
            for (int i = 0; i < taulukko.Length; i++)
            {
                dsumma = dsumma + taulukko[i];
            }
                dkeski = dsumma / 40;
                Console.WriteLine("SUMMA : {0:F1}", dsumma);
                Console.WriteLine("KA    : {0:F1}", dkeski);
                Console.WriteLine("MIN   : {0:F1}", taulukko[0]);
                Console.WriteLine("MAX   : {0:F1}", taulukko[39]);
        }
        public static void Main()
        {
            ArvoJaTallennaTiedostoon();

            double[] taulukko =new double[40];

            LueTiedostosta(taulukko);

            TulostaTiedot(taulukko);
        }
    }
}