interface User {
    nome: string;
    idade: number;
    profissao: string;
}

class Usuario implements User {
    constructor(
        public nome: string,
        public idade: number,
        public profissao: string
    ) {}
}

const pessoa1 = new Usuario("Maria", 29, "Atriz");
const pessoa2 = new Usuario("Roberto", 19, "Padeiro");
const pessoa3 = new Usuario("Laura", 32, "Atriz");
const pessoa4 = new Usuario("Carlos", 19, "Padeiro");
