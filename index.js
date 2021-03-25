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
        if (pet.nome === petty) {
            if (pet.vacinado === false) {                
                console.log(`O pet ${petty} foi vacinado com sucesso.`);                
            } else {
                console.log(`O pet ${petty} já estava vacinado.`);                
            }
        } 
    }    
}

const campanhaVacina = () => {
    let contPet = 0;
    for (let pet of pets) {
        if (pet.vacinado === false) {
            pet.vacinado = true;
            contPet++;
        }
    }
    console.log(`${contPet} pets foram vacinados nessa campanha!`);
}

const adicionarCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, services) => {
    let novoCliente = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        services: []
    }
    pets.push(novoCliente);
    console.log(pets);
}


// listarPets();
// vacinarPets('Mika');
// campanhaVacina();
adicionarCliente('Celso', 'cachorro', 7, 'vira', 10, 'rafael', '(81) 58654-7987', true);
