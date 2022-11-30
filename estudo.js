            function moeda(atual){
                return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            }
            function total(){
                let valor = document.getElementById("val").value;
                let juros = document.getElementById("ju").value;
                let mes = document.getElementById("mes").value;
                if(!Number(valor)){
                        alert("O valor deve ser um número.");
                        document.getElementById("val").value = "";
                        document.getElementById("val").focus();
                        return
                } 
                if(!Number(juros)){
                        alert("O valor de juros deve ser um número.");
                        document.getElementById("ju").value = "";
                        document.getElementById("ju").focus();
                        return
                } 
                if(!Number(mes)){
                        alert("A quantidade de meses deve ser um número.");
                        document.getElementById("mes").value = "";
                        document.getElementById("mes").focus();
                        return
                } 
                let resultado = 0
                let texto = "";
                for(let i = 1; i <= mes; i++){
                        resultado = valor * (1+(juros/100));
                        valor = resultado; 
                         texto += "Mês " + i + " valor " + moeda(resultado)+ "<br>";
                }
                document.getElementById("meses").innerHTML = texto;
                document.getElementById("resultado").innerHTML = "Total: " + moeda(resultado);
            }
            function calculaRaiz(){
                let a = document.getElementById("a").value;
                let b = document.getElementById("b").value;
                let c = document.getElementById("c").value;
                let delta = Math.pow(b,2) - 4*a*c;
                document.getElementById("raiz").innerHTML = "X= " + delta;
                //if (delta < 0){
                //        document.getElementById("raiz").innerHTML = "Não tem raiz real :(";

                // }
                //else if (delta > 0){
                //        x1 = (-b)/(2*a);
                //        document.getElementById("raiz").innerHTML = "X1 = X2 = ";
                //}
                //else{
                //x1 = ((number(-b))) + Math.sqrt(Number(delta))
                //}
        }