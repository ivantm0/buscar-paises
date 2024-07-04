const paises = document.getElementById('contenedor__paises');
const buscar = document.getElementById('cuadro__busqueda');
const lupa = document.getElementById('lupa');
const body = document.getElementById('body');
const paisBuscado = document.getElementById('paises__info');
const imagenBuscada = document.getElementById('imagen__nueva');
const h3 = document.getElementById('titulo');
const parr1 = document.getElementById('parr1');
const parr2 = document.getElementById('parr2');
const parr3 = document.getElementById('parr3');
const parr4 = document.getElementById('parr4');
const parr5 = document.getElementById('parr5');
const parr6 = document.getElementById('parr6');
const parr7 = document.getElementById('parr7');
const parr8 = document.getElementById('parr8');
const atras = document.getElementById('atras');
const buscador = document.getElementById('buscador');
const noEncontrado = document.getElementById('no__encontrado');

const url = 'https://restcountries.com/v3.1/all';

window.addEventListener('load', ()=> {
    fetch(url).then(response => {return response.json()}).then(data => {
        for(let i=0; i<data.length; i++){

            let divPrincipal = document.createElement('div');
            let divImagen = document.createElement('div');
            let imagen = document.createElement('img');
            let divSecundario = document.createElement('div');
            let h3 = document.createElement('h3');
            let parrafo1 = document.createElement('p');
            let parrafo2 = document.createElement('p');
            let parrafo3 = document.createElement('p');

            h3.innerText = data[i].name.common;
            parrafo1.innerText = "Population: " + data[i].population;
            parrafo2.innerText = "Region: " + data[i].region;
            parrafo3.innerText = "Capital: " + data[i].capital
            imagen.setAttribute("src", data[i].flags.png);

            divImagen.classList.add('contenedor__imagen');
            imagen.classList.add('imagen');
            divSecundario.classList.add('contenedor__info');
            divPrincipal.classList.add('contenedor__pais');

            divSecundario.append(h3, parrafo1, parrafo2, parrafo3);
            divImagen.append(imagen);
            divPrincipal.append(divImagen, divSecundario);

            paises.appendChild(divPrincipal);
        }
    })
});

lupa.addEventListener('click', () => {
    fetch(url).then(response => {return response.json()}).then(data => {
        let pais = buscar.value;
        let flag = true;


        noEncontrado.classList.add('ocultar');
        paises.classList.add('ocultar');
        paisBuscado.classList.remove('ocultar');
        atras.classList.remove('ocultar');
        paises.classList.remove('contenedor__paises');
        buscador.classList.add('ocultar');

        for(let i=0; i<data.length; i++){
            if((data[i].translations.spa.common.toLowerCase() == pais.toLowerCase()) || ((data[i].name.common.toLowerCase() == pais.toLowerCase()))){  
                h3.innerText = data[i].name.common;
                parr1.innerText = "Native Name: " + data[i].name.nativeName[0];
                parr2.innerText = "Population: " + data[i].population;
                parr3.innerText = "Region: " + data[i].region;
                parr4.innerText = "Sub Region: " + data[i].subregion;
                parr5.innerText = "Capital: " + data[i].capital;
                parr6.innerText = "Top Level Domain: " + data[i].tld;
                parr7.innerText = "Currencies: " + data[i].currencies;
                parr8.innerText = "Languages: " + data[i].languages;
                imagenBuscada.setAttribute("src", data[i].flags.png);
                flag = false;
            }
        }
        if(flag){
            noEncontrado.classList.remove('ocultar');
            paisBuscado.classList.add('ocultar');

        }  
    })
});

atras.addEventListener('click', () => {
    paises.classList.remove('ocultar');
    atras.classList.add('ocultar');
    paises.classList.add('contenedor__paises');
    buscador.classList.remove('ocultar');
    paisBuscado.classList.add('ocultar');
});

buscar.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        fetch(url).then(response => {return response.json()}).then(data => {
            let pais = buscar.value;
            let flag = true;
    
    
            noEncontrado.classList.add('ocultar');
            paises.classList.add('ocultar');
            paisBuscado.classList.remove('ocultar');
            atras.classList.remove('ocultar');
            paises.classList.remove('contenedor__paises');
            buscador.classList.add('ocultar');
    
            for(let i=0; i<data.length; i++){
                if((data[i].translations.spa.common.toLowerCase() == pais.toLowerCase()) || ((data[i].name.common.toLowerCase() == pais.toLowerCase()))){  
                    h3.innerText = data[i].name.common;
                    parr1.innerText = "Native Name: " + data[i].name.nativeName[0];
                    parr2.innerText = "Population: " + data[i].population;
                    parr3.innerText = "Region: " + data[i].region;
                    parr4.innerText = "Sub Region: " + data[i].subregion;
                    parr5.innerText = "Capital: " + data[i].capital;
                    parr6.innerText = "Top Level Domain: " + data[i].tld;
                    parr7.innerText = "Currencies: " + data[i].currencies;
                    parr8.innerText = "Languages: " + data[i].languages;
                    imagenBuscada.setAttribute("src", data[i].flags.png);
                    flag = false;
                }
            }
            if(flag){
                noEncontrado.classList.remove('ocultar');
                paisBuscado.classList.add('ocultar');
    
            }  
        })
    }
});