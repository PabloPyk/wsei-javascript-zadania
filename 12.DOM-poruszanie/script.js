//Zadanie 1
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').firstElementChild);
console.log(document.getElementById('foo').firstElementChild.nextElementSibling);

//Zadanie 2
const ex2 = document.getElementById("ex2");
function getText(ex2){
  ex2.addEventListener('click', function(){
    console.log(ex2.textContent);
})
}
getText(ex2);

//Zadanie 3
const buttons = document.querySelectorAll("#ex3 button");

let status = "none";
function showText(element){
  element.addEventListener('click', function(){
    if(status == "none") {
     this.nextElementSibling.style.display = "block";
      status = "block";
    }
    else if(status == "block"){
      this.nextElementSibling.style.display = "none";
      status = "none";
    }
  })
}
buttons.forEach(button => {
  showText(button);
})

//Zadanie 4
function changeColor(element){
  element.addEventListener("click", function(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.parentElement.style.backgroundColor = randomColor;
  })
}
buttons.forEach(button => {
  changeColor(button);
})