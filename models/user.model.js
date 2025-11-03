import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

export {
    User
};
