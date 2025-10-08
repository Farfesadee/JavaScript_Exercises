# Below are the Practice Questions for JavaScript Day 10: JSON and Working with APIs

## 🎯 Practice Exercise 1

Task: Use `fetch()` to get a random joke from this API: 👉 **https://official-joke-api.appspot.com/random_joke**

Display:
* The setup in one paragraph
* The punchline below it (after a short delay using `setTimeout`)
* Add a "New Joke" button to fetch again



## 🎯 Practice Exercise 2

Task: Create a small **"Country Info Finder"** app using this API: 👉 **https://restcountries.com/v3.1/name/{country}**

Steps:
1. Ask the user to enter a country name (e.g., "Nigeria").
2. Fetch and display:
   * Country flag
   * Capital city
   * Population
   * Region

Hint: You can access these properties from the response:

data[0].flags.png
data[0].capital[0]
data[0].population
data[0].region




## 🎯 Practice Exercise 3

Task: You have a mock API that returns student performance data:

let apiData = `
{
  "students": [
    { "name": "Tola", "score": 78 },
    { "name": "John", "score": 45 },
    { "name": "Mary", "score": 92 }
  ]
}
`;

1. Parse the data.
2. Create a function `getPassRate(data)` that calculates the percentage of students with scores ≥ 50.
3. Display the pass rate on the page like this:

Pass Rate: 66.7%