//Classe carro

class Veiculo{
    #chassi;
    //Parâmetros    
    constructor(peso, tamanho, cor, chassi, eixos){
        this.eixos = 2;
        this.peso = peso;
        this.tamanho = tamanho;
        this.cor = cor;
        this.#chassi = chassi;
        this.peso;
        this.velo;
    }

    anda(pos, velo){
        this.pos = pos;
        this.pos += velo;
    }


}

class Caminhao extends Veiculo{
    constructor(peso, tamanho, cor, chassi, eixos){
        this.eixos = eixos;
        this.peso = peso;
        this.tamanho = tamanho;
        this.cor = cor;
        this.#chassi = chassi;
        this.peso;
        this.velo;
    }
}

const mercedez = new Caminhao()