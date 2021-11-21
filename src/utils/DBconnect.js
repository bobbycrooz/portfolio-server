import mongoose from "mongoose";

export const connect = async () => {
     try {
          await mongoose.connect(process.env.DBURL, { useNewUrlParser: true }, (err, db) => {
               console.log(`database connected successfully`);
          });
     } catch (error) {}
};
