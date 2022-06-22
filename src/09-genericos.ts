/*
    ===== Código de TypeScript =====
*/

//El argumento es de un tipo <T> genérico
function whatIsMy<T>(args: T) {
  return args;
}

let imString = whatIsMy("Hola Mundo");
let imNumber = whatIsMy(100);
let imArray = whatIsMy([1, 2, 3, 4, 5]);

let imExplicit = whatIsMy<number>(1000);
