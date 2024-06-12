import * as mongodb from "mongodb"
import { Employee } from "./employee"

export const collections :{
    employees?: mongodb.Collection<Employee>
} = {}

export async function connectToDatabase(uri: string){
    const client = new mongodb.MongoClient(uri)
    await client.connect()

    const db = client.db("meanStackSampleApp")
//    await applySchemaValidation(db)

    const employeesCollection = db.collection<Employee>("employees")
    collections.employees = employeesCollection
}

async function applySchemaValidation(db: mongodb.Db){
    const jsonSchema = {

    }   
}