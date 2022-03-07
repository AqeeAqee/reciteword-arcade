// Add your code here
//%
enum WordlistName
{
    PrimaryAll,
    RA6_08,
}

//%
namespace wordlists{

    //% block="get words $listname"
    //% listname.shadow=WordlistName
    export function getWords(listname:WordlistName){
        switch(listname){
            case WordlistName.PrimaryAll:
                return words_Primary
            case WordlistName.RA6_08:
                // return words_RA6_08
            default:
                return []
        }
    }
}