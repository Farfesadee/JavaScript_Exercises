//  Task 1

// 1. Create an array `shoppingList` with at least 5 items
// function shoppingList() {

document.getElementById("btn").addEventListener("click", function() {
    let shoppingList = ["Laptops", "Phones", "PS5", "TV Console", "Smart Watch"];
    console.log("Initial List:", shoppingList);

    // 2. Add a new item to the end of the list 
    shoppingList.push("Airpods");
    console.log("Updated List:", shoppingList);

    // 3. Remove the first item from the list 
    shoppingList.shift();
    console.log("Updated List:", shoppingList);

    // 4. Display the total number of items
    console.log(`Number of Items: ${shoppingList.length}`);

    // 5. Loop through the list and print each item with its position 
    console.log("\nItems and their positions:");
    for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Shopping List ${i + 1}: ${shoppingList[i]}`);
    }

    // Challenge: Format the list in numbered format
    function formatList(list) {
    for (let i = 0; i < shoppingList.length; i++) {

        console.log(`Format List: ${i + 1}: ${list[i]}`);
        }
    }

    formatList(shoppingList);

    })
    console.log("")


    // Task 2

// 1. Store grades in an array 
function studentGrades() {
    let studentGrades = [100, 99, 72, 50, 60, 70, 80, 90, 85, 39];
console.log("Grades:", studentGrades.join(", "));

// 2. Write a function `getAverage(grades)` to calculate average grade  
function getAverage(studentGrades) {
    let total = 0;
    for (let grade of studentGrades) {
        total += grade;
    }
    return (total / studentGrades.length).toFixed(2);
}
console.log("Average Grade:", getAverage(studentGrades));


// 3. Write a function `getHighest(grades)` to find the highest grade
function getHighest(studentGrades) {
    let highest = studentGrades[3];
    for (let grade of studentGrades) {
        if (grade > highest) {
            highest = grade;
        }
    }
    return highest;
}
console.log("Highest Grade:", getHighest(studentGrades));

// 4. Write a function `getLowest(grades)` to find the lowest grade
function getLowest(studentGrades) {
    let lowest = studentGrades[0];
    for (let grade of studentGrades) {
        if (grade < lowest) {
            lowest = grade;
        }
    }
    return lowest;
}
console.log("Lowest Grade:", getLowest(studentGrades));


// Challenge:  
// Create a function `getPassRate(grades)` that:

// Counts how many students scored 50 or above (passing) 
function getPassssRate(studentGrades) {
    let passCount = 0;
    for (let grade of studentGrades) {
        if (grade >= 50) {
            passCount++;
            console.log(`Student Passed: ${grade}`)
        }
    }
    console.log("Summary of Passed Students: ", passCount);

    let passRate = passCount / studentGrades.length;
    console.log("Fraction Passed: ", passRate.toFixed(2));

    let percentagePassed = passCount / studentGrades.length * 100;
    console.log("Fraction Passed: ", percentagePassed.toFixed(2));
    }

getPassssRate(studentGrades);
}


// Task 3

function ratingSystem() {
// 1. Create two arrays: `movies` (names) and `ratings` (numbers) 
    let movies = ["Game of Thrones", "Blaclist", "Bourne", "The Day of the Jackal", "Spartacus", "Jumong"];
    let ratings = [9.9, 8.0, 7.5, 6.5, 9.2, 8.9]


// 2. Write a function `addMovie(movie, rating)` that adds a new entry    
    function addMovie(movie, rating) {
        movies.push(movie);
        ratings.push(rating);

            return {
        movies : movie,
        ratings: rating
    }
    
    }
    console.log("Updated Movies:", addMovie("Peaky Blinders", 8.0));

// 3. Write a function `getAverageRating()` to calculate the average rating
function getAverageRating() {
    let total = 0;
    for (let rate of ratings) {
        total += rate;
    }
    return (total / ratings.length).toFixed(2);
}
console.log("\n Average Rating:", getAverageRating());

// 4. Write a function `getTopMovie()` to find the highest-rated movie
    function getTopMovie() {
        let highest = ratings[0];
        let index = 0;
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > highest) {
                highest = ratings[i];
                index = i;
            }
        }
        return `${movies[index]} (${highest})`;
    }
    console.log("\nTop Rated Movie:", getTopMovie());

    // Challenge:  
// Sort the movies by rating (highest → lowest) and display the sorted list.
    function getSortedMovies() {
        let combined = movies.map((movie, index) => ({
            name: movie,
            rating: ratings[index]
        }));

        combined.sort((a, b) => b.rating - a.rating);

  console.log("\nSorted Movies by Rating:");
  combined.forEach((movie, index) => {
    console.log(`\n${index + 1}. ${movie.name} - Rating: ${movie.rating}`);
  });
}

getSortedMovies();
}


// Task 4

document.getElementById("studentReportSystem").addEventListener("click", function() {
    // Store student names and grades in an array
    let students = [
        { name: "Odushile Omodolapo", grade: 95 },
        { name: "Olasoji Olawale", grade: 90 },
        { name: "Owolabi Oluwaseun", grade: 65 },
        { name: "Adeboye Adekunle", grade: 78 },
        { name: "Adefisoye Malik", grade: 85 },
    ];

    // Add Student
    function addStudent(name, grade) {
        if (grade < 0 || grade > 100) {
            console.log(`Error: Grade must be between 0 and 100. ${name} cannot be added.`);
            return;
        }
        students.push({name, grade });
        console.log(`Added Student: ${name} with grade: ${grade}`);
    }

    // Compute the Average Grade for class
    function calcAverage() {
        let total = 0;
        for (let student of students) {
            total += student.grade;
        }
        return total / students.length;
    }

    // Find Top and Bottom Student
    function findTopAndBottomStudent() {
        const grades = students.map(student => student.grade);
        const maxGrade = Math.max(...grades);
        const minGrade = Math.min(...grades);
        const topStudent = students.find(student => student.grade === maxGrade);
        const bottomStudent = students.find(student => student.grade === minGrade);
        return {top: topStudent, bottom: bottomStudent};
    }

    // Grade Categorizer
    function gradeCategorizer(grade) {
        if (grade >= 90) return "A";
        if (grade >= 80) return "B";
        if (grade >= 70) return "C";
        if (grade >= 50) return "D";
        return "F";
    }
    
    // Report Generator
    function getReport() {
        const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
        const average = calcAverage();
        const {top, bottom} = findTopAndBottomStudent();
        console.log("====CLASS REPORT====");
        console.log("Student Name\tGrade\tCategory");
        console.log("--------------------------------");
        for (let student of sortedStudents) {
            const gradecategory = gradeCategorizer(student.grade);
            console.log(`${student.name}\t${student.grade}%\t${gradecategory}`);
        }
        console.log("----------------------------------");
        console.log(`Class Average: ${average.toFixed(2)}%`);
        console.log(`Top Student: ${top.name} (${top.grade}%)`);
        console.log(`Lowest Student: ${bottom.name} (${bottom.grade}%)`);
    }
    // Testing the system
console.log("=== Testing Student Report System ===");
addStudent("Mudashiru Adeola", 50);
addStudent("Koleoso Bidemi", 95);
addStudent("Rasheed Ladoja", 150);
getReport();
})

