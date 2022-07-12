import mongoose from 'mongoose';

const {MONGO_URI} = process.env;

if(!MONGO_URI){
    throw new Error("No connection string available on environment varaible");
}

//on global object we are caching the mongoose
let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

// main function
const connectDB = async () => {
    // if the connection is already  cached then it will not request the connection to mongoDB and exit the function
    if(cached.conn){
        return cached.conn;
    }

    // if not cached then we will run this logic
    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }
        // first we will request the connection to MongoDB which will return a promise so we will store that in the "promise" field of the "cached" object
        cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
            console.log("....Connected to mongoDB.......");
            return mongoose;
        })
    }
    
    // on proceeding the promise from the pending stage we will return the result in the "conn" field of "cached" object
    cached.conn = await cached.promise;

    return cached.conn;
}

export default connectDB;