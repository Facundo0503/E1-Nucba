const ingredientes = ["harina", "webo", "oregano", "muzzarella", "anchoa", "anana", "jamon", "tomate", "salsa", "papasfritas"];
let par = [];
let impar = [];
let separoIngredientes = (ingredientes) => {
    for (let i = 0; i < ingredientes.length; i++) {
        if (ingredientes[i].length % 2 == 0){
            par.push(ingredientes[i]);
        } else {
            impar.push(ingredientes[i]);
        }
    }
}
separoIngredientes(ingredientes)
console.log(`Estos ingredientes son pares ${par}`);
console.log(`Estos ingredientes son impares ${impar}`);