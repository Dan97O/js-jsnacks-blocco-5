/* 
Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. (modificato) 
*/

//creo constante

const zucchina = [
  { 
    peso: 1,
    lunghezza: 20,
  },
  { 
    peso: 2,
    lunghezza: 20,
   },
  { 
    peso: 1,
    lunghezza: 20, 
  },
  { 
    peso: 2,
    lunghezza: 20,
  },
  { 
    peso: 3, 
    lunghezza: 20, 
  },
  { 
    peso: 4,
    lunghezza: 20,
  },
  {
    peso: 1,
    lunghezza: 20,
  },
  { 
    peso: 2,
    lunghezza: 20,
  },
  { 
    peso: 3,
    lunghezza: 20,
  },
  {
    peso: 1,
    lunghezza: 20,
  },
];




// creo variabile let per somma 
let somma = 0;
//faccio la somma
zucchina.forEach(zucchina => somma += zucchina.peso);
//stampo in console
console.log(`${somma.toFixed(2)}kg`);


