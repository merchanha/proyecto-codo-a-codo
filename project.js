var nombre = document.getElementById('name')
var apellido = document.getElementById('lastName')
var email = document.getElementById('email')
var message = document.getElementById('message')
var subject = document.getElementById('subject')

function enviarFormulario(){
    console.log('Sending Form')

 

    if (nombre.value === null || nombre.value === ''){
         alert('ingresa tu nombre')
         return false;

    }
   

    if (apellido.value === null || apellido.value === ''){
         alert('ingrega tu apellido');
         return false;



    }

    if (email.value === null || email.value === ''){
        alert('ingrega tu mail');
        return false;



   }

   if (message.value === null || message.value === ''){
    alert('ingrega un mensaje');
    return false;


   }

    if (subject.value === null || subject.value === ''){
        alert('ingrega un asunto');
        return false;




}

   }
