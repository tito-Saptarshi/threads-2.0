 
import mongoose from "mongoose";

const threadSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    requried: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread',
    }
  ]
//  children is an array. Self referencing/ recurrsion. A single Thread may have other threads(reply) --> multi-level comments
});

const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);
// 2nd part: first time creating the Thread Model
// 1st part: when Thread Model is already created

export default Thread;
