//Zadanie 1
const elements = [...document.querySelectorAll('.more-divs')];
function showDivs(elements) {
  let tab = [];
  elements.forEach(element => {
      tab.push(element)
  })
  console.log(tab);
}
showDivs(elements);

//Zadanie 2
const shortListElements = document.querySelector('.short-list');
function shortListFunction(element) {
  console.log(element.innerHTML);
  console.log(element.outerHTML);
  console.log(element.className);
  console.dir(element.classList);
  console.log(element.dataset);
}
shortListFunction(shortListElements);

//Zadanie 4
document.getElementById("spanText").textContent = "spanText";

//Zadanie 5
document.getElementById("spanText").classList.add("spanTextClass")

