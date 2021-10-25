/* PÁGINAS DE INFORMACIÓN
* Eventos: change, input, cut, copy, paste
https://es.javascript.info/events-change-input#:~:text=Evento%3A%20input,de%20voz%20para%20dictar%20texto.
* Diferencia: addEventListener() - onclick/oninput/onchange:
https://medium.com/@ysmiracle/use-addeventlistener-instead-of-onclick-oninput-onchange-especially-when-working-in-teams-50ad40badb8d
* Diferencia: input.value - input.textContent
https://stackoverflow.com/questions/55012375/give-the-difference-between-input-value-and-input-textcontent-why-is-one-used-i
* Diferencia: textContent - innerText - innerHTML
https://programmerclick.com/article/69571312199/
* Manipular etiqueta <select> con JavaScript:
https://www.todo-argentina.net/cursos/javascript/pagina29.php#:~:text=Un%20select%20es%20una%20lista,maneja%20a%20trav%C3%A9s%20de%20JavaScript.
*/

// 	Se accederá a los números ingresados en los <input>
let inputs = document.getElementsByTagName("input");
// Mostrará los números ingresados en los <input>
let spans = document.getElementsByTagName("span");
// Almacena primer número del primer <input> como float
let num1: number;
// Almacena segundo número del segundo <input> como float
let num2: number;
// Almacenará el resultado de la operación
let resultado: number;
// Almacena qué operación se seleccionó de la etiqueta <select>
let operacion = document.getElementById("operaciones")!.value;
let nueva;
// Ejecuta evento al ingresar números en el primer <input>
inputs[0].oninput = () => {
  // Convierte el número ingresado en el primer <input> a flotante
  num1 = parseFloat(inputs[0].value);
  // Muestra el número ingresado en pantalla
  spans[0].innerHTML = inputs[0].value;
};
// Ejecuta evento al ingresar números en el segundo <input>
inputs[1].oninput = () => {
  // Convierte el número ingresado en el segundo <input> a flotante
  num2 = parseFloat(inputs[1].value);
  // Muestra el número ingresado en pantalla
  spans[1].innerHTML = inputs[1].value;
};
// Qué operación se ejecutará. Usada en evento onchange
function obtieneOperacion(): void {
  // Almacena operación actual
  operacion =
    document.getElementById("operaciones")!.options[
      document.getElementById("operaciones")!.selectedIndex
    ].text;
  // Muestra el resultado
  ejecutarOperacion();
}
// Realiza operación y muestra resultado en el <span>
function ejecutarOperacion(): void {
  // Si los dos números están vacíos
  if (
    (num1 === undefined || isNaN(num1)) &&
    (num2 === undefined || isNaN(num2))
  ) {
    spans[2].innerText = "";
    spans[2].className = "";
  }
  // Ninguno de los dos números puede estar vacío
  else if (
    num1 === undefined ||
    isNaN(num1) ||
    num2 === undefined ||
    isNaN(num2)
  ) {
    spans[2].innerText = "Falta alguno de los operandos";
    spans[2].className = "error";
  } else {
    switch (operacion) {
      case "Suma":
        resultado = num1 + num2;
        spans[2].innerText = resultado.toString();
        spans[2].className = "resultado-correcto";
        break;
      case "Resta":
        resultado = num1 - num2;
        spans[2].innerText = resultado.toString();
        spans[2].className = "resultado-correcto";
        break;
      case "Multiplicación":
        resultado = num1 * num2;
        spans[2].innerText = resultado.toString();
        spans[2].className = "resultado-correcto";
        break;
      case "División":
        if (num2 === 0) {
          spans[2].className = "error";
          spans[2].innerText = "El divisor no puede ser 0";
        } else {
          resultado = num1 / num2;
          spans[2].innerText = resultado.toString();
          spans[2].className = "resultado-correcto";
        }
        break;
    }
  }
}
