import mongoose from "mongoose" 

export async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Підключено");
        
          } catch (err) {
        console.dir(err);
    }
}