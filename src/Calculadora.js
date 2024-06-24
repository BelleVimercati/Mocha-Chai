export default class Calculadora{

    static soma(a, b){
        return a + b;
    }

    static sub(a, b){
        return a - b;
    }

    static mult(a, b){
        return a * b;
    }

    static porcentagem(total, percentual) {
        return (total * percentual) / 100;
    }

    static raizQuadrada(a) {
        if (a < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
        }
        return Math.sqrt(a);
    }
}
