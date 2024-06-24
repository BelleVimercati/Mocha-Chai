import assert from "assert";
import {expect} from "chai";



describe("Meu primeiro teste", () => {
  it.only("Verificando uma igualdade", () => {
    let aux = 2;
    //assert.strictEqual(aux, 2);
    expect(aux).to.be.equals(2)
    expect(aux).to.be.a('number')
  });
  it("Verificando uma desigualdade", () => {
    let aux = 1;
    //assert.notStrictEqual(aux, 3);
  });
});


