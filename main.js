const author = document.querySelector("#author");
const quote  = document.querySelector("#quote");
const btn = document.querySelector("#btn");
let currentIndexQuote = 0;

fetch('./quotes.json')
  .then(response => response.json())
  .then(data => setRandomQuote(data))

btn.addEventListener("click", () => {
  fetch('./quotes.json')
    .then(response => response.json())
    .then(data => setRandomQuote(data))

});

function setRandomQuote(data) {
  let numberOfQuotes = data.quotes.length;
  
  let nextQuote = Math.floor(Math.random() * numberOfQuotes);
  
  while (nextQuote == currentIndexQuote) {
    nextQuote = Math.floor(Math.random() * numberOfQuotes);
    console.log("iguales");
  }
  console.log("nextQuote: ", nextQuote, "currenI: ", currentIndexQuote);

  quote.textContent = data.quotes[nextQuote].quote;
  author.textContent = "- " + data.quotes[nextQuote].author;

  currentIndexQuote = nextQuote;
}