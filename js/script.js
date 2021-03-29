

// Esercizio 1   ********************************************************************************************

// var parola = prompt('Inserire la parola da analizzare ').toLocaleLowerCase().trim();
// var reverse ='';



//     reverseParola();
//     // console.log(reverse);
//     if(parola === reverse){
//         alert('La parola : ' + parola + '  è un palindromo')
//     }else{
//         alert('La parola : ' + parola + ' non è un palindromo')
//     }











    // Esercizio 2  ***********************************************************************************************************

    var pariDispari = prompt('Scegli pari o dispari').toLocaleLowerCase().trim();
    

     
    // Validazione pari o dispari

     while( (pariDispari !== 'pari') && (pariDispari !== 'dispari') ){
        var pariDispari = prompt('Dati errati , per favore inserire pari o dispari , grazie.').toLocaleLowerCase().trim();
     }



     
     //  Validazione numero da 1 a 5
     
     var numeroUser = parseInt( prompt('Scegli un numero da 1 a 5') );

     while( (isNaN(numeroUser)) || (numeroUser < 1 ) || (numeroUser > 5 ) ){
        var numeroUser = parseInt( prompt('Dato errato perfavore inserire un numero da 1 a 5, grazie.') );
     }
     


    //  Logica per capire chi ha vinto ******************************************************


    //  console.log(pariDispari);

    //  console.log(numeroUser);

     var random = randomNumber();

    //  console.log(random);

     var result = dispariPari(numeroUser , random);

    //  console.log(result);

     var tot = random + numeroUser;

     if( (pariDispari === 'pari') && (result) ){

         alert('Hai vinto   :D   il numero è pari !!!!!! '+ ' \n La somma del tuo numero e di quello del tuo avversario è: ' + tot)

     }else if((pariDispari === 'dispari') && (result=== false) ){

        alert('Hai vinto  :D  il numero è dispari !!!!!!!  '+ ' \n La somma del tuo numero e di quello del tuo avversario è: ' + tot)

    }else{
        alert('Mi dispiace non hai vinto :( ' + ' \nil numero sommato al tuo è '+ tot + ' tu avevi detto ' + pariDispari)
    }
    
    
     






/******************************************************
 * Utilitys
 ******************************************************/




// Parola al cotrario

function reverseParola (){
    for (var i = parola.length - 1; i >= 0 ; i--){
        var lettere = parola.charAt(i);
        console.log(lettere);
        reverse += lettere;
    }
}


// Numero random

function randomNumber(){
    var numberRandom;

    numberRandom = Math.floor( (Math.random()* 5 ) +1 );

    return numberRandom;
}


// Risultato se è pari o dispari della somma 

/**
 * 
 * @param {number} numUser numero del giocatore 
 * @param {number} numComputer  numero del computer
 * @returns risultato se è pari o dispari della somma di entrambi i numeri
 */

function dispariPari(numUser , numComputer){
    
     var sum = numUser + numComputer;

     if(sum % 2 === 0){
        var pari = true;
        return pari ;
     }else{
         var pari = false ;
         return pari ;
     }

     
}