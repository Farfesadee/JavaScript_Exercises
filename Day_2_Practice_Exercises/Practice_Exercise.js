// Practice Exercise 1

// Task: Simple Grading System  

// Requirements: 
// 1. Create a function `getGrade(score)`  
// 2. Use if/else if statements to assign grades:  
//    - 90+ → "A"  
//    - 80–89 → "B"  
//    - 70–79 → "C"  
//    - 60–69 → "D"  
//    - Below 60 → "F"  
// 3. Return a message like: `"Score: 85 → Grade: B"`  

// Challenge:** Add a condition for perfect scores (100) that returns `"Outstanding! Grade: A+"`

function getGrade() {

  let score = prompt("Enter your score: ");

  if (score === 100) {
    console.log("Outstanding! Grade: A+");
  } else if (score >= 90) {
    console.log(`Score: ${score} → Grade: A`);
  } else if (score >= 80) {
    console.log(`Score: ${score} → Grade: B`);
  } else if (score >= 70) {
    console.log(`Score: ${score} → Grade: C`);
  } else if (score >= 60) {
    console.log(`Score: ${score} → Grade: D`);
  } else {
    console.log(`Score: ${score} → Grade: F`);
  }
}



// Practice Exercise 2

// Task: Discount Calculator  

// Requirements:  
// 1. Write a function `calculatePrice(price, customerType, isFirstPurchase)`  
// 2. Apply discounts:  
//    - Student → 10%  
//    - Senior → 15%  
//    - Employee → 20%  
// 3. If `isFirstPurchase` is true, add an extra 5% discount  
// 4. Return the final price (rounded to 2 decimals)  

// Challenge: Print a full receipt showing original price, discount percent, and final price.

function calculatePrice() {
  let discount = 0;
  let price = Number(prompt("Enter the price of goods: "));
  let customerType = prompt("Are you a student, senior or employee?(Kindly give one response): ");
  let isFirstPurchase = true;

  if (customerType === "student") {
    console.log(`${discount = 0.10}`);
  } else if (customerType === "senior") {
    console.log(`${discount = 0.15}`);
  } else if (customerType === "employee") {
    console.log(`${discount = 0.20}`);
  } 

  if (isFirstPurchase) {
    console.log(`${discount += 0.05}`);
  }

  let finalPrice = price * (1 - discount); 
  console.log({originalPrice: price,
    discountPercent: discount * 100,
    finalPrice: finalPrice.toFixed(2)
  });
}

console.log(calculatePrice());
console.log("Price Calculation"());
console.log(`Original Price: #${result.originalPrice}`);
console.log(`Discount: #${result.discountPercent}`);
console.log(`Final Price: #${result.finalPrice}`);


// Practice Exercise 3

// Task: Weather Advisor  

// Requirements:  
// 1. Write a function `weatherAdvice(temperature, isRaining)`  
// 2. Use if/else if to return advice:  
//    - < 32 and raining → "Freezing rain! Stay inside!"  
//    - < 32 → "Very cold, wear a heavy coat."  
//    - 32–60 → "Chilly, bring a jacket."  
//    - 60–80 → "Nice weather!"  
//    - `>` 80 → "It's hot, stay hydrated!"  
// 3. Return the advice as a string  

// Challenge: Add a ternary operator for quick advice like:  
//    `"Bring an umbrella"` if raining, otherwise `"No umbrella needed"`.

function weatherAdvice() {
  let temperature = prompt("What is the current temperature: ");
  let isRaining = prompt("Is it raining?: ");

  console.log("Temperature:", temperature)
  console.log("It is Raining:", isRaining)

  if (temperature < 32 && isRaining) {
    console.log("Freezing rain! Stay inside!")
  } else if (temperature < 32) {
    console.log("Very cold, wear a heavy coat.")
  } else if (temperature <= 60) {
    console.log("Chilly, bring a jacket.")
  } else if (temperature <= 80) {
    console.log("Nice weather!")
  } else {
    console.log("It's hot, stay hydrated!")
  }

  let advice = isRaining ? "Bring an unbrella, if it is raining." : "No umbrella is needed if it is not raining.";
  console.log(advice);

}


// Practice Exercise 4

// Task: ATM Simulation  

