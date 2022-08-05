const { request } = require("express")
const { resolve } = require("scripts")

// ÇALIŞMA 1 : VERİ ALMA - DÜZENLEME İŞLEMLERİ PROMİSE VE AYNC-AWAİT YAPISI İLE-->


const getData = (data) => {
    return new Promise((resolve,reject) => {
    console.log("veriler alınmaya çalışılıyor...")
        if(data){
            resolve("veriler alındı")
        }else{
            reject("veriler alınamadı")
        }
    }) 
}

const cleanData = (receivedData) => {
    return new Promise((resolve,reject) => {
    console.log("veriler düzenliyor...")
        if (receivedData) {
           resolve("veri düzenlendi")
        }else{
           reject("veriler düzenlenemdi")
        }
    })
}
// getData(true)
//     .then(result => {
//         console.log(result)
//         return cleanData(true)
//         .then(result =>  {
//             console.log(result)
//         })
//     }).catch(err => {
//         console.log(err)
//     })

 // ASYNC-AWAİT YAPISI   
 /**
  * Bir fonksiyon async anahtar kelimesi ile birlikte tanımlanırsa, -->
  * fonksiyonun olumlu sonuçlanması sonucunda bir Promise döner
  *  Bir async fonksiyon await anahtar kelimesi ile birlikte kullanılırsa  -->
  * ilgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.
  * ay-sync await yapısında hata bulmak için try-catch kullanılır
  * */
/*
 async function processData(){
    try {
    const receivedData = await getData(false)
    console.log(receivedData)

    const cleanedData = await cleanData(true)
    console.log(cleanedData)
    } catch (error) {
        console.log(error)
    }
 }

 processData()
*/

 
  // ÇALIŞMA 2 : OBJECT'E YENİ BİR DEĞER ATAMAYI PROMİSE YERİNE ASYNC-AWAİT İLE YAPMAK

  const books =
  [ 
    {name : "Kitap 1", author : "aıthor 1"},
    {name : "Kitap 2", author : "aıthor 2"},
    {name : "Kitap 3", author : "aıthor 3"}
  ]

  const addListener = () => {
        books.map((book) => {
            console.log(book.name)
        })
  }
  const pushBook = ((value) =>{
    const promise = new Promise((resolve,reject) => {
        books.push(value)
        resolve(books)
    })
    return promise
  })
  //promise yapısı -->
  /*
  pushBook({name : "kitap 4", author : "author 4"})
  .then(() => {
    console.log("yeni liste")
     addListener()
  }).catch(err => {
    console.log(err)
  })
*/
  // aync-await yapısı -->
 async function showBook(){
    try {
        await pushBook({name : "kitap 4", author : "author 4"})
        addListener()
    } catch (error) {
        console.log(error)
    }
 }
 showBook()
