const fs = require('fs')

//employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)

const data = new Uint8Array(Buffer.from('{"name": "Employee 1 Name", "salary": 2000}'));
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
})

//Bu veriyi okuyalım. (READ)
fs.readFile('employees.json', 'utf8',(err, data) => {
    if (err) throw err;
    console.log('Dosya okuma-> \n')
    console.log(data);
  });

//Bu veriyi güncelleyelim.
const newData = new Uint8Array(Buffer.from('\n{"name": "Employee 2 Name", "salary": 3000}'));

fs.appendFile('employees.json',newData,'utf-8',(err,newData) => {
    if (err) throw err;
    console.log('veri ekleme-> \n')
    console.log(newData);
})

//Dosyayı silelim.
fs.unlink('employees.json', (err) => {
    if (err) throw err;
    console.log('employees.json was deleted');
})
