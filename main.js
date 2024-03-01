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

function addHTML(element) {
  let newHTML = document.createElement("div");
  newHTML.innerHTML =
    '<div class="q"><button class="riquadro" onclick="addHTML(this)"></button><button class="riquadro" onclick="addHTML(this)"></button><button class="riquadro" onclick="addHTML(this)"></button><button class="riquadro" onclick="addHTML(this)"></button></div><script></script>';

  let links = newHTML.getElementsByTagName("button");

  for (let i = 0; i < links.length; i++) {
    let color = createRandomColor();

    links[i].style.setProperty("--main-bg-color", color);
  }

  element.replaceWith(newHTML);
}
