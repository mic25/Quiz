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

module.exports = questions;
