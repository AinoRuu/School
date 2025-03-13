using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
/*
Tee ohjelma, jolla voit laskea kuinka paljon saat työmarkkinatukea kuukaudessa 
jäädessäsi työttömäksi, kun et ole ollut niin pitkään töissä että saisit 
ansiosidonnaista työttömyyspäivärahaa. Työmarkkinatuen ehdot ja määrät ovat 
yksinkertaistettu malli oikeista työmarkkinatuen ehdoista ja ovat seuraavat: 
 
· Työmarkkinatuen määrä on 32,68 euroa/päivä ja sitä maksetaan viideltä päivältä viikossa.
· Lapset korottavat työmarkkinatukea seuraavasti: yksi lapsi 5,27 euroa/pv, kaksi lasta 7,74 euroa/ pv ja kolmesta tai useammasta yhteensä 9,98 e/pv
· Työllistymistä edistävä palvelu korottaa tukea 4,78 e/pv
· Jos tulot ylittävät 300 euroa, niin jokainen sen määrän ylittävä palkkana maksettu euro vähentää tukea 50 senttiä
· Jos asut vanhempiesi taloudessa tukea vähennetään 50% 

Ohjelmalla voi toistaa työmarkkinatuen laskemista niin monta kertaa kuin haluaa. 
Tuki lasketaan kuukaudelle, jossa on 4 viikkoa.

Alla on esimerkki ohjelman toiminnasta:  

Kuinka monta lasta sinulla on: 5
Kuinka monena päivänä olet osallistunut työllistymistä edistävään palveluun: 2
Kuinka paljon olet saanut palkkaa: 320
Asutko vanhempiesi luona (k/e): k
Saat työmarkkinatukea 426.38 euroa kuukaudessa
 
Haluatko laske työmarkkinatuen uusilla tiedoilla (k/e): e

HUOM! Kun käyttäjältä kysytään k/e, niin toteuta sen kysyminen siten, että käyttäjän
pitää painaa enteriä vastauksen jälkeen.
*/
namespace Projekti
{
    class MyProgram
    {
        static void Main()
        {
            string jatko = "k";
            while (jatko == "k")
            {
                Console.Write("Kuinka monta lasta sinulla on: ");
                double Lapsi = double.Parse(Console.ReadLine());

                Console.Write("Kuinka monena päivänä olet osallistunut työllistymistä edistävään palveluun: ");
                double Paivat = double.Parse(Console.ReadLine());

                Console.Write("Kuinka paljon olet saanut palkkaa: ");
                double palkka = double.Parse(Console.ReadLine());

                Console.Write("Asutko vanhempiesi luona (k/e): ");
                string vanhemmat = Console.ReadLine();

                double paivaraha = 32.68;
                double lapsilisalla = 0.0;

                if (Lapsi == 1)
                {
                    lapsilisalla = paivaraha + 5.27;
                }
                else if (Lapsi == 2)
                {
                    lapsilisalla = paivaraha + 7.74;
                }
                else if (Lapsi >= 3)
                {
                    lapsilisalla = paivaraha + 9.98;
                }
                else if(Lapsi <= 0)
                {
                    lapsilisalla = paivaraha;
                }
                /*  Lapset korottavat työmarkkinatukea seuraavasti: yksi lapsi 5,27 euroa/pv, kaksi lasta 7,74 euroa/ pv ja kolmesta tai useammasta yhteensä 9,98 e/pv
                    Työllistymistä edistävä palvelu korottaa tukea 4,78 e/pv
                    Jos tulot ylittävät 300 euroa, niin jokainen sen määrän ylittävä palkkana maksettu euro vähentää tukea 50 senttiä
                    Jos asut vanhempiesi taloudessa tukea vähennetään 50% */

                double edistys = Paivat * 4.78;

                double Vahennys = 0;

                if (palkka > 300) 
                {
                    Vahennys = (palkka - 300) / 2;
                }
                double kokotuenmaara = lapsilisalla*20 + edistys - Vahennys;

                if (vanhemmat == "k")
                {
                    kokotuenmaara = kokotuenmaara / 2;
                }

                Console.WriteLine("Saat työmarkkinatukea {0:F2} euroa kuukaudessa", kokotuenmaara);


                Console.Write("Haluatko laske työmarkkinatuen uusilla tiedoilla (k/e): ");
                jatko = Console.ReadLine();
            }

        }
    }
}