let result = document.getElementById('result');

function input(num){
    let numero = result.value;
    result.value = numero + num;
}

function reset(){
    result.value = "";
}

function calc(){
    
    if(result.value != ""){
        let expressao = result.value;

        expressao = expressao.replace(/%/g, "/100");
        expressao = expressao.replace(/(\d+(\.\d+)?)x²/g, "Math.pow($1, 2)");

        try {
            result.value = eval(expressao);
        } catch (error) {
            alert("Erro!");
        }
    }else{
        alert("Erro! valores invalidos");
    }
}

function del() {
    let inputElement = document.getElementById('result');
    let currentValue = inputElement.value;
    if (currentValue.length > 0) {
        let newValue = currentValue.slice(0, -1);
        inputElement.value = newValue;
    }
}
