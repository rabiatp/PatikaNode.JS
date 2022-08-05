/**
 * promise yapısında iki tane parametre alır 
 * olumlu durumlarda Resolve
 * olumsuz durumlarda da Reject
 * Promise yapısı olumlu sonuçları .then()
 * olumsuz sonuçları da .catch() ile karşılar
 *  */

let promise1 = new Promise((resolve,reject) => {
    //resolve("işlem başarılı")
    reject("işlem hatalı")
})

promise1
    .then( value => {
        console.log(value)
    }).catch(err => {
        console.log(err)
    } )
console.log(promise1)

