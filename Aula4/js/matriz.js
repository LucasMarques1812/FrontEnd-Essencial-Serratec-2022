var clientes= [["Marcos","2234-9091"],
                ["Ana", "2231-1088"],
                ["Carla","2231-9191"]];
//Adicionar um elemento a matriz
clientes.push(["José", "2-3213-2"]);

//Imprimir os dados da matriz
console.log(clientes);

let numeros = [100, 200, 450, 900];
let numeros2 = [300, 890, 100];
//Recebe todos os elementos do vetor separados por vírgula.
let num = numeros.join();
console.log(num);

//Recebe a junção dos vetores
let unirVetores = numeros.concat(numeros2);
unirVetores.forEach(e => {
    console.log(e);
});