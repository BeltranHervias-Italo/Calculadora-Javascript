# Calculadora en JavaScript

Link para ver resultado: [CALCULADORA]()

Esta es una calculadora utilizando JavaScript, HTML y CSS necesario para la interfaz de la calculadora.

## Funciones Principales

### `agregar(valor)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `valor` que representa el valor que se debe agregar. Utiliza `document.getElementById('pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `valor` concatenando el nuevo valor.

    function agregar(valor) {
        document.getElementById('pantalla').value += valor;
    }

### `calcular()`

La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    function calcular(){
    document.getElementById('pantalla').value = eval(document.getElementById('pantalla').value)
}

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `borrar()`

La función `borrar()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    function borrar(){
    document.getElementById('pantalla').value = ""
}

## Integración con HTML y CSS

Para utilizar estas funciones, tenemos un elemento HTML con el id "pantalla" que representa la pantalla de la calculadora.

