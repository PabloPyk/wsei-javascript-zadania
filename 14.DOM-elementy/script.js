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

//Zadanie 3
const datasetCheck = document.querySelector('#datasetCheck');
function operation(...parameters) {
    let sum = 0;
    let sub = 0;
    parameters.forEach(parameter => {
        sum += parseInt(parameter);
        sub -= parameter;
    })
    return console.log(sum, sub);
}
operation(datasetCheck.dataset.numberone, datasetCheck.dataset.numbertwo, datasetCheck.dataset.numberThree);

//Zadanie 4
document.getElementById("spanText").textContent = "spanText";

//Zadanie 5
document.getElementById("spanText").classList.add("spanTextClass");

//Zadanie 6
function classesShow(classesList) {
  let classesString;
  classesList.forEach ( element => {
    classesString += `+${element}`;
      console.log(element);
  })
  console.log(classesString);
  classesDiv.classList = '';
  console.log('Usuniêto wszystkie klasy');
  console.log(classesDiv.classList);
}
const classesDiv = document.querySelector('#classes');
classesShow(classesDiv.classList);

//Zadanie 7
const longList = document.querySelectorAll("#longList li");
function liSearch([...liElement]){
    liElement.forEach(li => li.dataset.text = "text");
}
liSearch(longList);

//Zadanie 9
const numbers = document.querySelector('#numbers');
function addClass(number){
  if (number % 2 == 0){
    numbers.classList.add('even');
  }
  else{
    numbers.classList.add('odd');
  }
}

let numberRandom = Math.floor(Math.random()*10);
addClass(numberRandom);
console.log(numbers.classList);

//Zadanie 10
const longListElements = document.querySelectorAll("#longList li");
const arrayElements = [];
function returnElements(list){
    list.forEach(child => arrayElements.push(child.textContent));
    console.log(arrayElements);
}
returnElements(longListElements);

//Zadanie 11
const longListChildren = document.querySelectorAll("#longList li");
function replace(listElements){
  listElements.forEach (element =>{
    element.dataset.text = element.textContent;
    element.textContent = Math.floor(Math.random()*10);
  })
}
replace(longListChildren);

