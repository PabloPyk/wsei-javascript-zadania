//Zadanie 1
const addDiv = document.createElement('div');
addDiv.textContent = "To jest nowy element";
document.body.appendChild(addDiv);

//Zadanie 2
const favouriteFruits = document.createElement('ul');
fruits  = ['apple', 'plum', 'banana', 'strawberry', 'pear', 'peach'];
for (let i=0; i<6; i++){
	const fruit = document.createElement('li');
	fruit.textContent = fruits [i];
	favouriteFruits.appendChild(fruit);
}
document.body.appendChild(favouriteFruits);

//Zadanie 3
const button = document.createElement('button');
button.textContent = 'Usuñ co drugi element';
button.addEventListener('click', function(){
	const listElements = document.querySelectorAll('li');
	for(let i=0; i < listElements.length; i++){
		if (i%2 !== 0){
			listElements[i].remove();
		}
	}
})
document.body.appendChild(button);

//Zadanie 4
const buttonDelete = document.createElement('button');
buttonDelete.textContent = 'Kliknij aby usun¹æ przycisk';
document.body.appendChild(buttonDelete);
buttonDelete.addEventListener('click', function(){
	this.remove();
})

//Zadanie 5
let randomNumber = Math.floor(Math.random()*10+1);
for(let number=1; number<= randomNumber; number++){
	const newDiv = document.createElement('div');
	newDiv.textContent = `To jest div numer ${number}`;
	document.body.appendChild(newDiv);
}

//Zadanie 6
const elementsObject = {
	div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span'
}

function createHtml(elementsObject){
	const div1 = document.createElement('div');
    div1.textContent = elementsObject.div1;
    document.body.appendChild(div1);

    const span1 = document.createElement('span');
    span1.textContent = elementsObject.span1;
    document.body.appendChild(span1);

    const div2 = document.createElement('div');
    div2.textContent = elementsObject.div2.div3;
    document.body.appendChild(div2);

    const span2 = document.createElement('span');
    span2.textContent = elementsObject.span2;
    document.body.appendChild(span2);

}
createHtml(elementsObject);

//Zadanie 7
const firstList = document.createElement('ul');
firstList.classList.add('firstList');
firstList.textContent = 'Zadania do wykonania:';
const secondList = document.createElement('ul');
secondList.classList.add('secondList');
secondList.textContent = 'Zadania wykonane:';

for(let i = 1; i<8; i++) {
    const liElement = document.createElement('li');
    liElement.textContent = "Zadanie " + i;
    firstList.appendChild(liElement);
}

const firstListButton = document.createElement('button');
firstListButton.textContent = 'Przenieœ element';
const secondListButton = document.createElement('button');
secondListButton.textContent = 'Przenieœ element';
secondListButton.setAttribute('disabled', true);

function copyEl() {
    let toClone;
    if(this.previousElementSibling.classList.contains('firstList')) {
        toClone = firstList.lastElementChild.cloneNode(true);
        firstList.lastElementChild.remove();
        secondList.appendChild(toClone);
        secondList.nextElementSibling.removeAttribute('disabled');
    }
    else {
        toClone = secondList.lastElementChild.cloneNode(true);
        secondList.lastElementChild.remove();
        firstList.appendChild(toClone);
        firstList.nextElementSibling.removeAttribute('disabled');
    }
    if(this.previousElementSibling.children.length == 0) {
        this.setAttribute('disabled', true);
    }
}

firstListButton.addEventListener('click', copyEl);
secondListButton.addEventListener('click', copyEl);

document.body.appendChild(firstList);
document.body.appendChild(firstListButton);
document.body.appendChild(secondList);
document.body.appendChild(secondListButton);