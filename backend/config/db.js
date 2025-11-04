import mongoose from "mongoose";

export const DBConnection = async ()=>{
    try {
      await mongoose.connect('mongodb+srv://rishanaponneth_db_user:lJRwXvDQefsmo1j7@fitcamp0.dmhgvoi.mongodb.net/?appName=fitcamp0').then(()=>{console.log("MongoDB connected successfully");
      }) 
    } catch (error) {
      console.log(error);
        
    }
}