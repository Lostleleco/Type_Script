type Aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
};

const alunos: Aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 0 // Adicionei idade para manter a consistência
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
];

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29,
});

const novoAluno: Aluno = {
    nome: "Lucas",
    idade: 32,
};

