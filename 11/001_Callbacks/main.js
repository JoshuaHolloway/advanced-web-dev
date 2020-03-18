// selection.style(property, [, callback])
// selection.attr(attribute [,callback])
//   selection.text([callback])
//   selection.html([callback])

// The callback will be run once for each element in the selection.
d3.selectAll('li')
    .style('font-size', () => {
        return Math.random() * 40 + 'px';
});

//--------------------
// Callback structure:
// function(_, idx) {
//     code here
// }
//--------------------

// Change background color based on index:
d3.selectAll('li')
    .style('background-color', (_, idx) => {
        return idx % 2 === 0 ? 'lightgrey' : 'blue';
    });

// 2-spaces represent callback that returns current selection
// 4-spaces represent callbacks that return a new selection
d3.select('.outer')
    .style('color', 'purple')
  .select('div')
    .style('font-size', '30px')
    .style('background-color', 'orange')
  .select('div')
    .style('border', '8px solid blue');
