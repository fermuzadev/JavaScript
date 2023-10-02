let primerNumero;
let segundoNumero;
let resultado = 0 ;
let operacion;
let entrada;

while (entrada != "ESC" ) {
        primerNumero = parseInt(prompt("Ingrese el primer numero"));
        if (primerNumero < 0 || primerNumero == "") {
            alert("Ingrese un numero mayor a 0");
        } else {
            primerNumero == primerNumero;
        }
        segundoNumero = parseInt(prompt("Ingrese el segundo numero"));
        if (segundoNumero < 0 || segundoNumero == "") {
            alert("Ingrese un numero mayor a 0");
        } else {
            segundoNumero == segundoNumero;
        }
        operacion = prompt("Ingrese el tipo de operacion a realizar "  + "+ = Suma | - = Resta | / = Division | * = Producto | % = Resto");
        switch (operacion) {
            case  "+" :
                resultado = primerNumero + segundoNumero;
                break;
            case "-" :
                resultado = primerNumero - segundoNumero;
            case "*" :
                resultado = primerNumero * segundoNumero;
            case "/" :
                resultado = primerNumero / segundoNumero;
            case "%" :
                resultado = primerNumero % segundoNumero;
            default:
                break;
        }
        alert("Las entradas ingresadas son " + primerNumero + segundoNumero + operacion);
        alert("La salida es " + resultado);
        entrada = prompt("INGRESE ESC PARA SALIR");
    }

