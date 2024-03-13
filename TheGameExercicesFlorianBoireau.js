////////////////////////////////
/// @Author: FLORIAN BOIREAU ///
////////////////////////////////


/*
Dans les cinq exercices suivants, tu devras assigner à une constante les valeurs demandées en commentaire.
Ton code devra être propre bien entendu.
Pas d'inquiétude si tu n'arrives pas à tout faire parfaitement ! On cherche avant tout une personne qui sait apprendre et s'adapter.


Voici une courte base de données comprenant des personnes :
- id    : identifiant unique d'une personne
- name  : nom de la personne
- age   : age de la personne en années
- dept  : liste d'id des gens à qui la personne doit un repas
*/
const data = [
    {id: 0,     name: 'Sergio',     age: 18,    dept: [2]},
    {id: 1,     name: 'Maxime',     age: 52,    dept: [4,8]},
    {id: 2,     name: 'Aurelien',   age: 16,    dept: [1,11]},
    {id: 3,     name: 'Anthony',    age: 19,    dept: [9,5,6,2,1]},
    {id: 4,     name: 'Emma',       age: 87,    dept: [10,6,9,8]},
    {id: 5,     name: 'Amanda',     age: 56,    dept: []},
    {id: 6,     name: 'Julien',     age: 11,    dept: [3]},
    {id: 7,     name: 'David',      age: 23,    dept: [5]},
    {id: 8,     name: 'Florian',    age: 38,    dept: [7,10]},
    {id: 9,     name: 'Nathan',     age: 56,    dept: [4,6]},
    {id: 10,    name: 'Thibaut',    age: 29,    dept: []},
    {id: 11,    name: 'Hugo',       age: 18,    dept: [2,6]}
]

/** Etant donné que je suis un peu rouillé en JS, je suis obligé de regarder sur internet, je m'en sort bien en algorithme mais j'ai pas fait de JS depuis des années.
 *  Je suis parfaitement capable de reussir cette exercice mais il me faut quand meme les mots clés.
 *  Ca ne veut pas dire que j'ai utilisé GPT, GPT c'est cool pour expliquer un concept, mais vu qu'on n'a pas le droit de l'utiliser, j'ai utilisé l'ancienne méthode.
 *  StackOverflow et autres forums/sites d'apprentissage pour comprendre comment marche le sorting en JS par exemple et après je me sers de ce que j'ai appris pour finir l'exercice.
 *  En effet, c'est un peu plus lent, MAIS, au moins, je comprend ce que je fais et je copie pas betement le code sur le fichier.
 *  Ceci étant dit, j'espere que vous comprendrez que internet reste un outil majeur du developpeur, et ce depuis des decennies.
 *  J'espere que vous ne me tiendrez pas rigueur d'aller un petit peu sur internet pour me rappeler de mes cours =) .
 * 
 *  PS: Je nomme mes variables et méthode en anglais par habitude de travailler avec des anglophones, je peux changer cette habitude évidemment.
*/


const main = () => {

    // Exercice 1 : Liste des prénoms des utilisateurs (tableau)



    const nameArray = [data.map(data => data.name)]; //Stockage de la colonne name dans nameList
    console.log(nameArray); //Vérification via log



    // Exercice 2 : Liste des prénoms des utilisateus triés par age descendant



    //Fonction a utiliser dans un sort() afin de definir un tri personnalisé
    function SortByAge(a, b)
    {
        const ageA = a.age;
        const ageB = b.age;

        if(ageA < ageB)
            return 1;
        else if(ageA > ageB)
            return -1;
        else
            return 0;
    }


    tempNameAgeArray = Array.from(data); //variable temporaire
    tempNameAgeArray.sort(SortByAge);

    const nameArrayAgeSorted = [tempNameAgeArray.map(tempNameAgeArray => tempNameAgeArray.name)]

    console.log(nameArrayAgeSorted); //Vérification via log



    // Exercice 3 : La personne qui doit le plus de repas aux autres
    


    let biggestDebt = 0, positionBiggest = 0;
    for(i = 0; i < data.length; i++)
    {
        if(data[i].dept.length > biggestDebt) //Etant donné que vous avez dit "LA personne", je considère qu'il n'y aura jamais d'égalité donc pas de sécurité
        {
            biggestDebt     = data[i].dept.length;
            positionBiggest = i;
        }
    }

    const biggestIndebtedPerson = data[positionBiggest];

    console.log(biggestIndebtedPerson); //Vérification via log



    // Exercice 4 : La personne à qui les autres doivent le plus de repas
    


    //Fonction pour trouver l'emplacement du plus grand nombre du tableau
    function GetBiggestNumberPosition(array)
    {
        let biggestNumber = 0, position = 0
        for(i = 0; i < array.length; i++)
        {
            if(array[i] > biggestNumber)
            {
                biggestNumber = array[i];
                position      = i;
            }
        }

        return position;
    }

    let tempPersonDebtArray = new Array(data.length).fill(0); //chaque case de ce tableau equivaut a un id
    for(i = 0; i < data.length; i++)
    {
        for(j = 0; j < data[i].dept.length; j++) //on parcours chaque personne a qui l'on doit un repas
        {
            tempPersonDebtArray[data[i].dept[j]]++; //on incrémente chaque case liée a l'id de la personne a qui l'on doit un repas
        }
    }

    const personWithMostOwedMeal = data[GetBiggestNumberPosition(tempPersonDebtArray)]; //On récupere la ligne lié a la case de tempPersonDebtArray avec le plus haut nombre
    console.log(personWithMostOwedMeal); //Vérification via log

    

    // Exercice 5 : Une fonction qui prend en parametre une personne et renvoie une chaine de caracteres comme celle-ci :
    //      - "Nathan, 56 ans, il doit un repas à Emma et Julien."



    function ToString(person)
    {
        let names;

        if(person.dept.length == 0)
            names = "personne";
        else
        {
            //Boucle pour stocker les noms des personnes a qui l'on est endettés
            for(i = 0; i < person.dept.length; i++)
            {
                if(typeof names !== 'undefined') //si la variable est défini c'est qu'on peut rajouter "et"
                    names += " et "
                else
                    names = ""
                
                names += data[person.dept[i]].name;
            }
        }        

        return `${person.name}, ${person.age} ans, il doit un repas à ${names}`;
    }

    const string = ToString(data[9]);
    console.log(string);            //Vérification via log
    console.log(ToString(data[5])); //Vérification via log si la personne n'a pas de dette

}
main()