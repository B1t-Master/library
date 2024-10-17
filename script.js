const dialog = document.querySelector("dialog");
const addModal = document.querySelector(".add-anime");
const closeModal = document.querySelector(".close");

addModal.addEventListener("click", () => {
  dialog.showModal();
});

closeModal.addEventListener("click", () => {
  dialog.close();
});

const myAnimes = [];

function Anime(name, episodes, peak, status) {
  //constructor
}

function addToList() {}
