const fs = require('fs')

// DOSYA OKUMAK
// fs.readFile('password.txt','utf8',(err,data) => {
//     if(err) console.log(err) 
//     console.log(data)
//     console.log("data okundu")
// })

//DOSYA YAZMAK
fs.writeFile('example.json','{"name": "rabia", "age": 23}','utf8',((err,data ) => {
    if (err) throw err;
    console.log('The file has been saved!');
}))

//VERİ EKLEMEK
fs.appendFile('example.txt','\n data to append',(err) => {
    if(err) throw err
    console.log('The "data to append" was appended to file!');
})

//DOSYA SİLMEK
fs.unlink('example.json',(err) => {
    if(err) throw err
    console.log('example.json was deleted');
})

//KLASÖRLER OLUŞTURMAK
fs.mkdir('uploads/img',{recursive:true},(err) => {
    if(err) throw err
})

//KLASÖRLER SİLİNDİ
fs.rmdir('upload',{recursive : true}, (err => {
    if(err) throw  err
    console.log('klasör silindi')
}))