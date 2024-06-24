import assert from "assert";
import { expect } from "chai";
import Calculadora from "../src/Calculadora.js";

describe("Testes de Soma", () => {
  it("Deve somar 4 e 5, resultando em 9", () => {
    let resultado = Calculadora.soma(4, 5);
    expect(resultado).to.be.eq(9);
  });

  it("Deve somar -4 e 5, resultando em 1", () => {
    let resultado = Calculadora.soma(-4, 5);
    expect(resultado).to.be.eq(1);
  });
});

describe("Testes de Subtração", () => {
  it("Deve subtrair 4 e 5, resultando em -1", () => {
    let resultado = Calculadora.sub(4, 5);
    expect(resultado).to.be.eq(-1);
  });

  it("Deve subtrair -10 e 5, resultando em -15", () => {
    let resultado = Calculadora.sub(-10, 5);
    expect(resultado).to.be.eq(-15);
  });

  it("Deve subtrair 10 e 3, resultando em 7", () => {
    let resultado = Calculadora.sub(10, 3);
    expect(resultado).to.be.eq(7);
  });
});

describe("Testes de Multiplicação", () => {
  it("Deve multiplicar 4 e 5, resultando em 20", () => {
    let resultado = Calculadora.mult(4, 5);
    expect(resultado).to.be.eq(20);
  });

  it("Deve multiplicar -4 e 2, resultando em -8", () => {
    let resultado = Calculadora.mult(-4, 2);
    expect(resultado).to.be.eq(-8);
  });

  it("Deve multiplicar -4 e -2, resultando em 8", () => {
    let resultado = Calculadora.mult(-4, -2);
    expect(resultado).to.be.eq(8);
  });
});

describe("Testes de Percentual", () => {
  it("Deve calcular 10% de 500", () => {
    let resultado = Calculadora.porcentagem(10, 500);
    expect(resultado).to.be.eq(50);
  });

  it("Deve calcular 20% de 5000", () => {
    let resultado = Calculadora.porcentagem(20, 5000);
    expect(resultado).to.be.eq(1000);
  });

  it("Deve calcular 10% de -100", () => {
    let resultado = Calculadora.porcentagem(10, -100);
    expect(resultado).to.be.eq(-10);
  });
});

describe("Testes de Raiz Quadrada", () => {
  it("Deve calcular a raiz quadrada de 4", () => {
    let resultado = Calculadora.raizQuadrada(4);
    expect(resultado).to.be.eq(2);
  });

  it("Deve calcular a raiz quadrada de -25", () => {
    expect(() => Calculadora.raizQuadrada(-25)).to.throw("Não é possível calcular a raiz quadrada de um número negativo.");
  });
});
