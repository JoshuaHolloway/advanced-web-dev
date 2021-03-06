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