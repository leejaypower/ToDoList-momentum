const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
// 업데이트 되는 값이기 때문에 let을 사용한다.

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // 로컬 저장소에 데이터를 저장하기
  // array형식으로 저장하고 싶기 때문에 stringify를 사용한다.
}

function deleteTodo(event) {
  // event는 click
  const li = event.target.parentElement;
  // target은 클릭된 html element이다.
  // html element에는 하나 이상의 property가 있고, parentElement는 클릭된 element의 부모이다.

  li.remove();
  // element를 삭제한다.

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  // 클릭(삭제)된 li의 id가 아닌 것만 toDos(array)에 남긴다. 여기서 toDo는 자바스크립트가 넘겨주는 item이다.
  localSaveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id; // newTodo의 object property인 id를 li의 id로 준다.
  // DOM의 id는 number를 넣어도 String으로 저장된다. 따라서 deleteTodo function에서 parseInt한다.

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "🗑";

  li.appendChild(span);
  li.appendChild(button);
  button.addEventListener("click", deleteTodo);

  toDoList.appendChild(li);
  // document에 있는 toDoList에 li(span, button포함)을 추가해준다. 입력받을 때 마다 뒤에 추가된다(append) <-> prepend
}

function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // input의 value를 새로운 변수에 복사한다.
  toDoInput.value = "";
  // input을 비우지만 newTodo에서는 아무런 영향이 없다.
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 각각의 li item을 구별하기 위함
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  localSaveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

/* 
function sayHello(item) {
  console.log("hello");
}
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // 로컬저장소에 item이 있다면, 즉 이미 to do list를 작성했다면
  const parsedToDos = JSON.parse(savedToDos);
  // String을 object(array)로 parsing
  toDos = parsedToDos;
  // to do를 입력받는 array에 넣어준다.

  // parsedTODos.forEach(sayHello())
  parsedToDos.forEach(paintToDo);
}

/*
function sexyFilter(item) {
  return item !== 3;
}

[1, 2, 3, 4].filter(sexyFilter);

는 다음과 같다. 

[1, 2, 3, 4].filter((item) => item !== 3);

 */
