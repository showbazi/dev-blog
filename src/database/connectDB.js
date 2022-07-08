import mongoose from 'mongoose';

const {MONGO_URI} = process.env;

if(!MONGO_URI){
    throw new Error("No connection string available on environment varaible");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

// main function
const connectDB = async () => {
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            console.log("....Connected to mongoDB.......");
            return mongoose;
        })
    }
    
    cached.conn = await cached.promise;

    return cached.conn;
}

export default connectDB;