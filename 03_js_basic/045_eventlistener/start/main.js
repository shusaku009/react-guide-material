const h1Element = document.querySelector('h1');
console.log(h1Element);

h1Element.textContent = '変更後のタイトル'

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', (e) => {
  console.dir(e.target.textContent);
  console.log('hello');
})