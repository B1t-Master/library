// const dialog = document.querySelector("dialog");
// const add = document.querySelector(".add-anime");
// const closeModal = document.querySelector(".close");
// const collection = document.querySelector(".collection");
// const create = document.querySelector(".dialog-add");
// const nameInput = document.querySelector("#name");
// const episodeInput = document.querySelector("#episodes");
// const watchStatus = document.getElementById("form-checkbox");
// let id = 0;
// const myAnimes = [];

// add.addEventListener("click", () => {
//   dialog.showModal();
// });

// create.addEventListener("click", (e) => {
//   e.preventDefault();

//   let anime = new Anime(
//     nameInput.value,
//     episodeInput.value,
//     watchStatus.checked
//   );
//   addToLibrary(anime);
//   displayAnime();

//   nameInput.value = "";
//   episodeInput.value = "";
// });

// closeModal.addEventListener("click", () => {
//   dialog.close();
// });

// function Anime(name, episodes, status) {
//   this.name = name;
//   this.episodes = episodes;
//   this.status = status;
//  AnimeAnime.id = "c" + incrementId();
// }

// function addToLibrary(anime) {
//   myAnimes.push(anime);
// }

// function incrementId() {
//   return id++;
// }

// function isWatched() {
//   let length = myAnimes.length - 1;
//   if (myAnimes[length].status === true) {
//     return "Watched";
//   } else return "Skipped";
// }

// function displayAnime() {
//   "use strict";
//   let length = myAnimes.length - 1;
//   let card = document.createElement("div");
//   card.classList.add("cards");
//   card.setAttribute("id", `${myAnimes[length].id}`);
//   let div1 = document.createElement("div");
//   let img = document.createElement("img");
//   img.setAttribute("src", "/images/ninja-blade.png");
//   img.setAttribute("width", "40em");
//   img.setAttribute("height", "40em");
//   div1.appendChild(img);
//   let name = document.createElement("div");
//   name.classList.add("name");
//   name.textContent = myAnimes[length].name;
//   let episodeContainer = document.createElement("div");
//   let div2 = document.createElement("div");
//   div2.textContent = "No. of Episodes: ";
//   let div3 = document.createElement("div");
//   div3.classList.add("episodes");
//   div3.textContent = myAnimes[length].episodes;
//   episodeContainer.appendChild(div2);
//   episodeContainer.appendChild(div3);
//   let legend = document.createElement("legend");
//   legend.textContent = "Watch Status:";
//   let div4 = document.createElement("div");
//   div4.classList.add("status");
//   let watchButton = document.createElement("button");
//   watchButton.classList.add("watch-status");
//   watchButton.textContent = isWatched();
//   watchButton.value = myAnimes[length].id;
//   div4.appendChild(watchButton);
//   let button = document.createElement("button");
//   button.textContent = "Remove";
//   button.value = myAnimes[length].id;
//   button.setAttribute("id", `${myAnimes[length].id}`);
//   button.classList.add("remove");
//   card.appendChild(div1);
//   card.appendChild(name);
//   card.appendChild(episodeContainer);
//   card.appendChild(legend);
//   card.appendChild(div4);
//   card.appendChild(button);
//   collection.appendChild(card);

//   button.addEventListener("click", () => {
//     let removable = document.querySelector(`#${button.id}`);
//     removable.remove();
//     for (let i = 0; i < myAnimes.length; i++) {
//       let index;
//       if (id === button.id) {
//         return myAnimes.splice(i, 1);
//       }
//     }
//   });

//   watchButton.addEventListener("click", () => {
//     if (watchButton.textContent === "Watched") {
//       watchButton.textContent = "Skipped";
//       for (let i = 0; i < myAnimes.length; i++) {
//         if (id === watchButton.value) {
//           return (myAnimes[i].status = false);
//         }
//       }
//     } else {
//       watchButton.textContent = "Watched";
//       for (let i = 0; i < myAnimes.length; i++) {
//         if (id === watchButton.value) {
//           return (myAnimes[i].status = true);
//         }
//       }
//     }
//   });
// }

