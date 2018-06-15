const myHobbies = [
    {
        name: "cooking",
        lenghInYearsAtHobby: 5
    },
    {
        name: "play card",
        lenghInYearsAtHobby: 15
    },
    {
        name: "dance",
        lenghInYearsAtHobby: 10
    },
    {
        name: "shopping",
        lenghInYearsAtHobby: 20,
        comments: "Simply love shopping",
        items: ["clothes", "shoes", "pets food", "cookies"]
    }
];

function printSingleHobbyInfo(hobby) {
    console.log(`${hobby.name} is loved in ${hobby.lenghInYearsAtHobby}`);
}

function printHobbyListInfo(hobbies) {

    hobbies.forEach(hobby => {
        let keys = Object.keys(hobby);
        keys.forEach(key => {
            console.log(`Hobby::${key} ==> ${hobby[key]}`);
        }
        )
    })

}

printSingleHobbyInfo(myHobbies[0]);

printHobbyListInfo(myHobbies);