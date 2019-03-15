document.querySelector('h1').style.color = 'red';

const zbior=document.querySelectorAll('p');
let i;
for (i=0; i < zbior.length; i++) {
    zbior[i].style.backgroundColor = "yellow"
}

function pozycjaKursora(e) {
    alert('Pozycja kursora w obszarze przeglądarki: ' + e.clientX + ', ' + e.clientY + '\nPozycja kursora na ekranie: ' + e.screenX + ', ' + e.screenY);
}
window.addEventListener('dblclick', pozycjaKursora);