class Anime {
  static dialog = document.querySelector("dialog");
  static add = document.querySelector(".add-anime");
  static closeModal = document.querySelector(".close");
  static collection = document.querySelector(".collection");
  static create = document.querySelector(".dialog-add");
  static nameInput = document.querySelector("#name");
  static episodeInput = document.querySelector("#episodes");
  static watchStatus = document.getElementById("form-checkbox");
  static id = 0;
  static myAnimes = [];
  constructor(name, episodes, status) {
    this.name = name;
    this.episodes = episodes;
    this.status = status;
    this.id = "c" + Anime.incrementId();
  }

  static displayAnime() {
    let length = Anime.myAnimes.length - 1;
    let card = document.createElement("div");
    card.classList.add("cards");
    card.setAttribute("id", `${Anime.myAnimes[length].id}`);
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", "/images/ninja-blade.png");
    img.setAttribute("width", "40em");
    img.setAttribute("height", "40em");
    div1.appendChild(img);
    let name = document.createElement("div");
    name.classList.add("name");
    name.textContent = Anime.myAnimes[length].name;
    let episodeContainer = document.createElement("div");
    let div2 = document.createElement("div");
    div2.textContent = "No. of Episodes: ";
    let div3 = document.createElement("div");
    div3.classList.add("episodes");
    div3.textContent = Anime.myAnimes[length].episodes;
    episodeContainer.appendChild(div2);
    episodeContainer.appendChild(div3);
    let legend = document.createElement("legend");
    legend.textContent = "Watch Status:";
    let div4 = document.createElement("div");
    div4.classList.add("status");
    let watchButton = document.createElement("button");
    watchButton.classList.add("watch-status");
    watchButton.textContent = Anime.isWatched();
    watchButton.value = Anime.myAnimes[length].id;
    div4.appendChild(watchButton);
    let button = document.createElement("button");
    button.textContent = "Remove";
    button.value = Anime.myAnimes[length].id;
    button.setAttribute("id", `${Anime.myAnimes[length].id}`);
    button.classList.add("remove");
    card.appendChild(div1);
    card.appendChild(name);
    card.appendChild(episodeContainer);
    card.appendChild(legend);
    card.appendChild(div4);
    card.appendChild(button);
    Anime.collection.appendChild(card);

    button.addEventListener("click", () => {
      let removable = document.querySelector(`#${button.id}`);
      removable.remove();
      for (let i = 0; i < Anime.myAnimes.length; i++) {
        let index;
        if (Anime.id === button.id) {
          return Anime.myAnimes.splice(i, 1);
        }
      }
    });

    watchButton.addEventListener("click", () => {
      if (watchButton.textContent === "Watched") {
        watchButton.textContent = "Skipped";
        for (let i = 0; i < Anime.myAnimes.length; i++) {
          if (Anime.id === watchButton.value) {
            return (Anime.myAnimes[i].status = false);
          }
        }
      } else {
        watchButton.textContent = "Watched";
        for (let i = 0; i < Anime.myAnimes.length; i++) {
          if (Anime.id === watchButton.value) {
            return (Anime.myAnimes[i].status = true);
          }
        }
      }
    });
  }

  static addToLibrary(anime) {
    Anime.myAnimes.push(anime);
  }

  static incrementId() {
    return Anime.id++;
  }

  static isWatched() {
    let length = Anime.myAnimes.length - 1;
    if (Anime.myAnimes[length].status === true) {
      return "Watched";
    } else return "Skipped";
  }
}

Anime.add.addEventListener("click", () => {
  Anime.dialog.showModal();
});

Anime.closeModal.addEventListener("click", () => {
  Anime.dialog.close();
});

Anime.create.addEventListener("click", (e) => {
  e.preventDefault();

  let anime = new Anime(
    Anime.nameInput.value,
    Anime.episodeInput.value,
    Anime.watchStatus.checked
  );
  Anime.addToLibrary(anime);
  Anime.displayAnime();

  Anime.nameInput.value = "";
  Anime.episodeInput.value = "";
});
