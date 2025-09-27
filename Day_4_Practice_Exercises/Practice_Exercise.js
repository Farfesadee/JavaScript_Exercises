


// // 1. Create an object `movie` with properties: `title`, `director`, `releaseYear`, and `rating`

function movieTracker() {
    let movie = {  
        title: "To Kill A Monkey",
        director: "Kemi Adetiba",
        releaseYear: 2025,
        rating: 9.5,
        
        getSummary() {
          console.log(`The movie: ${this.title} which was directed by ${this.director} was released in ${this.releaseYear} and has an overall rating of ${this.rating}/10.`)
        } 
      }; 

      console.log(movie.getSummary()); 
      
      movie.isWatched = true;
      console.log(`${movie.title} was directed by ${movie.director} and was released in ${movie.releaseYear} and is rated ${movie.rating}/10 and have I watched? ${movie.isWatched ? "Yes" : "No"}.`);
      

       
  // Challenge: 
// Create an array of at least 3 movies and write a function to display only the movies with `rating ≥ 8`. 
    movie = ["The Matrix", "The Room", "Inception", "John Wick", "The Amazing Spiderman"];
    ratings = [8.2, 3.7, 9.5, 8.9, 9.7]; 

  function displayTopMovies(movies, ratings) {
  console.log(" Movies with rating ≥ 8 ");
  for (let i = 0; i < movies.length; i++) {
    if (ratings[i] >= 8) {
      console.log(`${movies[i]} (Rating: ${ratings[i]}/10)`);
    }
  }
} 
displayTopMovies(movie, ratings); 
};
console.log("")


// Task 2

// 1. Create an object `cartItem` with properties: `name`, `price`, `quantity`
function allCartItems() { 
let cartItem = {
    name: "iPhone 11",
    price: 400000,
    quantity: 150,

    getTotal() {
        return this.price * this.quantity;
    }
  };
console.log("Total: ", cartItem.getTotal());


// Step 2: Create an array of cart items
let cart = [
  {
    name: "Wireless Mouse",
    price: 2500,
    quantity: 29
  },
  {
    name: "Keyboard",
    price: 4500,
    quantity: 100
  },
  {
    name: "USB-C Cable",
    price: 1000,
    quantity: 30
  }
];
cart.forEach(item => {
  item.getTotal = function () {
    return this.price * this.quantity;
  };
});

// Step 3: Function to calculate total cart value
function getCartTotal(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.getTotal();
  }
  return total; 
} 
console.log("The total cost of all items on the cart are: #"  + getCartTotal(cart));
  
};


// Task 3

function librarySystem(){
let member = {
  name : "Omodolapo",
  membershipType : "basic, premium",
  borrowedBooks : [],

  borrowedBook(book){
    this.borrowedBooks.push(book);
    return `${book}`
  },

  getBorrowedCount(){
    return `${this.borrowedBooks.length}`;
  },

  getMembershipInfo(){
    return this.membershipType;
  }

};
console.log(member.borrowedBook("Library Membership System"));
console.log(member.getBorrowedCount());
console.log(member.getMembershipInfo());
}