const $basico = 100;
const $premium = 200;
const $deluxe = 300;



function validarCantidad($cantidad)
{
    if(!isNaN($cantidad))
    {
        return true;
    }
    else
    {
        console.log("Ingrese la cantidad");
        return false;
    }
}

function validarOpcion($opcion)
{


    if(isNaN($opcion))
    {
        return true;
    } 
    else
    {
        return false;
        console.log("escoja la opcion de baño");
    }
}

function calcularCosto($opcion,$cantidad)
{

    switch($opcion)
    {
        case 'a':
            return $cantidad*$basico; 
            break;
        case 'b':
            return $cantidad*$premium;
            break;
        case 'c':
            return $cantidad*$deluxe;
            break;
    }

}


function totalizador()
{
    let $opcion = document.getElementById("tipo").value;
    let $cantidad = document.getElementById("cantidad").value;
    let $valora =validarCantidad($cantidad);
    let $valorb =validarOpcion($opcion);

    if(validarCantidad($cantidad)==true && validarOpcion($opcion)==true)
    {
        let $total = calcularCosto($opcion,$cantidad);
        //alert($total);
        document.getElementById("Total").placeholder=$total;
       // alert($total);
    }
    else
    {
        alert($valora+" "+$valorb);
    }
}
btnTotal.addEventListener('click',totalizador,true);


