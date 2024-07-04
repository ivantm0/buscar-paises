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
const oscuro = document.getElementById('dark__mode');
const navbar = document.getElementById('navbar');
const divPrincipal = document.getElementById('div__principal');
const luna = document.getElementById('luna');

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

                let name = data[i].name.nativeName;
                let currency = data[i].currencies;
                let lengua = data[i].languages;

                let object = JSON.stringify(name);
                let object2 = JSON.stringify(currency);
                let object3 = JSON.stringify(lengua);
                
                let regex = /[/:,{}/]/g;
                let eliminar = object.replace(regex,"");
                let eliminar2 = object2.replace(regex,"");
                let eliminar3 = object3.replace(regex,"");

                let separar = eliminar.split("\"");
                let separar2 = eliminar2.split("\"");
                let separar3 = eliminar3.split("\"");

                console.log(separar3);

                parr1.innerHTML = "Native Name: ";
                parr7.innerText = "Currencies: ";
                for(let i=0; i<separar.length; i++){
                    if(separar[i] == "common"){
                        parr1.innerText += " " + separar[i+2];
                    }
                }

                for(let i=0; i<separar2.length; i++){
                    if(separar2[i] == "name"){
                        parr7.innerText += " " + separar2[i+2];
                    }
                }

                let indice = 0;
                parr8.innerText = "Languages: ";
                for(let i=0; i<separar3.length; i++){
                    if(separar3[i] == ""){
                        indice++;
                        if(indice%2==0){
                            parr8.innerText += " " + separar3[i+1] + ",";
                        }
                    }
                }

                h3.innerText = data[i].name.common;
                parr2.innerText = "Population: " + data[i].population;
                parr3.innerText = "Region: " + data[i].region;
                parr4.innerText = "Sub Region: " + data[i].subregion;
                parr5.innerText = "Capital: " + data[i].capital;
                parr6.innerText = "Top Level Domain: " + data[i].tld;
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
    
                    let name = data[i].name.nativeName;
                    let currency = data[i].currencies;
                    let lengua = data[i].languages;
    
                    let object = JSON.stringify(name);
                    let object2 = JSON.stringify(currency);
                    let object3 = JSON.stringify(lengua);
                    
                    let regex = /[/:,{}/]/g;
                    let eliminar = object.replace(regex,"");
                    let eliminar2 = object2.replace(regex,"");
                    let eliminar3 = object3.replace(regex,"");
    
                    let separar = eliminar.split("\"");
                    let separar2 = eliminar2.split("\"");
                    let separar3 = eliminar3.split("\"");
    
                    console.log(separar3);
    
                    parr1.innerHTML = "Native Name: ";
                    parr7.innerText = "Currencies: ";
                    for(let i=0; i<separar.length; i++){
                        if(separar[i] == "common"){
                            parr1.innerText += " " + separar[i+2];
                        }
                    }
    
                    for(let i=0; i<separar2.length; i++){
                        if(separar2[i] == "name"){
                            parr7.innerText += " " + separar2[i+2];
                        }
                    }
    
                    let indice = 0;
                    parr8.innerText = "Languages: ";
                    for(let i=0; i<separar3.length; i++){
                        if(separar3[i] == ""){
                            indice++;
                            if(indice%2==0){
                                parr8.innerText += " " + separar3[i+1] + ",";
                            }
                        }
                    }
    
                    h3.innerText = data[i].name.common;
                    parr2.innerText = "Population: " + data[i].population;
                    parr3.innerText = "Region: " + data[i].region;
                    parr4.innerText = "Sub Region: " + data[i].subregion;
                    parr5.innerText = "Capital: " + data[i].capital;
                    parr6.innerText = "Top Level Domain: " + data[i].tld;
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

let flag = true;
oscuro.addEventListener('click', () => {
    if(flag){
        luna.classList.add('bxs-moon');
        luna.classList.remove('bx-moon');

        body.classList.add('oscuro');
        navbar.classList.add('oscuro__navbar');
        lupa.classList.add('lupa__oscura');
        buscar.classList.add('cuadro__oscuro');
        flag = false;
    }else{
        luna.classList.remove('bxs-moon');
        luna.classList.add('bx-moon');

        body.classList.remove('oscuro');
        navbar.classList.remove('oscuro__navbar');
        lupa.classList.remove('lupa__oscura');
        buscar.classList.remove('cuadro__oscuro');
        flag = true;
    }
})