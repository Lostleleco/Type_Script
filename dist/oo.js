"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaBancariaPessoaFisica extends ContaBancaria {
    privatedepositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaBancariaPessoaFisica(123456);
ContaBancaria.retornaNumeroDoBanco();
