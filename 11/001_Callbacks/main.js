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