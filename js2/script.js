const render = (what, where) => {

    what += '<ol>'

    owoce.forEach( (element, index, array) => { what += '<li>' + element + '</li>' } );

    what += '</ol>'

    where.innerHTML = what
    }
}

let html = ''

let body = document.body

render(html, body)



