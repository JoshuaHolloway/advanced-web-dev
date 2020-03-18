// Attach an event-listener via .on() method
// selection.on(eventType, callback)

d3.select('h1').on('click', () => {
  console.log('josh');
});

// Only most recent listener is applied.

// Can remove listener by passing in null as second arg.
d3.select('h1').on('click', null);

// -Prevent default behavior of form 
//  (makes page not-reload upon form submission)
d3.select('#new-note').on('submit', () => {
  // How do we access the event object?
  // -In vanilla-JS the first arg in the callback is the event object.
  // -In D3, we can't access the event-object from any of the callbacks args.
  // --Instead, we must use a special property attached to d3:
  //  ---d3.event object-property
  //    ----Has all the methods and events that the vanilla-js event-object has.
  d3.event.preventDefault();

  const input = d3.select('input');
  d3.select('#notes')
    .append('p')
      .classed('note', true)
      .text(input.property('value'));
});