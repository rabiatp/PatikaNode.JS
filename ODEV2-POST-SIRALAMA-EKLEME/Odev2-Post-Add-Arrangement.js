/**
 * Post Sıralama ve Post Ekleme
 * Konsol ekranında postlarımızı sıralayalım, 
 * sonrasında yeni bir post oluşturalım 
 * ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
 */

const { resolve } = require("scripts")

const posts = 
[
    { name : "test 1", value : "test 1 value"},
    { name : "test 2", value : "test 2 value"},
    { name : "test 3", value : "test 3 value"},
]

const showPost = () => {
    posts.map((post) => {
        console.log(post)
    })
}

const newPost = (value) => {
    const promise = new Promise((res,rej) => {
        posts.push(value)
        res(posts)
       // rej("hata alındı")
    })
   
   return promise
}  

async function showList()
{
    try {
        await newPost({name : "test 4", value : "test 4 value"})
        showPost()
    } catch (error) {
        console.log(error)
    }
}
showList()
