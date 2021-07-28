import http = require('http');
const agent = new http.Agent({keepAlive: true})

export class Connections{
    constructor() {
        this.listenToServer("localhost", "8090", "/socket/persist")
    }
    listenToServer = async (host: string, port: string, path: string) => {
        const req = http.request({
                host: host,
                port: port,
                path: path,
                method: 'GET',
                agent: agent,
                headers: {'Content-Type': 'application/json'}
            }, (res) => {
                res.on('data', (chunk) => {
                    console.log(chunk.toString())
                    // const data = JSON.parse(chunk)
                    // const message = data['message']
                    // if (message === 'new job'){
                    //     this.tasks.seekJobThenCreateNewTask(this)
                    // }
                    // if (message === 'initial'){
                    //     this.clientId = data['clientId']
                    //     if (Object.keys(data['job']).length !== 0){
                    //         this.tasks.createNewTask(data['job'], req, this.clientId)
                    //     }
                    // }
                    // console.log(data);

                })
            }
        )
        req.on('end', () => {
            req.end()
        })
        req.on('error', (err) => {
            req.end()
        })
        req.end()
        // this.connections[Date.now().toString()] = req
    }
}

module.exports = new Connections();

