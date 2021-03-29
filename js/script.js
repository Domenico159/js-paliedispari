

// Esercizio 1

// var parola = prompt('Inserire la parola da analizzare ').toLocaleLowerCase().trim();
// var reverse ='';



//     reverseParola();
//     // console.log(reverse);
//     if(parola === reverse){
//         alert('La parola : ' + parola + '  è un palindromo')
//     }else{
//         alert('La parola : ' + parola + ' non è un palindromo')
//     }





    // Esercizio 2

    var pariDispari = prompt('Scegli pari o dispari').toLocaleLowerCase().trim();
    

     
    // Validazione pari o dispari

     while( (pariDispari !== 'pari') && (pariDispari !== 'dispari') ){
        var pariDispari = prompt('Dati errati , per favore inserire pari o dispari , grazie.').toLocaleLowerCase().trim();
     }



     var numeroUser = parseInt( prompt('Scegli un numero da 1 a 5') );

     while( (numeroUser < 1 ) && (numeroUser > 5 ) ){
        var numeroUser = parseInt( prompt('Dato errato perfavore inserire un numero da 1 a 5, grazie.') );
     }

    //  Validazione numero da 1 a 5


     console.log(pariDispari);

     console.log(numeroUser);







/******************************************************
 * Utilitys
 ******************************************************/

function reverseParola (){
    for (var i = parola.length - 1; i >= 0 ; i--){
        var lettere = parola.charAt(i);
        console.log(lettere);
        reverse += lettere;
    }
}