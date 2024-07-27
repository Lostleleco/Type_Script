class Pessoa {
    nome:string;
    renda?: number;

    constructor(nome:string, renda?: number){
        this.nome= nome;
    }
    dizOla():string {
        return `${this.nome} disse oi`;
    }
}

class ContaBancaria {
   protected saldo: number = 0 ;
    numeroConta: number ;

    constructor(numeroDaConta:number){
        this.numeroConta= numeroDaConta;
    }

    static retornaNumeroDoBanco(){
        return 125;
    }

    getSaldo(){
        return this.saldo;
    }
    depositar(valor:number){
        this.saldo += valor;
    }
} 

class ContaBancariaBancariaPessoaFisica extends ContaBancaria {
    privatedepositar(valor: number): void {
        this.saldo= valor * 2;

    }
}

const contaDoPedro = new ContaBancariaBancariaPessoaFisica (123456)

ContaBancaria.retornaNumeroDoBanco()