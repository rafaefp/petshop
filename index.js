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
    
    bancoDados.pets.forEach((pet) => {
        let {nome, idade, tipo, raca, vacinado, servicos} = pet;
        console.log(`${nome}, ${idade}, ${tipo}, ${raca}, ${(vacinado) ? 'vacinado': 'não vacinado'}`);

        for (const servico of servicos) {
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
        let {vacinado} = pet;
        if (vacinado === false) {
            vacinado = true;            
            contPet++;
        }
    });
    console.log(`${contPet} pets foram vacinados nessa campanha!`);
};

const adicionarPet = novoPet => {
    let {nome} = novoPet;
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`O ${nome} foi adicionado com sucesso.`);
}

const darBanhoPet = pet => {
    let {nome, servicos} = pet;
    servicos.push({
        'nome':'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${nome} está de banho tomado!`);
};

const tosarPet = pet => {
    let {nome, servicos} = pet;
    servicos.push({
        'nome':'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
    let {nome, servicos} = pet;
    servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    atualizarBanco();
    console.log(`${nome} está de unhas aparadas!`);
};

const atenderCliente = (pet, servico) => {
    let {nome} = pet;
    console.log(`Olá, ${nome}`);
    servico(pet);
    console.log('Tchau, até mais!');
}

const buscarPet = (nomePet) => {    
    let petEncontrado = bancoDados.pets.find((pet) => {
        let {nome} = pet;
        return nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtrarTipoPet = (tipoPet) => {    
    let petsEncontrados = bancoDados.pets.filter((pet) => {
        let {tipo} = pet;
        return tipo == tipoPet;
    });

    return petsEncontrados;
}

const clientePremium = (pet) => {
    let {nome} = pet;
    let contServicos = pet.servicos.length;
    if (contServicos > 10) {
        console.log(`Olá, ${nome} você ganhou um desconto.`);
    } else {
        console.log(`Olá, ${nome} você ainda não tem descontos.`);
    }
}

const contatoTutor = (pet) => {
    let {nome, tutor, contato} = pet;

    return `Tutor: ${tutor} - Contato: ${contato} - Pet: ${nome}`;
}

const filtrarTutor = (nomeTutor) => {
    let petsTutor = bancoDados.pets.filter((pet) => {
        let {tutor} = pet;
        return tutor == nomeTutor;
    });
    console.log(`Pets do tutor ${nomeTutor}`)
    petsTutor.forEach((pet) => {
        let {nome, tipo} = pet;
        console.log(`${nome} - ${tipo}`)
    })
}

// listarPets();
// vacinarPets('Veneno');
// campanhaVacina();
// darBanhoPet(bancoDados.pets[4]);
// tosarPet(bancoDados.pets[0]);
// apararUnhasPet(bancoDados.pets[2]);
// listarPets();
// console.log(pets);
// atenderCliente(bancoDados.pets[0], apararUnhasPet);
// atenderCliente(bancoDados.pets[1], darBanhoPet);
// atenderCliente(bancoDados.pets[2], tosarPet);
// atenderCliente(bancoDados.pets[3], tosarPet);
// adicionarPet({
//     "nome": "Jenny",
//     "tipo": "gato",
//     "idade": 1,
//     "raca": "Vira-lata",
//     "peso": 3,
//     "tutor": "Sil",
//     "contato": "(11) 99889-4555",
//     "vacinado": true,
//     "servicos": []
// });
// console.log(buscarPet('Ada'));
// console.log(filtrarTipoPet('gato'));
// vacinarPets('Mika');
// console.log(clientePremium(bancoDados.pets[0]));
// console.log(contatoTutor(bancoDados.pets[0]));
// filtrarTutor('Tiago');