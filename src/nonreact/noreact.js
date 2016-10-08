setTimeout(_init, 1);

function addItem() {
    var value = document.getElementById("input").value;
    _addItem(value);
}

function _addItem(value) {
    var list = document.getElementById("items");
    var entry = document.createElement('li');
    entry.innerHTML = value;
    list.appendChild(entry);
}

function _init() {
    var inittialValues = ["Morning exercise", "Read 20 pages", "Buy milk"]
    _addItems(inittialValues);
}

function _addItems(items) {
    for (item of items) {
        _addItem(item)
    }
}

function sort() {
    var list = document.getElementById("items");
    var listItems = [];
    while (list.firstElementChild) {
        listItems.push(list.firstElementChild.innerHTML);
        list.removeChild(list.firstElementChild);
    }
    listItems.sort();
    _addItems(listItems);
}

