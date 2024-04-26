/*--------------------------------------DAY 1 CODE----------------------------------------*/
const doc = document;
const body = selectElem("#root");
const calcBody = selectElem("#calculator");
const output = selectElem("#output");
const perPerson = selectElem("#perPerson");

const priceElem = selectElem("#price");
const people = selectElem("#people");
const tipPercentElem = selectElem("#tipPercent");

resizeInput.call(tipPercentElem);
resizeInput.call(people);
resizeInput.call(priceElem);

function resizeInput() {
    let numPeople = people.value;
    let price = fixDecimalPlaces(priceElem.value * (tipPercentElem.value / 100 + 1),2);
    this.style.width = `${this.value.length + 3}ch`;
    output.innerHTML = `\$${price}`;

    if (numPeople > 0) {
        perPerson.innerHTML = `\$${fixDecimalPlaces(price/numPeople, 2)}`;        
    } else{
        perPerson.innerHTML = 'N/A';

    }
}

function selectElem(query) {
    return doc.querySelector(query);
}

function fixDecimalPlaces(num, places) {
    let placeMulti = 10 ** places;
    return (Math.ceil(num * placeMulti) / placeMulti).toFixed(places);
}

function createElem(tag, id, classAttribute, contents) {
    let newElem = doc.createElement(tag);
    if (id) {
        newElem.setAttribute("id", id);
    }
    if (classAttribute) {
        newElem.setAttribute("class", classAttribute);
    }
    if (contents) {
        newElem.innerHTML = contents;
    }
    return newElem;
}


tipPercentElem.addEventListener("input", resizeInput);
people.addEventListener("input", resizeInput);
priceElem.addEventListener("input", resizeInput);
/*-------------------------------------Day 2-------------------------------------------------*/
