const nomePetshop = "PETSHOP AVANADE";
let pets = [{
    nome: 'Mika',
    tipo: 'cachorro',
    idade: 7,
    raca: 'Yorkshire',
    peso: 3,
    tutor: 'Sil',
    contato: '(81) 99888-6488',
    vacinado: false,
    services: ['banho', 'tosa']
}, {
    nome: 'Bela',
    tipo: 'cachorro',
    idade: 1,
    raca: 'Vira',
    peso: 8,
    tutor: 'Tiago',
    contato: '(81) 98855-4565',
    vacinado: true,
    services: ['banho', 'tosa']
}, {
    nome: 'Veneno',
    tipo: 'cachorro',
    idade: 2,
    raca: 'Pitbull',
    peso: 8,
    tutor: 'John',
    contato: '(81) 94565-7898',
    vacinado: false,
    services: ['banho']
}];

const listarPets = () => {
    for (var i = 0; i < pets.length; i++) {
        console.log(pets[i].nome);
    }
}

listarPets();
// console.log(pets);