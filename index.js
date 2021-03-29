const moment = require("moment");
const fs = require('fs');
let bancoDados = fs.readFileSync("./bancoDados.json");

bancoDados = JSON.parse(bancoDados);

const atualizarBanco = () => {
    //conversão de obj js para json
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
}

const listarPets = () => {
    for (let pet of bancoDados.pets) {
        //template string
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);

        for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }
    }
}

const vacinarPets = (petty) => {
    for (let pet of bancoDados.pets) {
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
    for (let pet of bancoDados.pets) {
        if (pet.vacinado === false) {
            pet.vacinado = true;
            contPet++;
        }
    }
    console.log(`${contPet} pets foram vacinados nessa campanha!`);
}

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`O ${novoPet.nome} foi adicionado com sucesso.`);
}

const darBanhoPet = pet => {
    pet.servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
    pet.servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`);
};

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
// vacinarPets('Bela');
// campanhaVacina();
// darBanhoPet(bancoDados.pets[1]);
// tosarPet(bancoDados.pets[0]);
// apararUnhasPet(bancoDados.pets[2]);
// listarPets();
// console.log(pets);
atenderCliente(bancoDados.pets[0], apararUnhas);
// adicionarPet({
//     "nome": "Ada",
//     "tipo": "cachorro",
//     "idade": 1,
//     "raca": "Vira-lata",
//     "peso": 18,
//     "tutor": "Pedro",
//     "contato": "(11) 99889-4555",
//     "vacinado": true,
//     "servicos": []
// });
