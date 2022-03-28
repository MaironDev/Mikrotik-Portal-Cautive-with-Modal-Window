
//FUNCION PARA REDIRECCIONAR LUEGO DE X SEGUNDOS 
// LET COUNT = (numero de segundos)
// WINDOW.LOCATION.HREF="url a redireccionar"

//METODO .ONLOAD (EJECUTA LA FUNCION CUANDO SE CARGA LA PAGINA)
 window.onload = function() {
    let count = 15;
    setInterval(function(){
        count--;
        document.getElementById('delayMsg').innerHTML =  `Faltan ${count} segundos ...`;

        if (count === 0) {
                $('.pop-up').removeClass('show');
        
        }
        clearInterval()
        
    },1000);
};



