let ran1 = Math.floor(Math.random() * 6) + 1;
let ran2 = Math.floor(Math.random() * 6) + 1;
let imgs = document.querySelectorAll("img");

imgs[0].setAttribute("src", `./images/dice${ran1}.png`);
imgs[1].src = `./images/dice${ran2}.png`;

if (ran1 > ran2) {
  document.querySelector("h1").textContent = "Player 1 Win!!";
} else if (ran2 > ran1) {
  document.querySelector("h1").textContent = "Player 2 Win!!";
} else {
  document.querySelector("h1").textContent = "Draw";
}
