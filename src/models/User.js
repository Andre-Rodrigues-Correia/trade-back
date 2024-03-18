import {model, Schema} from "mongoose";


const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required'],
            trim: true
        },
        mail: {
            type: String,
            required: [true, 'mail is required'],
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, 'Mail is invalid'],
        },
        username: {
            type: String,
            required: [true, 'username is required'],
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'password is required'],
            minlength: [6, 'the password must contain at least 6 characters'],
        },
        birthday: {
            type: Date,
            required: [true, 'birthday is required'],
            trim: true
        },
    }
)

export default model('User', UserSchema)