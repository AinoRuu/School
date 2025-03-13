using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

/*
Lue käyttäjältä kokonaislukuja while-silmukassa, kunnes käyttäjä syöttää arvon -1. 
Sen jälkeen tulosta syötettyjen lukujen keskiarvo yhden desimaalin tarkkuudella
alla olevalla tavalla:

"Keskiarvo : 12.1"

Lukua -1 ei oteta keskiarvon laskentaan mukaan.

Jos käyttäjä ei syöttänyt yhtään lukua, niin keskiarvoa ei saa tulostaa
vaan silloin tulostetaan

"Et antanut yhtään lukua"
*/

namespace Projekti
{
    class Program
    {
        static void Main()
        {
            //Your code here
            int ikokoluku = 0;
            float fKeski = 0.0f;
            int maara = 0;

            while (ikokoluku <=0 || ikokoluku >= 0) 
            {
                Console.WriteLine("Anna kokonaisluku");
                int.TryParse(Console.ReadLine(), out ikokoluku);

                if (ikokoluku != -1 && ikokoluku !=0)
                {
                    fKeski = fKeski + ikokoluku;
                    maara += 1;
                }
                else if (ikokoluku == -1)
                {
                    if (fKeski == 0)
                    {
                        Console.WriteLine("Et antanut yhtään lukua");
                        break;
                    }
                    else 
                    {
                        Console.WriteLine("Keskiarvo : {0:F1}", ((fKeski) / (maara)));
                        break;
                    }
                }
                else
                {
                    Console.WriteLine("Et antanut yhtään lukua");
                    break;
                }
                

            }
            
        }
    }
}
