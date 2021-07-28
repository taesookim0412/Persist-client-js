import http = require('http');

export class Connections{
    constructor() {
        this.listenToServer("localhost", "8090", "/socket/persist")
    }
    //https://stackoverflow.com/questions/23874954/is-there-a-default-timeout-in-node-js-for-http-request
    listenToServer = async (host: string, port: string, path: string) => {
        const req = http.request({
                host: host,
                port: port,
                path: path,
                method: 'GET',
                // agent: agent,
                headers: {'Content-Type': 'application/json'}
            }, (res) => {
                res.on('data', (chunk) => {
                    console.log(Date.now())
                    try{
                        console.log(chunk.toString());
                    }
                    catch (e) {
                        console.log("tostring failed")
                    }
                    try{
                        console.log(JSON.parse(chunk))
                    }
                    catch(e) {
                        console.log(e);
                    }
                    // console.log(chunk)
                    // console.log(JSON.parse(chunk));
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
            console.log('ended')
            req.end()
        })
        req.on('error', (err) => {
            console.log('error')

            req.end()
        })
        req.end()
        console.log('requested')
        // this.connections[Date.now().toString()] = req
    }
}

module.exports = new Connections();

