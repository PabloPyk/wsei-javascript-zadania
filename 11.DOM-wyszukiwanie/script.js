//Zadanie 1
const list = document.querySelectorAll(".list");

//Zadanie 2
function returnElements(tag){
  const elements = document.querySelectorAll(tag);
  return console.log(elements);
}
returnElements('li');

//Zadanie 3
const listElement = document.getElementById("list");

//Zadanie 4
function showElements(element){
  const elements = document.querySelectorAll(element);
  return console.log(elements);
}
showElements('li');
showElements('ul');
showElements('span');
showElements('div.list span');
showElements('div#spans span');
