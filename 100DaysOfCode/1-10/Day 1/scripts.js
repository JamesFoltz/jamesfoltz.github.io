const doc = document;
const body = selectElem("#root");
const calcBody = selectElem("#calculator");
const output = selectElem("#output")
var tipPercentElem = selectElem("#tipPercent"); // get the input element
tipPercentElem.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
var priceElem = selectElem("#price"); // get the input element
priceElem.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(tipPercentElem); // immediately call the function
resizeInput.call(priceElem);

function resizeInput() {
    var price = fixDecimalPlaces(priceElem.value*((tipPercentElem.value/100)+1), 2);
    this.style.width = `${this.value.length + 2}ch`;
    output.innerHTML = `\$${price}`;
}
function selectElem(query) {
    return doc.querySelector(query);
}

function fixDecimalPlaces(num, places) {
    let placeMulti = 10**places;
    return (Math.ceil(num*placeMulti)/placeMulti).toFixed(places);
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
