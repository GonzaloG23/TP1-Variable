const numero1 = parseInt(prompt("Ingrese un número"));
if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    if(numero1 % 2 === 0){
        document.writeln("es divisible por 2");
    }
    if(numero1 % 3 === 0){
        document.writeln("es divisible por 3");
    }
    if(numero1 % 5 === 0){
        document.writeln("es divisible por 5");
    }
    if(numero1 % 7 === 0){
        document.writeln("es divisible por 7");
    }
}
else{
    document.writeln("no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}