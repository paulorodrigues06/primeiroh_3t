//alert("");
//console.log("");
//document.write("");

var tabuada = 8;

function meChame(nome){
    document.write("<h1>Tabuada do " + tabuada + "</h1>");
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<br");
    document.write("Feita por " + nome);
    
}

function escreva(){
    for(var i = 1; i < 11; i++){
        document.write(tabuada + " x " + i + " = "+(tabuada*i)+"<br>");
    }
}

function quadrado(){
    for(var i = 2; i < 101; i++){
        document.write("O Quadrado de " + i + " é " + (i*i)+ "<br>")
    }

}
function total(){
    let valor = document.getElementById("val").value;
    let juros = document.getElementById("ju").value;
    let mes = document.getElementById("mes").value;
    
    if(!Number(valor)){
        alert("🚫 Digite um número não uma letra, aderbal")
        document.getElementById("val").value = "";
        document.getElementById("val").focus ();
        return 
    }
    
    if(!Number(juros)){
        alert("🚫 Digite um número não uma letra, aderbal")
        document.getElementById("ju").value = "";
        document.getElementById("ju").focus ();
        return 
    }
    if(!Number(mes)){
        alert("🚫 Digite um número não uma letra, aderbal")
        document.getElementById("mes").value = "";
        document.getElementById("mes").focus ();
        return 
    }



    let resultado = 0;
    for(let i = 1; i <= mes; i++){
        resultado = valor * (1+(juros/100));
        valor = resultado;
    }
    
    document.write("O Resultado é " + resultado);
}

function soma(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    document.getElementById("resultado").innerHTML = r;
}
function média(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let r = (Number(n1) + Number(n2) + Number(n3))/3;
    document.getElementById("resultado").innerHTML = r;
}
function necessário(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let r = 180 - (Number(n1) + Number(n2) + Number(n3));
    document.getElementById("resultado").innerHTML = r;
}


function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
 }
 
 function total(){
    let val = document.getElementById("valor").value;
    let ju = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
 
    if(!Number(val)){
       alert("O valor deve ser um número.");
       document.getElementById("valor").value = "";
       document.getElementById("valor").focus();
       return 
    }
    if(!Number(ju)){
       alert("O valor dos juros deve ser um número.");
       document.getElementById("juros").value = "";
       document.getElementById("juros").focus();
       return 
    }
    if(!Number(t)){
       alert("A quantidade de meses deve ser um número.");
       document.getElementById("meses").value = "";
       document.getElementById("meses").focus();
       return 
    }
    let r = val;
    for(let m = 1; m <= t; m++){
       r = (val * (1+ (ju/100)));
       val = r;
       document.write("Mês " + m + " valor: " + moeda(r) + "<br>");
    }
    
    document.write("O total é " + moeda(r));
 }
