function displayInformation() {
    const firstName = "Omodolapo";
    const lastName = "Odushile";
    const age = 25;
    const isStudent = true;
    const favoriteColor = "Blue";

    const olderAge = age + 5;

    const output = `
    <strong>My Personal Information</strong><br><br>
    My name is ${lastName} ${firstName}.<br><br>
    I am ${age} years old, but in five years time, I would be ${olderAge}.<br><br>
    I am currently a student at Publica Academy learning to become an AI Developer.<br><br>
    My favourite color is ${favoriteColor}.<br><br>
    `
    document.getElementById('exercise_1-output').innerHTML = output;
}

function formattedDisplay() {
    const firstName = "Omodolapo";
    const lastName = "Odushile";
    const age = 25;
    const isStudent = true;
    const favoriteColor = "Blue";

    const olderAge = age + 5;

    const output = `
    <strong>My Personal Information</strong><br><br>
    First Name: ${firstName}<br><br>
    Last Name: ${lastName}<br><br>
    Age: ${age}<br><br>
    Student-Status: ${isStudent}<br><br>
    Favorite Color: ${favoriteColor}<br><br>
    Age-In-Five-Years: ${olderAge}
    `

    document.getElementById('exercise_1-output').innerHTML = output;
}