/*
Tee ohjelma, jossa kysytään KysyJaTestaaLuku() nimisessä funktiossa käyttäjältä kokonaisluku. 
Funktio palauttaa kokonaislukuarvon seuraavasti:

1, jos syötetty luku on positiivinen.
0, jos syötetty luku on nolla.
-1, jos syötetty luku on negatiivinen. 

Tulosta näiden paluuarvojen perusteella Mainissa ilmoitus ruudulle.

”Luku oli positiivinen”, jos paluuarvo oli 1.
”Luku oli nolla”, jos paluuarvo oli 0
”Luku oli negatiivinen”, jos paluuarvo oli -1.

Käyttäkää Mainissa switch-case-rakennetta

HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void Main()

*/
namespace Projekti
{
    class MyProgram
    {
        public static int KysyJaTestaaLuku()
        {
            Console.WriteLine("Anna kokonaisluku");
            int kysytty = int.Parse(Console.ReadLine());
            int palautus;
            if (kysytty > 0)
            {
                palautus = 1;
            }
            else if (kysytty == 0)
            {
                palautus = 0;
            }
            else
            {
                palautus = -1;
            }
            return palautus;
        }
        public static void Main()
        {
            int ipalautus = KysyJaTestaaLuku();
            switch (ipalautus)
            {
                case 0:
                    Console.WriteLine("Luku oli nolla");
                    break;
                case 1:
                    Console.WriteLine("Luku oli positiivinen");
                    break;
                case -1:
                    Console.WriteLine("Luku oli negatiivinen");
                    break;
            }
        }
    }
}