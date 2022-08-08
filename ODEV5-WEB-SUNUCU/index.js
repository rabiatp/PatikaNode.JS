
const http = require('http')
const server = http.createServer((request,response) => {
   
    const url = request.url;

    if(url === '/index'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write('<h2>INDEX sayfasına hoş geldiniz</h2>')

    }else if(url === '/hakimda'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write('<h2>INDEX sayfasına hoş geldiniz</h2>')        

    }else if(url === '/iletisim'){
        response.writeHead(200, {'Content-Type' : 'text/html'})
        response.write('<h2>INDEX sayfasına hoş geldiniz</h2>')
    
    }else{
        response.writeHead(404, {'Content-Type' : 'text/html'} )
    }
    response.end()
})

const port = 5000

server.listen(port, () => {
    console.log(`sunucu port ${port} de başlatıldı`)
})