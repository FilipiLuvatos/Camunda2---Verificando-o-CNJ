var aux = "",cli,dat,so;
    var n, d, a, j, tr, o;
    var traco = "-";
    var ponto = ".";

    function captura() {

      cli = document.getElementById('cliente').value;
      document.getElementById('mostra2').innerHTML = cli;

      dat = document.getElementById('data').value;
      document.getElementById('mostra3').innerHTML = dat;

      so = document.getElementById('soli').value;
      document.getElementById('mostra').innerHTML = so;   

      aux = document.getElementById('cnj2').value;


      n = aux.substring(0, 7);
      d = aux.substring(7, 9);
      a = aux.substring(9, 13);
      j = aux.substring(13, 14);
      tr = aux.substring(14, 16);
      o = aux.substring(16, 20);

      var res = n + traco + d + ponto + a + ponto + j + ponto + tr + ponto + o;

      
      document.getElementById('mostra4').innerHTML = res;
    
    }

    
    
    function mascara(o, f) {
      v_obj = o
      v_fun = f
      setTimeout("execmascara()", 1)
    }
    function execmascara() {
      v_obj.value = v_fun(v_obj.value)
    }
    function mtel(v) {
      v = v.replace(/\D/g, "");


      return v;
    }
    function id(el) {
      return document.getElementById(el);
    }
    window.onload = function () {
      id('cnj2').onkeyup = function () {
        mascara(this, mtel);
      }
    }