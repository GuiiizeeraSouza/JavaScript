/* 
Uma classe Thief que representa um personagem de um tipo diferente.
Ela deve herdar os atributos de Character, mas deve sobrescrever o método 
de ataque para que o cálculo seja de duas vezes a diferença entre os pontos 
de ataque do personagem atual e a defesa do alvo.
Ela deve herdar os atributos de Character, mas deve sobrescrever 
o método de ataque para que o cálculo seja de duas vezes a diferença
entre os pontos de ataque do personagem atual e a defesa do alvo. 

 Uma classe Mage que representa outro tipo de personagem e também herda 
 de Character. No entanto, essa classe também deve ter um atributo para pontos 
 de magia. Além disso, ela também deve sobrescrever o método de ataque para que 
 o cálculo utilize os pontos de ataque somados aos pontos de magia. 
 A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar 
 os pontos de vida de um personagem alvo (passado como argumento do método) em um valor
  de duas vezes os pontos de magia do personagem atual.

 */

class Character {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    Atack(inimigo) {
        const danoCausado = this.ataque - inimigo.vida;

        if (danoCausado > 0) {
            inimigo.vida -= danoCausado;
            console.log(`${this.nome} atacou ${inimigo.nome} causando ${danoCausado} ponstos de dano.`)
        }
    }
}

class Thief extends Character {
    constructor(nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
    }
    atacar(inimigo) {
        const danoCausado = 2 * (this.ataque - inimigo.defesa);

        if (danoCausado > 0) {
            inimigo.vida -= danoCausado;
            console.log(`${this.nome} atacou ${inimigo.nome} causando ${danoCausado} pontos de dano.`);
        } else {
            console.log(`${this.nome} atacou ${inimigo.nome}, mas não causou dano.`);
        }
    }
}

class Mage extends Character {
    constructor(nome, vida, ataque, defesa, magia) {
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }

    atacar(inimigo) {
        const danoCausado = this.ataque + this.magia - inimigo.defesa;

        if (danoCausado > 0) {
            inimigo.vida -= danoCausado;
            console.log(`${this.nome} atacou ${inimigo.nome} causando ${danoCausado} pontos de dano.`);
        } else {
            console.log(`${this.nome} atacou ${inimigo.nome}, mas não causou dano.`);
        }
    }

    aumentarVida(inimigo) {
        const cura = 2 * this.magia;
        inimigo.vida += cura;
        console.log(`${this.nome} aumentou os pontos de vida de ${inimigo.nome} em ${cura} pontos.`);
    }

}


const personagem1 = new Thief("Guilherme,", 12, 2, 3);
const personagem2 = new Mage("Inimigo", 12, 2, 3, 5);

personagem1.atacar(personagem2);
console.log(`${personagem2.nome} tem ${personagem2.vida} pontos de vida restantes.`);

personagem2.aumentarVida(personagem1);
console.log(`${personagem1.nome} tem ${personagem1.vida} pontos de vida após ser curado.`);