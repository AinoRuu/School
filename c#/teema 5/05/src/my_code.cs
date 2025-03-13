/*
Luo 7 alkioinen float-taulukko ja lue siihen käyttäjältä arvoja. Kun käyttäjä syöttää arvoa 
taulukkoon, niin ohjelma ei saa kaatua vaan väärä arvo on kysyttävä uudestaan. 
Lajittele taulukko ja tulosta taulukon minimi- ja maksimiarvot yhden desimaalin
tarkkuudella seuraavasti:

MIN : 12.3
MAX : 34.9


Käytä funktioita:

LuoTaulukko         : funktio palauttaa luodun taulukon
KysyArvotTaulukkoon : funktio saa parametrina taulukon
LajitteleTaulukko   : funktio saa parametrina taulukon
TulostaTiedot       : funktio saa parametrina taulukon

HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void Main()

*/
namespace Projekti
{
    class MyProgram
    {
        public static float[] LuoTaulukko()
        {
            float[] taulukko = new float[7];
            return taulukko;
        }
        public static void KysyArvotTaulukkoon(float[] taulukko)
        {
            float Luku;
            bool bOikea;
           
            for (int i = 0; i < taulukko.Length; i++)
            {
                Console.Write("Anna oikea arvo:");
                bOikea = float.TryParse(Console.ReadLine(), out Luku);

                while (bOikea == false)
                {
                    Console.Write("Anna oikea arvo:");
                    bOikea = float.TryParse(Console.ReadLine(), out Luku);
                }
                taulukko[i] = Luku;
            }
        }
        public static void LajitteleTaulukko(float[] taulukko)
        {
            Array.Sort(taulukko);
        }
        public static void TulostaTiedot(float[] taulukko)
        {
                Console.WriteLine("MIN : {0:F1}", taulukko[0]);
                Console.WriteLine("MAX : {0:F1}", taulukko[6]);
        }

        public static void Main()
        {
            float[] taulukko= LuoTaulukko();

            KysyArvotTaulukkoon(taulukko);

            LajitteleTaulukko(taulukko);

            TulostaTiedot(taulukko);

        }
    }
}