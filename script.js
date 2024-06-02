function agregar(valor){
    document.getElementById('pantalla').value += valor
}

function borrar(){
    document.getElementById('pantalla').value = ""
}

function calcular(){
    document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value)
}