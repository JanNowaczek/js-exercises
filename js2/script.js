const owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];

let html = ''
html += '<ol>'

owoce.forEach( (element, index, array) => { html +='<li>' + element + '</li>'} );

html += '</ol>'

document.body.innerHTML = html

