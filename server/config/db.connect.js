
// db connection
import mongoose from "mongoose";

const ConnectDB =  async () =>{

   try {
     mongoose.connect(process.env.MONGO_URI )
     .then(() => {
         console.log("MongoDB connected successfully");
     })
     .catch((error) => {
         console.error("MongoDB connection error:", error);
         process.exit(1); // Exit the process with failure
     });
     
   } catch (error) {
     console.error("Error connecting to MongoDB:", error);
     process.exit(1); // Exit the process with failure
    
   }


}



export default ConnectDB;