const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('it got clicked!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', function() {
  console.log('IM an anon!');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', function() {
  console.log('IM an anon!');
});

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');


function buyItem() {
  console.log('buying item');
}

function handleBuyButtonClick(oprah) {
  console.log('Binding the buy button');
  oprah.addEventListener('click', buyItem);
}

console.log(buyButtons);
console.dir(butts);
// buyButtons.addEventListener('click', buyItem);

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('You clicked it');
  });
});


