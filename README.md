# Mocha & Chai

## Como fazer a inicialização do Mocha Chai

### Iniciando um projeto Node

`npm init -y`

- Após isso abra o vs code e configure o arquivo `package.json`. \
`"type": "module"`. \
`scripts": { "test": "mocha"}`

### Instalando bibliotecas

`npm i -D mocha chai`.

## Estrutura de testes com Mocha

~~~javascript
describe("Nome do teste", () => {
  it("O que está sendo testado", () => {
    //teste que será executado
  });
});
~~~
