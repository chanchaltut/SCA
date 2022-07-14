let dl = document.getElementById("dl");
let dl_open = document.querySelector(".dl-open");
let dl_close = document.querySelector(".dl-close");

dl_open.addEventListener("click", () => {
    dl.showModal();
});

dl_close.addEventListener("click", () => {
    dl.close();
});

let dl2 = document.getElementById("dl2");
const dl2opens = document.querySelectorAll(".dl2-open");

dl2opens.forEach(function (dl2open) {
    dl2open.addEventListener("click", () => {
      dl2.showModal();
    });
});

let dl2_close = document.querySelector(".dl2-close");

dl2_close.addEventListener("click", () => {
    dl2.close();
});