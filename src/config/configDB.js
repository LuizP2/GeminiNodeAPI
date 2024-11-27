import {MongoClient} from "mongodb"

export default async function DBconnect(stringconexao) {
    let mongoClient;
    
    try{
        mongoClient = new MongoClient(stringconexao)
        console.log("Cluster sucessifully connected")
        await mongoClient.connect()
        console.log("Atlas sucessifully connected")

        return mongoClient
    }catch (erro){
        console.error("Connection failed!", erro, "Node do krlh")
        process.exit
    }
}