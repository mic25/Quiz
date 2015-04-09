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
    },
    {
        id: 3,
        text: 'Wo ist Unterbaumaterial zu finden?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        id: 4,
        text: 'Wo ist Unterbaumaterial zu finden?',
        image: "",
        answers: {
            a: "G1",
            b: "G2",
            c: "G3",
            d: "G4"
        },
        correct: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        id: 5,
        text: 'Wo ist der Mehrzweckzug verladen?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        id: 6,
        text: 'Wo ist der Mehrzweckzug verladen?',
        image: "",
        answers: {
            a: "G1",
            b: "G2",
            c: "G3",
            d: "G4"
        },
        correct: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        id: 7,
        text: 'Wo sind Schlauchtragekörbe zu finden?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        id: 8,
        text: 'Wo sind Schlauchtragekörbe zu finden?',
        image: "",
        answers: {
            a: "Geräteraum vorne rechts",
            b: "Geräteraum hinten rechts",
            c: "Geräteraum vorne links",
            d: "Geräteraum hinten links"
        },
        correct: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        id: 9,
        text: 'Wo ist eine Kettensäge zu finden?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: true,
            c: true,
            d: false
        }
    },
    {
        id: 10,
        text: 'Wo ist eine Kettensäge zu finden?',
        image: "",
        answers: {
            a: "G2",
            b: "G4",
            c: "Mannschaftsraum",
            d: "Kofferraum"
        },
        correct: {
            a: true,
            b: true,
            c: true,
            d: true
        }
    },
    {
        id: 11,
        text: 'Wo ist ein Feuerlöscher verladen?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: true,
            c: true,
            d: true
        }
    },
    {
        id: 12,
        text: 'Wo ist ein Feuerlöscher verladen?',
        image: "",
        answers: {
            a: "G1",
            b: "G4",
            c: "Kofferraum",
            d: "Mannschaftsraum"
        },
        correct: {
            a: false,
            b: false,
            c: true,
            d: true
        }
    },
    {
        id: 13,
        text: 'Wo ist der Glasmaster verladen?',
        image: "",
        answers: {
            a: "LF G1",
            b: "LF G2",
            c: "TLF G3",
            d: "Sprinter"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        id: 14,
        text: 'Wo sind Geräte/Material zur Verkehrsabsicherung?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: true,
            c: true,
            d: true
        }
    },
    {
        id: 15,
        text: 'Wo ist Schaummittel zu finden?',
        image: "",
        answers: {
            a: "LF G3",
            b: "TLF G4",
            c: "Sprinter",
            d: "Wir haben keins"
        },
        correct: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        id: 16,
        text: 'Wo ist alles zu finden, was für einen Anschluss am Hydranten benötigt wird?',
        image: "",
        answers: {
            a: "Auf jedem Fahrzeug",
            b: "Auf allen Fahrzeugen außer Tiguan",
            c: "LF & TLF",
            d: "Nur im TLF"
        },
        correct: {
            a: false,
            b: false,
            c: true,
            d: false
        }
    },
    {
        id: 17,
        text: 'Wo sind Schere & Spreizer zu finden?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Sprinter",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        id: 18,
        text: 'Wo sind Schere & Spreizer zu finden?',
        image: "",
        answers: {
            a: "G1",
            b: "G3",
            c: "G4",
            d: "G6"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        id: 19,
        text: 'Was kann man im TLF G6 finden?',
        image: "",
        answers: {
            a: "Schläuche",
            b: "Strahlrohre",
            c: "Schaummittel",
            d: "Feuerlöscher"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: false
        }
    },
    {
        id: 20,
        text: 'Was ist nicht in einem Mannschaftsraum zu finden?',
        image: "",
        answers: {
            a: "Funkgeräte",
            b: "Warnwesten",
            c: "Atemschutzgeräte",
            d: "Strahlrohre"
        },
        correct: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        id: 21,
        text: 'Wo gibt es Schmutzwasserpumpen?',
        image: "",
        answers: {
            a: "LF",
            b: "Sprinter",
            c: "TLF",
            d: "Tiguan"
        },
        correct: {
            a: true,
            b: false,
            c: true,
            d: false
        }
    },
    {
        id: 22,
        text: 'Was findet man nicht im Sprinter?',
        image: "",
        answers: {
            a: "Wassertank",
            b: "Ölbinder",
            c: "Funkgeräte",
            d: "Hochdrucklüfter"
        },
        correct: {
            a: true,
            b: false,
            c: false,
            d: true
        }
    },
    {
        id: 23,
        text: 'Welche Besatzung ist im TLF vorgesehen?',
        image: "",
        answers: {
            a: "Staffel",
            b: "Gruppe",
            c: "1/5",
            d: "1/8"
        },
        correct: {
            a: true,
            b: false,
            c: true,
            d: false
        }
    },
    {
        id: 24,
        text: 'Wo findet man Material zur Höhensicherung?',
        image: "",
        answers: {
            a: "LF",
            b: "TLF",
            c: "Haben wir nicht",
            d: "Tiguan"
        },
        correct: {
            a: false,
            b: true,
            c: false,
            d: false
        }
    },
    {
        id: 25,
        text: 'Wo befindet sich der Hochdrucklüfter?',
        image: "",
        answers: {
            a: "LF GR",
            b: "LF G3",
            c: "TLF GR",
            d: "TLF G2"
        },
        correct: {
            a: false,
            b: false,
            c: false,
            d: true
        }
    },
    {
        id: 26,
        text: 'Welche Aussage über Hydraulikzylinder stimmt?',
        image: "",
        answers: {
            a: "Das ist ein Hut",
            b: "Haben wir nicht",
            c: "Findet man im LF G1",
            d: "Kann man bei Verkehrsunfällen brauchen"
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
