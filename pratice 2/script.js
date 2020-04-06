var peso;
var altura;
var imc;
var resultado;

function calcular(){

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    imc = peso/(altura*altura);

    if(imc < 17.9){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + '<br/><h3>MUITO ABAIXO DO PESO</h3><br/>';
        
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';

        return false;
    }else if(imc < 18.5){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + '<br/><h3>ABAIXO DO PESO</h3><br/>';
        
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';

        return false;
    }else if(imc < 24.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + '<br/><h3>PESO NORMAL</h3><br/>';
        
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';

        return false;
    }else if(imc < 29.99){
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + '<br/><h3>ACIMA DO PESO</h3><br/>';
        
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';

        return false;
    }else{
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "Seu resultado foi: " + imc.toFixed(2) + '<br/><h3 style="color:#ff0000">Consulte um medico, pois voce esta com obesidade.</h3><br/>';
        
        document.getElementById("peso").value = '';
        document.getElementById("altura").value = '';

        return false;
    }

}