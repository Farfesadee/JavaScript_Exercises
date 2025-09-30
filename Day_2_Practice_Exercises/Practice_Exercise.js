// Task 1
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


// Task 2


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


// Task 3

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


// Task 4

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


// Task 5


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



// Task 6


function isStrongPassword(password) {
  const hasNumber = /\d/;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  return password.length >= 8 && hasNumber.test(password) && hasSpecialChar.test(password);
}


function formatPercentage(value) {
  return `${value.toFixed(1)}%`;
}

function calculateCompoundInterest(principal, rate, years) {
  const amount = principal * Math.pow(1 + rate, years);
  return amount.toFixed(2);
}


function canGraduate(credits, gpa) {
  return credits >= 120 && gpa >= 2.0
    ? "Eligible to graduate"
    : "Not eligible to graduate";
}


function reverseWords(sentence) {
  return sentence
    .split(' ')
    .reverse()
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}


console.log(isStrongPassword("Pass123!")); // true
console.log(formatPercentage(87.456));     // "87.5%"
console.log(calculateCompoundInterest(1000, 0.05, 3)); // "1157.63"
console.log(canGraduate(130, 2.5));         // "✅ Eligible to graduate"
console.log(reverseWords("hello world from nigeria")); // "Nigeria From World Hello"



// Task 7


// 1. Product Calculator
function calculateProductTotal(price, quantity, discount = 0) {
  if (price < 0 || quantity < 0 || discount < 0 || discount > 100) {
    return "Invalid product input.";
  }
  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  return subtotal - discountAmount;
}

// 2. Tax Calculator
function calculateTax(total, location) {
  if (typeof total !== 'number' || total < 0) return "Invalid total amount.";

  let taxRate;
  if (location === "Lagos") taxRate = 0.075;
  else if (location === "Abuja") taxRate = 0.05;
  else if (location === "Ogun") taxRate = 0.065;
  else taxRate = 0.06; // default

  return total * taxRate;
}

// 3. Shipping Calculator
function calculateShipping(weight, distance) {
  if (weight <= 0 || distance <= 0) return "Invalid shipping input.";

  let baseRate = weight * 0.5;
  let distanceRate = distance * 0.1;
  return baseRate + distanceRate;
}

// 4. Membership Discounts
function applyMembershipDiscount(total, membershipLevel) {
  if (typeof total !== 'number' || total < 0) return "Invalid total.";

  let discountRate;
  if (membershipLevel === "Gold") discountRate = 0.15;
  else if (membershipLevel === "Silver") discountRate = 0.1;
  else if (membershipLevel === "Bronze") discountRate = 0.05;
  else discountRate = 0;

  return total - (total * discountRate);
}

// 5. Final Receipt Generator
function generateReceipt(productName, price, quantity, location, weight, distance, membershipLevel, discount = 0) {
  const productTotal = calculateProductTotal(price, quantity, discount);
  if (typeof productTotal === "string") return productTotal;

  const tax = calculateTax(productTotal, location);
  if (typeof tax === "string") return tax;

  const shipping = calculateShipping(weight, distance);
  if (typeof shipping === "string") return shipping;

  const totalBeforeMembership = productTotal + tax + shipping;
  const finalTotal = applyMembershipDiscount(totalBeforeMembership, membershipLevel);
  if (typeof finalTotal === "string") return finalTotal;

  // Ternary operator for free shipping
  const freeShipping = membershipLevel === "Gold" && finalTotal > 500 ? true : false;
  const shippingDisplay = freeShipping ? "Free (Gold Member Bonus)" : `₦${shipping.toFixed(2)}`;

  return `
Receipt for ${productName}
----------------------------------------
Price per item: ₦${price.toFixed(2)}
Quantity: ${quantity}
Discount: ${discount}% 
Subtotal: ₦${productTotal.toFixed(2)}

Location: ${location}
Tax: ₦${tax.toFixed(2)}

Shipping (${weight}kg over ${distance}km): ${shippingDisplay}

Membership Level: ${membershipLevel}
Final Total: ₦${finalTotal.toFixed(2)}
----------------------------------------
Thank you for shopping with us!
  `;
}

// 🧪 Sample Usage
console.log(generateReceipt("Wireless Headphones", 15000, 2, "Ogun", 1.5, 30, "Gold", 10));