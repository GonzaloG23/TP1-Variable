const numero1 = parseInt(prompt("Ingrese un numero"));
if(!isNaN(numero1)){
if(numero1%2==0)
    document.writeln("El numero es divisible por 2");
else if(numero1%3==0)
    document.writeln("El numero es divisible por 3");
else if(numero1%5==0)
    document.writeln("El numero es divisible por 5");
else if(numero1%7==0)
    document.writeln("El numero es divisible por 7");
else{
    document.writeln("El numero no es divisible por los numeros 2,3,5 o 7")}
} else {
    document.writeln("Ingresaste un valor invalido")
}
