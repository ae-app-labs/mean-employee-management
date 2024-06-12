import * as mongodb from "mongodb"

export interface Employee {
    name: string;
    psoition: string;
    level: "junior" | "mid" | "senior";
    _id?: mongodb.ObjectId
}