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

    static cachorroPraHumano(idadeCachorro){
         if(idadeCachorro < 1){
            let anosCachorro = (1/12) * (idadeCachorro * 10);
            return Math.ceil(16 * Math.log(anosCachorro) + 31)
        }
        else 
            return Math.ceil(16 * Math.log(idadeCachorro) + 31)
    }
    
    static diasEntre(dataEscolhida){
        const hoje = new Date()
        const data = new Date(dataEscolhida)
        const diferencaTempo = hoje - data;
        const diferencaDias = Math.floor(diferencaTempo / (86400000));

        if(diferencaDias < 0){
            return diferencaDias * (-1);
        }
        else
            return diferencaDias;
    }
}
