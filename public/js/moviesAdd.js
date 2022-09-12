window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

titulo.addEventListener('mouseover',({target})=>{
    target.style.backgroundColor = "red";
})

/* define if a secret word is written */

document.addEventListener("keydown", presionaTecla)
let estadoSecreto = 0;
let letra = []
function presionaTecla(event){
   
    const teclaPresionada = event.key.toLowerCase();
    console.log(teclaPresionada);

    switch (teclaPresionada) {
        
        case 's':
            ++estadoSecreto;
          letra.push(teclaPresionada)
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
            console.log('teclas presionadas: ' + letra);
            break;
        case 'e':
            letra.push(teclaPresionada)
            ++estadoSecreto;
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
               console.log('teclas presionadas: ' + letra);
        break;
        case 'c':
            letra.push(teclaPresionada)
            ++estadoSecreto;
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
               console.log('teclas presionadas: ' + letra);
        break;
        case 'r':
            letra.push(teclaPresionada)
            ++estadoSecreto;
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
               console.log('teclas presionadas: ' + letra);
        break;
        case 'e':
            letra.push(teclaPresionada)
            ++estadoSecreto;
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
               console.log('teclas presionadas: ' + letra);
        break;
        case 't':
            letra.push(teclaPresionada)
            ++estadoSecreto;
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
               console.log('teclas presionadas: ' + letra);
        break;
        case 'o':
            letra.push(teclaPresionada)
            estadoSecreto = 0;
            console.log('presiona la tecla: ' + event.key);
            console.log(estadoSecreto);
               console.log('teclas presionadas: ' + letra);
         
        break;
        
    
        default:
            estadoSecreto = 0
            letra = []
            console.log(estadoSecreto);
            console.log(letra);
            break;
    }
    if(letra.length == 7){
        alert('SECRETO MAGICO')
    }
  
  


}


}