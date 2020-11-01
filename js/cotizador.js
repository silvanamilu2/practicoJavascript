

const importe_dia=30;
const importe_completo=50;
const importe_dosdias=45;
var calcular = document.getElementById('calcular');
calcular.addEventListener('click', funcionCalcular);
function funcionCalcular(){
    var resumen = document.getElementById('lista-productos');
    var p_dia = document.getElementById('pase_dia').value;
    var p_completo = document.getElementById('pase_completo').value;
    var p_dosdias = document.getElementById('pase_dosdias').value;
    var productos ='<table  width="100%" bgcolor="#aaaaaa"><tr bgcolor="#fe4918"> <th>Descripción</th> <th>Cantidad</th> <th>Importe</th> </tr>';
    var total = document.getElementById('suma-total');
 
    if (p_dia < 0 || p_completo < 0 || p_dosdias < 0){
        alert('No debe ingresar números de boletos negativos')
    }else{
        if(p_dia == 0 && p_completo == 0 && p_dosdias == 0){
            alert('Debe ingresar la cantidad de boletos que desea comprar')
        }else{
            
            if(p_dia > 0) productos += '<tr><td>PASE POR DÍA (V)</td><td>'+ p_dia +'</td><td>'+importe_dia*p_dia+'</td></tr>'; 
            if(p_completo > 0)  productos += "<tr><td>TODOS LOS DÍAS</td><td> "+ p_completo +"</td><td>"+importe_completo*p_completo+"</td></tr>"; 
            if(p_dosdias > 0) productos += "<tr><td>PASE POR 2 DÍAS (V y S)</td><td> "+ p_dosdias +"</td><td>"+importe_dosdias*p_dosdias+"</td></tr>"; 
            resumen.innerHTML=productos;
            total.textContent=(importe_dia*p_dia)+(importe_completo*p_completo)+(importe_dosdias*p_dosdias)
        }
    }
}



