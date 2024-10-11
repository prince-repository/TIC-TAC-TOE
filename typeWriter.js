let title = document.querySelector('.text');
let name = " TIC TAC TOE ";
let index = 0;

const typeWriter = () => {
  let new_title = name.slice(0, index);
  title.innerText = new_title;
  index >= name.length ? index = 0 : index++;
  setTimeout(typeWriter, 300);
}
typeWriter(); 