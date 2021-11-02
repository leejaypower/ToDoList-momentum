const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기한다.
const USERNAME = "username"; // 생성한 string을 반복해서 사용하게 될 경우 변수로 저장해놓는 것이 실수 방지에 좋다.

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  loginForm.classList.add(HIDDEN_CLASS);
  //  console.log(username);
  //  greeting.innerHTML = "Hello " + username;
  showGreetings(username);
}

function showGreetings(username) {
  // 여기서 username은 그저 인자에 username이라고 이름 붙인 것일뿐, 어떠한 변수를 말하는 것이 아니다.
  // 함수를 호출할 때 인자로 필요한 정보를 받아서 주면 그 정보를 받아오는 공간일 뿐이다.
  greeting.innerText = `Hello ${username}`;
  // 변수를 String 안에서 사용할 수 있는 방법
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  showGreetings(savedUsername);
}
