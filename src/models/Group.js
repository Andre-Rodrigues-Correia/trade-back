import {model, Schema} from "mongoose";


const GroupSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'name is required'],
            trim: true
        },
        description: {
            type: String,
            required: [true, 'description is required'],
            trim: true
        },
        owner: {
            userId: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: [true, 'userId is required'],
                trim: true
            },
            username: {
                type: String,
                required: [true, 'username is required'],
                unique: true,
                trim: true,
            },
        },
        subscribers: [
            {
                userId: {
                    type: Schema.Types.ObjectId,
                    required: [true, 'userId is required'],
                    ref: 'User',
                    trim: true
                },
                username: {
                    type: String,
                    required: [true, 'username is required'],
                    unique: true,
                    trim: true,
                },
            }
        ],
    }
)

export default model('Group', GroupSchema)