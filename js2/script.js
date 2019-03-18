function render(where, myArray) {
    var myFoundElement = myArray.find(function(element, index, array) {
        return element.indexOf('A') === 0;
    });
    
    where.innerHTML = 'Pierwszą literą jest A: <strong>' + myFoundElement + '</strong>';
    where.innerHTML += '<br /><br />Zwrócony typ danych: <strong>' + typeof myFoundElement + '</strong>';
}

var body = document.body;

var owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];

render(body, owoce);
