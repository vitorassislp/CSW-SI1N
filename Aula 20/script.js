function enviaResposta() {
    var idade = document.getElementById('inputUsuario').innerHTML;
    idade = parseInt(idade)
    var idade = document.getElementById('inputUsuario').value;
    if (idade < 1) {
        document.getElementById('resposta').innerHTML = 'Idade inválida';
    } else if (idade > 1 && idade < 10) {
        document.getElementById('resposta').innerHTML = 'É uma criança';
    }
    else if (idade > 9 && idade < 15) {
        document.getElementById('resposta').innerHTML = 'É um adolescente';
    } else if (idade > 4 && idade < 25) {
        document.getElementById('resposta').innerHTML = 'É um jovem';
    }
    else if (idade > 24 && idade < 60) {
        document.getElementById('resposta').innerHTML = 'É um adulto';
    } else if (idade > 59) {
        document.getElementById('resposta').innerHTML = 'É um idoso';
    }
    else {
        document.getElementById('resposta').innerHTML = 'system error';
    }
}
