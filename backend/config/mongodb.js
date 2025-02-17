import mongoose from "mongoose";

const connectDB = async () =>{
   mongoose.connection.on('connected',()=> console.log("Database connected"));
   await mongoose.connect(`${process.env.MONGODB_URI}/mern_auth`);
};


export default connectDB;


// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("✅ Database connected successfully");
//     } catch (error) {
//         console.error("❌ Database connection failed:", error.message);
//         process.exit(1); // Exit process if connection fails
//     }
// };

// export default connectDB;
