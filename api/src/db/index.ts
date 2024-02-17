import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`\n MONGO DB connected!! DB HOST: ${connectionInstance.connection.host}`);
    console.log(`\n 🔥 Connection Instance : ${connectionInstance}`);
  } catch (error) {
    console.error("MONGODB connection FAILED: ", error);
    process.exit(1)
  }
}

export default connectDB;