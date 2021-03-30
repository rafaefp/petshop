// let bancoDeDados = require("./pets.json");

// let pets = bancoDeDados.pets;

// let petObj = {
//     nome: 'Doug',
//     idade: 4,
//     tipo: 'cachorro'
// };
// let petJson = JSON.stringify(petObj);
// console.log(petJson);


// let petJson = '{"nome": "Doug","idade": 4,"tipo": "cachorro"}';
// let petObj = JSON.parse(petJson);
// console.log(petObj);

// let arquivoJson = require("./package.json");
// console.log(arquivoJson);
// console.log(JSON.stringify(arquivoJson));

// const atenderCliente = (pet, servico) => {
//     console.log(`Olá, ${pet.nome}`);
//     (servico) ? servico() : console.log('Só vim dá uma olhadinha...');
//     console.log('Tchau, até mais!');
// }

// const darBanho = () => {
//     console.log('dando banho no pet');
// }

// const apararUnhas = () => {
//     console.log('aparando unhas...');
// }



// atenderCliente(pets[0], darBanho);
// console.log();
// atenderCliente(pets[1], apararUnhas);
// console.log();
// atenderCliente(pets[2]);

let pessoa = {
    nome: 'Iago',
    idade: 25,
    profissao: 'dev',
    contato: '(81) 65446-8989',
    habilidades: ['node.js', 'mysql', 'javascript', 'html']
}

let {nome, contato} = pessoa;
console.log(`${nome} - ${contato}`);