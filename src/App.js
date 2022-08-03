// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.


let cadastro1 = {
  Nome: 'Daniel',
  Idade: 18 ,
  Cidade: 'Osasco'
}

cadastro1.musica = 'Me Leva' 
delete cadastro1.cidade 
console.log(cadastro1);

// Crie um array  chamado "cadastro" contendo ao menos 3 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 2 itens.
// Mostre no console o nome de um amigo de cada lista.

let cadastro = [
  {Nome:'Daniel',
  Idade: 18,
  Telefone: 1134575834,
  Amigos:['Renan', 'Gabriel']
},
{Nome:'Daniel',
Idade: 18,
Telefone: 1134575834,
Amigos:['Renan', 'Gabriel']},

{Nome:'Daniel',
Idade: 18,
Telefone: 1134575834,
Amigos:['Renan', 'Gabriel']}
]

cadastro{0}.amigos = ['Renan', 'Gabriel']

cadastro{1}.amigos = ['Renan', 'Gabriel']

cadastro{2}.amigos = ['Renan', 'Gabriel']

console.log(cadastro)