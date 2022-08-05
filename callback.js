const books = 
[
    {name : "kitap 1", author : "yazar1"},
    {name : "kitap 2", author : "yazar2"},
    {name : "kitap 3", author : "yazar3"}
]

const listBooks = () => {
    books.map(book => {
        console.log(book.name)
    }) 
}

// kitap eklendiğinde listeleme işlemini de yap
const add = (newbook, callback) => {
        books.push(newbook)
        callback();
    
}
add({name:"kitap 4", author:"yazar 4"},listBooks)

