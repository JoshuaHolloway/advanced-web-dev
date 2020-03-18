// selection.style(property, [, callback])
// selection.attr(attribute [,callback])
//   selection.text([callback])
//   selection.html([callback])

// The callback will be run once for each element in the selection.
d3.selectAll('li')
    .style('font-size', () => {
        return Math.random() * 40 + 'px';
});