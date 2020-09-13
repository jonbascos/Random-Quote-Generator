/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/* 
  An array containing Quote objects.  Each object contains at least a 'quote' and 'source' (Who said the quote).  Other optional properties include 'citation', 'year', and 'tags'.  
*/

let quotes = [
  {
    quote:
      "Trust yourself. Think for yourself. Act for yourself. Speak for yourself. Be yourself. Imitation is suicide.",
    source: "Marva Collins",
    citation: "Laura Moncur's Motivational Quotations",
    year: 2000,
  },
  {
    quote:
      "I can't understand it. I can't even understand the people who can understand it.",
    source: "Queen Juliana of the Netherlands",
    citation: "Michael Moncur's (Cynical) Quotations",
    year: 1948,
  },
  {
    quote: "Be Excellent to Each Other!  Party On Dudes!",
    source: "Bill S. Preston, Esq and Ted Theodore Logan",
    citation: "Bill & Ted's Excellent Adventure!",
    year: 1989,
    tags: ["Movie Quotes", "Comedy"],
  },
  {
    quote:
      "If a cluttered desk is the sign of a cluttered mind, what is the significance of a clean desk?",
    source: "Laurence J. Peter",
  },
  {
    quote:
      "Stop seeing the obstacles you face as reasons why you can't do something. See them as a reason why you can. And celebrate your accomplishments on a daily basis.",
    source: "Ali Vincent",
  },
]

/* 
  Random Number function to generate a number between 0 and 255.  This will be used to provide the numbers to get a random color.
*/
function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 255)
  return randomNumber
}

/* 
  Function to create a random color to display as the background color.  Utilizes the randomNumber function above to generate the numbers for RGB.
*/

function randomColor(value1, value2, value3) {
  let result = `rgb(${value1}, ${value2}, ${value3})`
  return result
}

/*
  The getRandomQuote function retrieves a random quote from the quotes array.  The randomNumber variable stores a random number between 0 and the length of the quotes array.  The quoteToDisplay variable stores the random quote and is then returned.
*/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length)
  let quoteToDisplay = quotes[randomNumber]
  return quoteToDisplay
}

/*
  The printQuote function get a random quote obtained by the getRandomQuote function above.  It is stored in the randomQuote variable.

  At the least, string interpolation is used to create the HTML that is displayed to the page.  Since not every quote contains a citation, year, or tags property, 'if' statements are used to append those properties to the HTML if they exist.  If they don't, the closing </p> tag is added and then displayed to the screen.  

  A random background color is also shown after every click of the 'Show another quote' button is pressed or after 10 seconds.   
*/

function printQuote() {
  let randomQuote = getRandomQuote()
  let html = `

    <p class='quote'>${randomQuote.quote}</p>
    <p class='source'>${randomQuote.source}
  `
  if (randomQuote.citation) {
    html += `
      <span class='citation'>${randomQuote.citation}</span>
    `
  }

  if (randomQuote.year) {
    html += `
      <span class='year'>${randomQuote.year}</span>
    `
  }

  if (randomQuote.tags) {
    html += `
      <p>
        <span class=''>Tags: ${randomQuote.tags}</span>
      </p>
      `
  } else {
    html += "</p>"
  }
  document.body.style.backgroundColor = `${randomColor(
    randomNumber(),
    randomNumber(),
    randomNumber()
  )}`
  document.getElementById("quote-box").innerHTML = html
}

/*
  Function to automatically refresh the quote on the screen every 10 seconds using the setInterval method.
*/

function refreshQuote() {
  let newQuote = setInterval(function quote() {
    printQuote()
  }, 10000)
}

refreshQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false)
