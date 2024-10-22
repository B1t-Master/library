const dialog = document.querySelector("dialog");
const add = document.querySelector(".add-anime");
const closeModal = document.querySelector(".close");
const collection = document.querySelector(".collection");
const create = document.querySelector(".dialog-add");
const nameInput = document.querySelector("#name");
const episodeInput = document.querySelector("#episodes");
const watchStatus = document.getElementById("form-checkbox");
let id = 0;
const myAnimes = [];

add.addEventListener("click", () => {
  dialog.showModal();
});

create.addEventListener("click", (e) => {
  e.preventDefault();

  let anime = new Anime(
    nameInput.value,
    episodeInput.value,
    watchStatus.checked
  );
  addToLibrary(anime);
  displayAnime();

  nameInput.value = "";
  episodeInput.value = "";
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

function Anime(name, episodes, status) {
  this.name = name;
  this.episodes = episodes;
  this.status = status;
  this.id = "c" + incrementId();
}

function addToLibrary(anime) {
  myAnimes.push(anime);
}

function incrementId() {
  return id++;
}

function isWatched() {
  let length = myAnimes.length - 1;
  if (myAnimes[length].status === true) {
    return "Watched";
  } else return "Skipped";
}

function displayAnime() {
  "use strict";
  let length = myAnimes.length - 1;
  let card = document.createElement("div");
  card.classList.add("cards");
  card.setAttribute("id", `${myAnimes[length].id}`);
  let div1 = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", "/images/ninja-blade.png");
  img.setAttribute("width", "40em");
  img.setAttribute("height", "40em");
  div1.appendChild(img);
  let name = document.createElement("div");
  name.classList.add("name");
  name.textContent = myAnimes[length].name;
  let episodeContainer = document.createElement("div");
  let div2 = document.createElement("div");
  div2.textContent = "No. of Episodes: ";
  let div3 = document.createElement("div");
  div3.classList.add("episodes");
  div3.textContent = myAnimes[length].episodes;
  episodeContainer.appendChild(div2);
  episodeContainer.appendChild(div3);
  let legend = document.createElement("legend");
  legend.textContent = "Watch Status:";
  let div4 = document.createElement("div");
  div4.classList.add("status");
  let watchButton = document.createElement("button");
  watchButton.classList.add("watch-status");
  watchButton.textContent = isWatched();
  watchButton.value = myAnimes[length].id;
  div4.appendChild(watchButton);
  let button = document.createElement("button");
  button.textContent = "Remove";
  button.value = myAnimes[length].id;
  button.setAttribute("id", `${myAnimes[length].id}`);
  button.classList.add("remove");
  card.appendChild(div1);
  card.appendChild(name);
  card.appendChild(episodeContainer);
  card.appendChild(legend);
  card.appendChild(div4);
  card.appendChild(button);
  collection.appendChild(card);

  button.addEventListener("click", () => {
    let removable = document.querySelector(`#${button.id}`);
    removable.remove();
    for (let i = 0; i < myAnimes.length; i++) {
      let index;
      if (myAnimes[i].id === button.id) {
        return myAnimes.splice(i, 1);
      }
    }
  });

  watchButton.addEventListener("click", () => {
    if (watchButton.textContent === "Watched") {
      watchButton.textContent = "Skipped";
      for (let i = 0; i < myAnimes.length; i++) {
        if (myAnimes[i].id === watchButton.value) {
          return (myAnimes[i].status = false);
        }
      }
    } else {
      watchButton.textContent = "Watched";
      for (let i = 0; i < myAnimes.length; i++) {
        if (myAnimes[i].id === watchButton.value) {
          return (myAnimes[i].status = true);
        }
      }
    }
  });
}
