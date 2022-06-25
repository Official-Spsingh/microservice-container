const gateway = require('fast-gateway')
const GATEWAY_PORT = 8080
const app = gateway({
    routes: [{
        prefix: '/test',
        target: 'http://localhost:8001'
    }]
})
app.get('/', (req, res) => {
    res.send({ message: 'Gateway running' })
})
app.start(GATEWAY_PORT)