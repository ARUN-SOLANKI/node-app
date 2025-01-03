import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
try {
   const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`mongodb connected ::  db host ${DB_NAME} and connection instace is ${connectionInstance.connection.host}`)
} catch (error) {
    console.log("CONECTION ERROR", error);
    process.exit(1)
}
}

export default connectDB