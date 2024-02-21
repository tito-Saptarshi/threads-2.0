
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    image: String,
    bio: String,
    threads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    onboarded: [
        {
            type: Boolean,
            default: false
        }
    ],
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community' 
        }
    ]
    // the above three are objects
})

const User = mongoose.models.User || mongoose.model('User', userSchema);
// 2nd part: first time creating the User Model
// 1st part: when User Model is already created

export default User;