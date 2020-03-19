var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

const colors = {
  'G': 'green',
  'PG': 'yellow',
  'PG-13': 'orange',
  'R': 'red'
};

d3.select('#quotes')
    .style('list-style', 'none')
  .selectAll('li')
  .data(quotes)
  .enter()
  .append('li')
    .text(d => d.quote )
    .style('background', d => colors[d.rating]);

    // Callback structure
    // function (d, i) {
    //     code here
    //}
    // -arg-1: Data bound to current element from D3
    // -arg-2: Index of the current element in selection


// Remove findig-nemo
quotes.pop();

// Update data-binding
// -Tells D3 to remove any list items that no longer have a corresponding piece of data
d3.selectAll('li')
  .data(quotes)
  .exit()
  .remove();


// Next, lets remove all quotes from R-rated movies

// Update array and filter out any movie with R-rating
const non_R_Quotes = quotes.filter((movie) => movie.rating !== 'R');
console.log(non_R_Quotes);

// Attempt to update DOM with filtered array
d3.selectAll('li')
  .data(non_R_Quotes)
  .exit()
  .remove();

// Check out the binded-data:
d3.selectAll('li').data();

// The key function is passed in as the second arguement to .data() method
// -It specifies how data and elements together

