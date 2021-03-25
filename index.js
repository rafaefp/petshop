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
    for(let pet of pets){        
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPets = (petty) => {
    for (let pet of pets) {
        if (petty === pet.nome) {
            if (pet.vacinado === false) {
                pet.vacinado = true;
                console.log(`O pet ${petty} foi vacinado.`);
                break;
            } else {
                console.log(`O pet ${petty} já estava vacinado.`);
                break;
            }
        } else {
            console.log("Não existe nenhum pet com esse nome.")
            break;
        }
    }    
}



vacinarPets('Mika');
listarPets();