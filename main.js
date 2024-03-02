function createRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

let button = document.getElementsByTagName("button");

for (let i = 0; i < button.length; i++) {
  let color = createRandomColor();

  button[i].style.setProperty("--main-bg-color", color);
}

let counter = 0;

function addHTML(element) {
  let newHTML = document.createElement("div");
  newHTML.innerHTML =
    '<div class="q"><button class="riquadro" onclick="addHTML(this)"></button><button class="riquadro" onclick="addHTML(this)"></button><button class="riquadro" onclick="addHTML(this)"></button><button class="riquadro" onclick="addHTML(this)"></button></div>';

  let button = newHTML.getElementsByTagName("button");

  function updateScore() {
    let scoreElememt = document.getElementById("score");
    scoreElememt.textContent = counter;
  }

  counter = counter + 1;
  console.log(counter);
  updateScore();

  for (let i = 0; i < button.length; i++) {
    let color = createRandomColor();

    button[i].style.setProperty("--main-bg-color", color);
  }

  element.replaceWith(newHTML);
}
