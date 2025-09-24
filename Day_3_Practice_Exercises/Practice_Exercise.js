// Practice Exercise 1

// Task: Array Basics - Shopping List  

// Requirements:  
// 1. Create an array `shoppingList` with at least 5 items  
// 2. Add a new item to the end of the list  
// 3. Remove the first item from the list  
// 4. Display the total number of items  
// 5. Loop through the list and print each item with its position  

// Challenge:  
// Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).

// 1. Create an array `shoppingList` with at least 5 items
function shoppingList() {
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
  return list.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

console.log("\nFormatted List:\n" + formatList(shoppingList));

console.log("")
}



// Practice Exercise 2

// Task: Student Grades Analyzer  

// Requirements:  
// 1. Store grades in an array  
// 2. Write a function `getAverage(grades)` to calculate average grade  
// 3. Write a function `getHighest(grades)` to find the highest grade  
// 4. Write a function `getLowest(grades)` to find the lowest grade  
// 5. Use loops where necessary to process the array  

// Challenge:  
// Create a function `getPassRate(grades)` that:  
// - Counts how many students scored **50 or above** (passing)  
// - Divides that number by the total number of students  
// - Returns the percentage of students who passed.


// 1. Store grades in an array 
function studentGrades() {
    let studentGrades = [85, 99, 72, 50, 60, 70, 80, 90, 100, 39];
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
    let highest = studentGrades[0];
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
function getPassRate(studentGrades) {
    let passCount = 0;
    for (let grade of studentGrades) {
        if (grade >= 50) {
            passCount++;
        }
    }
    let passRate = (passCount / studentGrades.length) * 100;
    return passRate.toFixed(2) + "%"
}
console.log("Pass Rate:", getPassRate(studentGrades));

}



