import mongoose from 'mongoose';


const userRankSchema = new mongoose.Schema({

      name:{
      type: String,
      required: true
      },
      score: {
      
      type: Number,
      required: true
      }
})

export const RankDB = mongoose.model("Rank", userRankSchema);