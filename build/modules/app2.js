export var A;
(function (A) {
    // Грубо говоря, обёртка которая инкапсулирует в себе какую-то логику
    A.a = 5;
})(A || (A = {}));
