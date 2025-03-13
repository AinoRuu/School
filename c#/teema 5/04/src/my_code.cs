/*
tee ohjelma, joka tulostaa ensin tiedon siitä, kuinka monta parametria Main-funktioon tuli seuraavalla tavalla.

parametreja tuli 2 kpl

Lisäksi jos ensimmäisen parametri oli "opettaja" niin tulosta "koita saada opiskelijat oppimaan", 
jos se taas oli "opiskelija", niin tulosta "koita opiskella ahkerasti". Jos se oli jotain muuta, 
niin tulosta "nyt en hiffannut"
*/
namespace Projekti
{
    class MyProgram
    {
        static void Main(string[] args)
        {
            if (args.Length > 0)
            {
                Console.WriteLine("parametreja tuli {0} kpl", args.Length);
            }
            else
            {
                Console.WriteLine("parametreja tuli 0 kpl");
            }


            for (int i = 0; i < args.Length; i++)
            {
                if (args[i] == "opettaja")
                {
                    Console.WriteLine("koita saada opiskelijat oppimaan");
                    break;
                }
                else if (args[i] == "opiskelija")
                {
                    Console.WriteLine("koita opiskella ahkerasti");
                    break;
                }
                else
                {
                    Console.WriteLine("nyt en hiffannut");
                    break;
                }
            }
        }
    }
}