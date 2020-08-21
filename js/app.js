document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres); 

//Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    //Leer las variables
    const origen = document.getElementById('origen').options[document.getElementById('origen').selectedIndex].value;
    const genero = document.getElementById('genero').options[document.getElementById('genero').selectedIndex].value;
    const cGenerar = document.getElementById('numero').value; 

    let url = ''; 
    url += `https://randomuser.me/api?`; 

    //Si existen los parametros se concatenan a la url 
    if(origen !== '') url += `nat=${origen}&`; 
    if(genero !== '') url+=`gender=${genero}&`; 
    if(cGenerar !== '') url += `results=${cGenerar}`;

    
    //Crear fetch 
    fetch(url)
        .then((res) => {
            return res.json();
            
        })
        .then((data) => {

            // Generar el html
            let htmlNombres = `<h2> Nombres Generados </h2>`; 

            htmlNombres += `<ul class="lista">`;
          
                data.results.forEach((jsonUser) => { 
                    console.log(jsonUser);
                    htmlNombres += `<li>${jsonUser.name.first}</li>`; 
                }); 
            
            htmlNombres += `</ul>`;

            document.getElementById('resultado').innerHTML = htmlNombres; 
        })
}