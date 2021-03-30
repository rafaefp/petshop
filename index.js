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
    // for (let pet of bancoDados.pets) {
    bancoDados.pets.forEach((pet) => {
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);

        for (const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }
    });
}    

const vacinarPets = (petty) => {
    for (let pet of bancoDados.pets) {
        if (pet.nome === petty) {
            if (pet.vacinado === false) {
                pet.vacinado = true;
                atualizarBanco();
                console.log(`O pet ${petty} foi vacinado com sucesso.`);                
            } else {
                console.log(`O pet ${petty} já estava vacinado.`);                
            }
        } 
    }    
}

const campanhaVacina = () => {
    let contPet = 0;
    bancoDados.pets.map(function(pet){
        if (pet.vacinado === false) {
            pet.vacinado = true;
            contPet++;
        }
    });
    console.log(`${contPet} pets foram vacinados nessa campanha!`);
};

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
    servico(pet);
    console.log('Tchau, até mais!');
}

const buscarPet = (nomePet) => {

    let petEncontrado = bancoDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {    
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        return pet.tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let contServicos = pet.servicos.length;
    if (contServicos > 10) {
        console.log(`Olá, ${pet.nome} você ganhou um desconto.`);
    } else {
        console.log(`Olá, ${pet.nome} você ainda não tem descontos.`);
    }
}

// listarPets();
// vacinarPets('Bela');
// campanhaVacina();
// darBanhoPet(bancoDados.pets[1]);
// tosarPet(bancoDados.pets[0]);
// apararUnhasPet(bancoDados.pets[2]);
// listarPets();
// console.log(pets);
// atenderCliente(bancoDados.pets[0], apararUnhasPet);
// atenderCliente(bancoDados.pets[1], darBanhoPet);
// atenderCliente(bancoDados.pets[2], tosarPet);
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
// console.log(buscarPet('Gai'));
// console.log(filtrarTipoPet('cachorro'));
// vacinarPets('Mika');
console.log(clientePremium(bancoDados.pets[1]));