// Requirements:  
// 1. Create a function atm(balance, action, amount)  
// 2. If action is "withdraw", check if balance is enough:  
//    - If yes, subtract amount and return new balance  
//    - If no, return "Insufficient funds"  
// 3. If action is "deposit", add amount to balance and return new balance  
// 4. Use clear messages in template literals  

// Challenge: Add a condition that blocks withdrawals over 500 at once.

function atmSimulation() {
  let balance = prompt("Enter your account balance: ")
  let action = prompt("Enter the action you would like to perform (withdraw, deposit, transfer): ")
  let amount = prompt("Enter amount: ")
  let remainingBalance = Number(balance) - Number(amount)
  let depositBalance = Number(balance) + Number(amount)

  if (action === "withdraw" && balance >= 500) {
    console.log("You cannot withdraw more than 500. Please upgrade your account.")
  }

  if (action === "withdraw" && balance >= amount) {
    console.log(`You have made a withdrawal of #${amount}. Your remaining balance is #${remainingBalance}.`)

  } else if (action === "withdraw" && balance < amount) {
    console.log("Insufficient funds.")
  }

  if (action === "deposit") {
    console.log(`You have successfuly deposited #${amount}. Your new account balance id #${depositBalance}`)
  }
}


// Practice Exercise 5
// Task: Personal Assistant Function

// Now let's combine everything you've learned to create a "personal assistant" function that makes smart decisions based on different inputs.

// Your Mission:
// Create a function called `personalAssistant` that:
// 1. Takes parameters for: time (hour), weather(sunny, rainy,cloudy), and day type(workday, weekend, holiday)
// 2. Uses conditional logic to give appropriate advice
// 3. Returns different messages based on the conditions
// 4. Handles various scenarios intelligently

// Requirements:
// - Use if/else statements for complex logic
// - Include at least one logical operator (&&, ||, !)
// - Use a ternary operator for simple decisions
// - Return helpful, personalized advice
// - Handle edge cases (invalid inputs)

// function personalAssistant() {
//   let message = day === "Workday" ? "Get focused for work!" :
//                 day === "Weekend" ? "Chill out, it's the weekend!" :
//                 day === "Holiday" ? "Happy holiday!" : "Invalid day type."; 
//   message += (weather === "rainy") ? "Don't forget your umbrella" :
//              (weather === "sunny") ? "Grab some sunscreen if you're heading out" :
//              (weather === "cloudyy") ? "Might be a chill day." : "Weather condition not recognized.";
//   if (time < 12 && time >= 0) {
//     message += "Have a great morning!";
//   } else if (time >= 12 && time < 18) {
//     message += "Have a productive afternoon!";
//   } else if (time >= 18 && time <= 23) {
//     message += "Wind down for the evening";
//   } else {
//     message += "Invalid time.";
//   }
//   console.log(message);
// }


function personalAssistant() {
            let hour = prompt("Enter time in hours");
            let weather = prompt("Is it a sunny, cloudy or rainy day?")
            let dayType = prompt("is it a workday, weekend, holiday?")
            if (hour >= 5 && hour < 12) {
                console.log("Good morning!");
            } else if (hour >= 12 && hour < 18) {
               console.log("Good afternoon!");
            } else if (hour >= 18 && hour < 22) {
                console.log("Good evening! ");
            } else {
                console.log("It's late, you should get some rest. ");
            }
             if (dayType === "workday") {
                if (hour >= 9 && hour <= 17) {
                console.log("Focus on your tasks. ");
                console.log(weather === "rainy" ? "Don't forget your umbrella! " : "A short walk could refresh you. ");
                } else {
                console.log("Try to relax after work. ");
                }
            } else if (dayType === "weekend") {
                    console.log("Enjoy your weekend! ");
                   console.log(weather === "sunny" ? "Perfect time for outdoor activities. " : "Maybe watch a movie indoors. ");
            } else if (dayType === "holiday") {
                    console.log( "Happy holiday! ");
                    console.log((weather === "rainy" || weather === "cloudy")
                    ? "Cozy up with a book or some tea. "
                    : "Great day to celebrate outside. ");
                }
                if (dayType === "workday" && (hour < 9 || hour > 17)) {
                    console.log("Remember to maintain work-life balance.");
                }
        }