const dialog = document.querySelector("dialog");
const add = document.querySelector(".add-anime");
const closeModal = document.querySelector(".close");
const collection = document.querySelector(".collection");

add.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

const myAnimes = [];

function Anime(name, episodes, status) {
  this.name = name;
  this.episodes = episodes;
  this.status = status;
}

function addToLibrary(anime) {
  return myAnimes.push(anime);
  // do stuff here
}

function displayAnime() {
  "use strict";
  for (let item of myAnimes) {
    let card = document.createElement("div");
    card.classList.add("cards");
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "/images/ninja-blade.png");
    img.setAttribute("width", "40em");
    img.setAttribute("height", "40em");
    div1.appendChild(img);
    let name = document.createElement("div");
    name.classList.add("name");
    name.textContent = item.name;
    let episodeContainer = document.createElement("div");
    let div2 = document.createElement("div");
    div2.textContent = "No. of Episodes: ";
    let div3 = document.createElement("div");
    div3.classList.add("episodes");
    div3.textContent = item.episodes;
    episodeContainer.appendChild(div2);
    episodeContainer.appendChild(div3);
    let legend = document.createElement("legend");
    legend.textContent = "Watch Status:";
    let div4 = document.createElement("div");
    div4.classList.add("status");
    let label = document.createElement("label");
    label.setAttribute("for", "watched");
    label.textContent = "Watched";
    let input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "watched");
    div4.appendChild(label);
    div4.appendChild(input);
    let button = document.createElement("button");
    button.textContent = "Remove";
    button.classList.add("remove");
    card.appendChild(div1);
    card.appendChild(name);
    card.appendChild(episodeContainer);
    card.appendChild(legend);
    card.appendChild(div4);
    card.appendChild(button);
    collection.appendChild(card);
  }
}

const Rezero = new Anime("Re-zero", 96, "watched");

const Relife = new Anime("Re-Life", 50, "watched");

addToLibrary(Rezero);
addToLibrary(Relife);
displayAnime();
