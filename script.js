const checkbox =document.querySelector('#checkbox');
const imagen = document.querySelector('#imagen');
const texto = document.querySelectorAll('h1');

const colorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--bg-color');
const SecondarycolorPrimary = getComputedStyle(document.documentElement).getPropertyValue('--bg-secondary-color');


checkbox.onclick = function(){
    if (checkbox.checked){
        imagen.classList.add('hide');
        imagen.src = "img/Luna.png";
        document.body.style.backgroundColor=  SecondarycolorPrimary;
        document.body.style.color = "white";
        texto.forEach(h1 => {
            h1.style.color = "white";
        });
        } else {
            imagen.classList.add('hide');
            imagen.src = "img/celestia.png";
            document.body.style.backgroundColor = colorPrimary;
            document.body.style.color= "black";
            texto.forEach(h1 => {
                h1.style.color = "black";
            })
        }

    setTimeout (() => {
        imagen.classList.remove('hide');
    }, 100);
}