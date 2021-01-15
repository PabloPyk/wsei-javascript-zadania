//Zadanie 1
//a
document.getElementById('test-event').addEventListener('click', function(show){
  //console.log(show);
})

//b
window.addEventListener('mouseover', function(show){
  //console.log(show);
})

//c
document.getElementById('test-event').addEventListener('mouseover', function(show){
  //console.log(show);
})

//d
window.addEventListener('keydown', function(show){
  //console.log(show);
})

//e
window.addEventListener('scroll', function(show){
  //console.log(show);
})

//f
document.getElementById('input-test').addEventListener('change', function(show){
  //console.log(show);
})

//Zadanie 2
const span = document.getElementById('span-ex2');
document.getElementById('ex2').addEventListener('click', function(){
  span.textContent = this.dataset.text;
})

//Zadanie 3
const square = document.getElementById('ex3');

square.addEventListener('mouseenter', function(){
  square.style.backgroundColor = 'blue';
})

square.addEventListener('mouseleave', function(){
  square.style.backgroundColor = 'red';
})

//Zadanie 4
const spanErr = document.querySelector('#ex3-err');
document.getElementById('input-test').addEventListener('keydown', function(show){
  if(show.keyCode > 47 && show.keyCode <58){
    span.textContent = "Nie mo¿esz wpisywaæ liczb!"
  }
})

//Zadanie 5
const spanEx5 = document.getElementById('ex5-span');
const buttonEx5 = document.getElementById('ex5-button');
let result = 0;

buttonEx5.addEventListener('click', function(){
  if(result == 10){
    buttonEx5.removeEventListener('click');
  }
  result++;
  spanEx5.textContent = result;
})

//Zadanie 6
window.addEventListener('scroll', function() {
  if(window.scrollY < 200) {
      document.body.style.backgroundColor = 'white';
  }
  else {
      document.body.style.backgroundColor = 'red';
  }
})

//Zadanie 7
//doda³em "=" do html
const input = document.querySelector('#calculator input');
const signs = [...document.querySelectorAll('#calculator button')]; //konwersja na tablicê

signs.forEach(sign =>{
  sign.addEventListener('click', function(){
    if(sign.textContent == "="){
      input.value = eval(input.value);
      return;
    }
    console.log(this.textContent);
    input.value += this.textContent;
  })
})