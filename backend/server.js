const jsonServer = require('json-server')

const server = jsonServer.create()

const router = jsonServer.router('dp.json')
const middlelwares = jsonServer.defaults()

server.use(middlelwares)
server.use('/',router)
server.listen(process.env.PORT || 3000, ()=>{
    console.log('JSON Server is running');
    
})