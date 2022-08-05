const { resolve } = require("scripts")

const books = 
[
    {name: "kitap 1", author : "author 1"},
    {name: "kitap 2", author : "author 2"},
    {name: "kitap 3", author : "author 3"}
]

const addListener = () => {
    books.map((book) => {
        console.log(book.name)
    })
}

const pushBook = ((value) => {
   
    const promise = new Promise((resolve,reject) => {
        books.push(value)
        //resolve(books)
        reject("hata aldı")
    }) 
    return promise
   
})
pushBook({name : "kitap 4", author : "author 4"})
    .then(() => {
        console.log("yeni liste")
        addListener()
    }).catch(err => {
        console.log(err)
    })