/*
Tee ohjelma, joka laskee mäkihyppääjän yhden kierroksen suorituspisteet. Ohjelma kysyy hypyn pituuden 
(liukuluku 0.5 metrin välein ja pituuden oltava > 0) sekä viiden arvostelutuomarin tyylipisteet (0-20 välillä 0.5 välein eli 
esim. 16.5 tai 17.0 tai 18.5). Vinkki. Jakojäännöksellä saa tutkittua onko puolen pisteen/metrin välein

Hyppääjän pisteet muodostuvat kaavasta.

pisteet = (hypyn pituus - kriittinen piste) * 1.8 + kolmen keskimmäisen tuomarin tyylipisteet + 60. 

Tyylipisteissä siis parhain ja huonoin pistemäärä tipahtaa pois.

Ohjelman hyppyrimäen kriittinen piste on 90 metrin kohdalla. Laita kriittinen piste vakioon KR_PISTE. 
Tulosta lopuksi hypyn pituus ja hypyn pisteet yhden desimaalin tarkkuudella seuraavalla tavalla.

PITUUS  : 115,5 m
PISTEET : 161,4

Käytä ohjelmassa funktioita (funktiot eivät saa palauttaa mitään ja kun käytät viittauksia, niin pitää
käyttää out-viittausta):

KysyHypynPituus
KysyTuomareidenPisteet
LaskeHypynPisteet
Tulosta

Pohdi mitä parametrejä funktioille täytyy välittää, jotta haluttu toiminto saadaan tehtyä.

HUOM 1!
Kaikkien funktioiden otsikkorivien eteen on laitettava public. Esimerkiksi
public static void Main()

*/
namespace Projekti
{
    class MyProgram
    {
        public static void KysyHypynPituus(out float pituus)
        {
            do
            {
                pituus = 0.0f;
                Console.WriteLine("Anna hypyn pituus 0,5 metrin välein:");
                pituus = float.Parse(Console.ReadLine());
            } while ((pituus <= 1) || pituus % 0.5 != 0);
        }

        public static void KysyTuomareidenPisteet(out float[] pistetaulu)
        {
            pistetaulu = new float[5];
            float piste = 0.0f;
            for (int i = 0; i < pistetaulu.Length; i++)
            {
                do
                {
                    Console.WriteLine("Anna {0}. tuomaripisteet 0,5 pisteen välein:", i + 1);
                    piste = float.Parse(Console.ReadLine());
                } while (piste <=0 || piste >= 20 || piste % 0.5 != 0);
                pistetaulu[i] = piste;
            }

            Array.Sort(pistetaulu);
        }

        public static void LaskeHypynPisteet(float pituus, float[] pistetaulu, out float pisteet)
        {
            //pisteet = (hypyn pituus - kriittinen piste) *1.8 + kolmen keskimmäisen tuomarin tyylipisteet + 60
            const float KR_PISTE = 90;
            float kerroin = 1.8f;
            float tuomarit = pistetaulu[1] + pistetaulu[2] + pistetaulu[3];

            pisteet = (pituus - KR_PISTE) * kerroin + tuomarit + 60;
        }
        public static void Tulosta(float pituus, float pisteet)
        {
            Console.WriteLine();
            Console.WriteLine("PITUUS  : {0:F1} m", pituus);
            Console.WriteLine("PISTEET : {0:F1}\r\n", pisteet);

        }
        public static void Main()
        {

            float pituus;
            KysyHypynPituus(out pituus);

            float[] pistetaulu;
            KysyTuomareidenPisteet(out pistetaulu);
            

            float pisteet;
            LaskeHypynPisteet(pituus, pistetaulu, out pisteet);

            Tulosta(pituus, pisteet);

        }
    }
}