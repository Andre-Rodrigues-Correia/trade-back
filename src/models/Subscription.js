import {model, Schema} from "mongoose";


const SubscriptionSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'userId is required'],
            trim: true
        },
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
            required: [true, 'groupId is required'],
            trim: true
        },
        active: {
            type: Boolean,
            required: true
        },
        expirationDate: {
            type: Date,
            required: true
        }
    }
)

export default model('Subscription', SubscriptionSchema)