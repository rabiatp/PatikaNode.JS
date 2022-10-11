// 1- "Elma, Armut,Muz, Çilek" elemanlarina sahip bir dizi olusturunuz.
let meyveler = ["elma", "armut", "muz", "çilek"];
console.log(meyveler);
// 2- Dizi kag elemanlidir?
let sonuc;
sonuc = meyveler.length;
console.log(sonuc);
// 3- Dizinin ilk ve son elemani nedir?
let first = meyveler.at(0);
let last = meyveler.at(-1);
console.log(first, last);
// 4- Elma dizinin bir elemanimidir?
let value = meyveler.includes("elma");
console.log(value);
// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
console.log(meyveler.push("kiraz"), meyveler);
// 6- Dizinin son 2 elemanana siliniz.
console.log(meyveler.splice(-2, 2), meyveler);
// 7- Agagidaki bilgileri dizi icerisinde saklayiniz ve her ögrencinin yaşını hesaplayaniz.
/*
    Ögrenci 1: Yigit Bilgi 2010 (70,60,80)
    Ögrenci 2: Ada Bilgi 2012 (80,80,90)
    ögrenci 3: Ahmet Turan 2009 (60,60,70)|
*/
const ogrenci1 = ["Yigit", "Bilgi", 2010, [70, 60, 80]];
const ogrenci2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
const ogrenci3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];
const ogrenciler = [ogrenci1, ogrenci2, ogrenci3];
const yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
const ada_yas = new Date().getFullYear() - ogrenciler[1][2];
const ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

console.log(
  ` YİĞİT yaşı: ${yigit_yas} \n ADA yaşı: ${ada_yas} \n AHMETyaşı: ${ahmet_yas}`
);
