// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// // set the textContent property on th element
// // heading.textContent = 'Wes is cool';
// // console.dir(heading.textContent);
// // console.dir(heading.innerText);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// CLASSES
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound); 

pic.alt = 'Cute Pup';  /* setter */
console.log(pic.alt);   /* getter */
console.log(pic.naturalWidth);    /* getter */
pic.width = 200;

// pic.setAttribute('alt', 'really cute pup');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click, function() {
  alert(`WElcome ${custom.dataset.name} ${custom.dataset.last}`);
});
