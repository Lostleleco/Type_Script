interface IVeiculo {
    velocidadeMaxima: number;
    acelerar(): void;
    frear(): void;
}

class Carro implements IVeiculo {
    velocidadeMaxima = 120;

    acelerar(): void {
        console.log('Acelerando...');
    }

    frear(): void {
        console.log('Freando...');
    }
}
