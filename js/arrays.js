const myHobbies = ["cooking", "play card", "dance", "swimming"];



function printHobbies (hobbies) {

    console.log(`I like ${hobbies.length} things`);

    // console.log(`I like ${hobbies.every(element => {})}`)
    hobbies.forEach(element => {
        console.log(`I like ${element}`);
    });
}

printHobbies(myHobbies);