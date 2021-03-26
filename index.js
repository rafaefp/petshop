const moment = require("moment");
let bancoDeDados = require("./pets.json");

let pets = bancoDeDados.pets;

const nomePetshop = "PETSHOP AVANADE";
// let pets = [{
//     nome: 'Mika',
//     tipo: 'cachorro',
//     idade: 7,
//     raca: 'Yorkshire',
//     peso: 3,
//     tutor: 'Sil',
//     contato: '(81) 99888-6488',
//     vacinado: false,
//     services: ['banho', 'tosa']
// }, {
//     nome: 'Bela',
//     tipo: 'cachorro',
//     idade: 1,
//     raca: 'Vira',
//     peso: 8,
//     tutor: 'Tiago',
//     contato: '(81) 98855-4565',
//     vacinado: true,
//     services: ['tosa']
// }, {
//     nome: 'Veneno',
//     tipo: 'cachorro',
//     idade: 2,
//     raca: 'Pitbull',
//     peso: 8,
//     tutor: 'John',
//     contato: '(81) 94565-7898',
//     vacinado: false,
//     services: ['banho']
// }];



const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);        
        for (let servicos of pet.services) {            
            console.log(servicos);            
        }
        (pet.vacinado) ? console.log('Vacinado') : console.log('Não vacinado');
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

const darBanhoPet = (petty) => {
    for (let pet of pets) {
        if (pet.nome === petty) {
            pet.services.push({
                'services':'banho',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`${pet.nome} está de banho tomado!`);                        
        }
    }
}
const tosarPet = (petty) => {
    for (let pet of pets) {
        if (pet.nome === petty) {
            pet.services.push({
                'services':'tosa',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`${pet.nome} está com cabelinho na régua!`);            
        }
    }
}
const apararUnhasPet = (petty) => {
    for (let pet of pets) {
        if (pet.nome === petty) {            
            pet.services.push({
                'services':'cortar unhas',
                'data': moment().format('DD-MM-YYYY')
            });
            console.log(`${pet.nome} está com as unhas aparadas!`);            
        }
    }
}

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    servico();
    console.log('Tchau, até mais!');
}

const darBanho = () => {
    console.log('dando banho no pet');
}

const tosar = () => {
    console.log('tosando pet');
}

const apararUnhas = () => {
    console.log('aparando unhas...');
}



// listarPets();
// vacinarPets('Mika');
// campanhaVacina();
// adicionarCliente('Celso', 'cachorro', 7, 'vira', 10, 'rafael', '(81) 58654-7987', true);
// darBanhoPet('Bela');
// tosarPet('Mika');
// apararUnhasPet('Veneno');
// listarPets();
// console.log(pets);
atenderCliente(pets[0], apararUnhas);