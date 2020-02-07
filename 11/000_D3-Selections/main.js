// console.log(d3);

// console.log(d3.version);

// Select single element:
console.log(d3.select('#page-title'));
// Returned as single element array-object

// Select multiple elements:
console.log(d3.selectAll('li'));
// Returned as node-list

// Extract the nodes from the node-list:
console.log(d3.selectAll('li').nodes());
// Returns an array

// Extract the first node-element
console.log(d3.selectAll('li').node());

// Change the CSS-style on the element
d3.select('#page-title').style('background-color', '#00feab');

// Can chain together methods
d3.select('#page-title').style('background-color', '#000000').style('color', '#ffff')
    .attr('class', 'new-class')
    .text('D3 is cool!')

// -Manipulating Selections via Methods:
//      selection.style(property[,newValue])
//      selection.attr(property[,newValue])
//      selection.text([newValue])
//      selection.html([newValue])
// -D3 methods work as getters if no newValue is passed in.
console.log(d3.select('#page-title').text());

//      selection.classed(classList[,shouldClassesBeSet])
//  -When working with classes we use classed()