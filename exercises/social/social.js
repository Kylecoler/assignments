//Add 2 properties to one of the objects (doesn't matter what level of nested data you do this to)
// Add 2 items to at least one of the arrays in your data

var huh = {
    name: 'bob',
    DOB: 1970,
    age: function (){
        return ((new Date()).getFullYear() - huh.DOB)
    },
    weight: 237,
    height: 5.583,
    hobbies: ['kite flying', 'cycleing', 'swimming'],
    gamesmade: [
        {
            name: 'chess',
            rules: {
                knight: 'moves 3-1',
                king: 'moves 1',
                gueen: 'moves any direction'
            },
            pieces: ['king', 'gueen', 'knight', 'bishop', 'castle'],
            numOfPlayers: 2,
        },
        {
            name: 'sorry',
            numOfPlayers: 4,
        }
    ],
    gender: 'male',
    residant:{
        country:'U.S.A',
        state: 'tennesi',
        county: 'filly',
        town: 'harlom',
        mailingAddress:{
            zipCode: 96043,
            street: '984023n 587000e'
        }
    },
    peopleknown:[
        {
            name: 'Sarah',
            relationship: 'wife',
            married: true,
            age: 19,
            howMeet: 'cycling tornement'
        },
        {
            name: 'Bob',
            relationship: 'brother',
            married: false,
            age: 12,
            howMeet: 'parents brought home from hospital',

        }
    ],
    
}

huh.moviesOwend = 20

huh.gamesmade[0].difficulty = "pro"

huh.gamesmade[0].pieces[huh.gamesmade[0].pieces.length] = "pawn"

huh.hobbies[huh.hobbies.length] = "hiking"

// console.log(huh)
// console.log(huh.gamesmade[0].pieces)
// console.log(huh.hobbies)
console.log(((new Date()).getFullYear() - huh.DOB))
console.log(huh.age())