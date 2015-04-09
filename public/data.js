/**
 * Created by Tobi Stockinger on 29/11/14.
 */

/**
 * since we currently do not utilize a database,
 * we store our data in this object.
 * @type {{id: number, text: string, votes: {up: number, down: number}, votesByUser: {}}[]}
 */
var questions = [
    {
        id: 1,
        text: 'Wo befindet sich die Kübelspritze?',
        image: "",
        answers: {
            a: "Im TLF",
            b: "Im Mannschaftsraum",
            c: "Wir haben keine",
            d: "In G1"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: true
        }
    },
    {
        id: 2,
        text: 'Wofür wird dieses Gerät verwendet?',
        image: "images/led.jpg",
        answers: {
            a: "Als Leselampe",
            b: "Zur Markierung von umgestürzten Bäumen",
            c: "Zur Verkehrsleitung (als Zusatz)",
            d: "Zur Hubschrauber-Einweisung"
        },
        correct: {
            a: false,
            b: false,
            c: true,
            d: true
        }
    }
];

 questions = shuffle(questions);

 function shuffle(array){
     for(var n = 0; n < array.length - 1; n++){
         var k = n + Math.floor(Math.random() * (array.length - n));
         var temp = array[k];
         array[k] = array[n];
         array[n] = temp;
     }
     if(array.length > 15){
         array = array.slice(0,14);
     }
     return array;
 }
module.exports = questions;
