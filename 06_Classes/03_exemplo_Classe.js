class Materias {
    constructor(id, nome, professor) {
        this.id = id;
        this.nome = nome;
        this.professor = professor;
    }
}

const materia1 = new Materias(10, 'Matematica', 'Pedro Luiz');

console.log(materia1);