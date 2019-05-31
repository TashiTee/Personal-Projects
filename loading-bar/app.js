const loadingBarItemEl = document.querySelector(".loading-bar__item");

let width = 1;
let loadingBar = setInterval(function() {
  if (width >= 100) {
    clearInterval(loadingBar);
  } else {
    width++;
    loadingBarItemEl.style.width = width + "%";
  }
}, 10)



// let count = 0;
// let incrementor = setInterval(function() {
//   if (count === 10) {
//     clearInterval(incrementor)
//   } else {
//     count++;
//     console.log(count)
//   }
// }, 1000)











