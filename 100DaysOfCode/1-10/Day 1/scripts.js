const doc = document;
const body = selectID("body");
const para = createElem("p", "para", "para", "This is a test");
body.appendChild(para);


function selectID(id) {
    return doc.getElementById(id);
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


