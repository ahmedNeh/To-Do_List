function enterKey(event) {
  if (event.key === 'Enter'){
    addTodo();
  }
}

const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');

function addTodo() {
  
  if(inputBox.value === ''){
    alert( 'Must creat a ToDo' ) ;
  } else{
      let li = document.createElement('li');
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = '\u00d7'
      li.appendChild(span)
  }
  saveList();
  inputBox.value = '';
  
}

listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveList();
  } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveList();
  }
}, false);

function saveList() {
  localStorage.setItem('list', listContainer.innerHTML);
  
}
function getList() {
  listContainer.innerHTML = localStorage.getItem('list');
}
getList();