const gateway = require('fast-gateway')
const GATEWAY_PORT = 8080
const testRoutePrefix = '/test'
const testRouteTargetPath = 'http://localhost:8001'
const app = gateway({
    routes: [{
        prefix: testRoutePrefix,
        target: testRouteTargetPath
    }]
})
app.get('/', (req, res) => {
    res.send({ message: 'Gateway running' })
})
app.start(GATEWAY_PORT)