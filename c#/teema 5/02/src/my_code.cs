/*
Kysy käyttäjältä kuinka iso taulukko luodaan. Luo taulukko ja arvo siihen arvosanoja 
väliltä 0-5. Tutki kuinka moni sai hylätyn arvosanan eli arvosanan 0. 
Tulosta määrä näytölle seuraavalla tavalla:

Hylättyjä arvosanoja oli : 4 kpl

Käytä ohjelmassa seuraavia funktioita :

KysyKoko        (funktio ei palauta mitään, viittaukset out:lla) - tavoitteena saada taulukolle koko
LuoTaulukko     (funktio ei palauta mitään, viittaukset out:lla, parametrina ensin koko tieto, sitten taulukko) - tavoitteena saada halutun kokoinen taulukko
ArvoArvosanat   (funktio ei palauta mitään, vain yksi parametri) - tavoitteena saada arvosanat taulukkoon
TutkiHylatyt    (funktio palauttaa hylättyjen määrän, vain yksi parametri) - tavoitteena tutkia taulukosta hylättyjen arvosanojen lukumäärä
Tulosta         (funktio ei palauta mitään, vain yksi parametri) - tavoitteena tulostaa tehtävässä pyydetty tuloste


HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void MyMain()

*/
namespace Projekti
{
    class MyProgram
    {
        public static void KysyKoko(out int koko)
        {
            Console.Write("Anna taulukon koko: ");
            koko = int.Parse(Console.ReadLine());
        }

        public static void LuoTaulukko(int koko, out int[] iTaulu)
        {
            iTaulu = new int[koko];

        }

        public static void ArvoArvosanat(int[] arvosanat)
        {
            Random random = new Random();

            for (int i = 0; i < arvosanat.Length; i++)
            {
                arvosanat[i] = random.Next(6);
            }
        }

        public static int TutkiHylatyt(int[] arvosanat)
        {
            int iHylatyt = 0;

            for (int i = 0; i < arvosanat.Length; i++)
            {
                if (arvosanat[i] == 0)
                {
                    iHylatyt++;
                }
            }
            return iHylatyt;
        }

        public static void Tulosta(int maara)
        {
            Console.WriteLine("Hylättyjä arvosanoja oli : {0} kpl", maara);

        }
        public static void Main()
        {
            int koko = 0;
            KysyKoko(out koko);

            LuoTaulukko(koko, out int[] arvosanat);

            ArvoArvosanat(arvosanat);

            int hylatyt = TutkiHylatyt(arvosanat);

            Tulosta(hylatyt);


        }
    }
}