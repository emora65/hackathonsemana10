//Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

function SumarAutomatico (valor) {
    var TotalSuma = 0;  
    valor = parseInt(valor); 
    TotalSuma = document.getElementById('MiTotal').innerHTML;
    
    TotalSuma = (TotalSuma == null || TotalSuma == undefined || TotalSuma == "") ? 0 : TotalSuma;
    
    TotalSuma = (parseInt(TotalSuma) + parseInt(valor));
    
    document.getElementById('MiTotal').innerHTML = TotalSuma;
}