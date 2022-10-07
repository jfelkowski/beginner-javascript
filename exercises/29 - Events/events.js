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

function handleBuyButtonClick(event) {
  console.log('you clicked a button');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop the event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mousemove', e => {
  console.log(e.currentTarget);
  console.log(this);
});
