// Exemplo 

function mostrarValor(){
     alert(document.getElementById("meu-input").value);


}

document.getElementById("meu-submit").onclick= function(e){

    mostrarValor();
    e.preventDefault();  
}     

function mostrarValor2(){
    alert(document.getElementById("meu-input2").value);


}

document.getElementById("meu-submit2").onclick= function(e){

   mostrarValor2();
   e.preventDefault();  
}     



 