var num = Math.round(Math.random() * 10);
console.log(num);
                        
var chute = document.querySelector("input");
var cont = 1;
            
function verifica(){
    var diferenca = Math.abs(num - chute.value);

    if(num == chute.value && cont == 1){
        resultado.innerHTML = "Parabéns você acertou de primeira!";
    }else{
        if(num == chute.value){
        resultado.innerHTML = "Parabéns você acertou!"  
        return;
        }else{
            if (num > chute.value && diferenca <=3){
            resultado.innerHTML = "Errado, um pouco mais!";
            cont++;
            return
            }else{
                if (num < chute.value && diferenca <=3){
                resultado.innerHTML = "Errado, um pouco menos!";
                cont++;
                return
                }else{
                    if(diferenca >= 3 || diferenca <= 3){
                    resultado.innerHTML = "Errado tente novamente!";
                    cont++;
                    }
                }
            }
        }
    
    }
}

var botao = document.querySelector("button");
botao.onclick = verifica;