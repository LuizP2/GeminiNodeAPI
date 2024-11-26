import {MongoClient} from "mongodb"

export default async function DBconnect(connectionString) {
    let client;
    
    try{
        client = new client(connectionString)
        console.log("Cluster sucessifully connected")
        await client.connect()
        console.log("Atlas sucessifully connected")

        return client
    }catch{
        console.log("Connection failed!")
        process.exit
    }
}