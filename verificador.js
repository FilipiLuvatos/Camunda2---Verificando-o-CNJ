
var n1, d1, a1, j1, tr1, o1;
var aux2, aux3;

function verificar(NumeroCNJ){
    // alert('O campo CNJ aceita APENAS números!');
     var cnj = NumeroCNJ.value
     cnj = cnj.replace(/\D/g, "");   //Remove tudo o que não é dígito
     cnj = cnj.replace(/(\d{7})(\d{2})(\d{4})(\d{3})(\d{4})/, "$1-$2.$3.$4.$5");
     document.getElementById('validarcnj').value = cnj
}


function verificador() {

    
    aux2 = document.getElementById('cnj2').value;

    n1 = aux2.substring(0, 7); //2222222
    d1 = aux2.substring(7, 9); //15
    a1 = aux2.substring(9, 13);//2019
    j1 = aux2.substring(13, 14);//5
    tr1 = aux2.substring(14, 16);//08
    o1 = aux2.substring(16, 20);//0000 

    var auxiliar = d1; // Colocar o valor original aqui

    //2222222-15.2019.5.08.0000      

    d1 = "00";
    

    // 2222222|20|1950|8|00|0000

    var aux3 = n1 + a1 + j1 + tr1 + o1 + d1 ;//Apenas desloquei o digito DD para o final   

    var res = 98 - (parseInt(aux3) % 97);
    
   // alert(res);
    //alert(auxiliar);
    if(res == auxiliar){
        var fi = "CNJ É VALIDO"
        document.getElementById('mostra4').innerHTML = fi;
        alert(fi);
    
    }else{
        var fi = "CNJ NÃO É VALIDO"
        document.getElementById('mostra4').innerHTML = fi;
        alert(fi);
    }
   

}


{/* <script src="index.js"></script>

<script src="verificador.js"></script>
 */}