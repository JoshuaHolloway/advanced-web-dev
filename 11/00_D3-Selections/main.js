console.log(d3);

console.log(d3.version);

console.log(d3.select('#page-title'));

console.log(d3.selectAll('li'));

console.log(d3.selectAll('li').nodes());

console.log(d3.selectAll('li').node());

d3.select('#page-title').style('background-color', '#00feab');

d3.select('#page-title').style('background-color', '#000000').style('color', '#ffff')
    .attr('class', 'new-class')
    .text('D3 is cool!')