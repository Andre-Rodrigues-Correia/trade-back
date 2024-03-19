import {model, Schema} from "mongoose";


const TradeSchema = new Schema(
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
        groupId: {
            type: Schema.Types.ObjectId,
            ref: 'Group',
            required: [true, 'groupId is required'],
        },
        investments: [
            {
                investment: {
                    name: {
                        type: String,
                        trim: true
                    },
                    image: {
                        name: {
                            type: String,
                            trim: true
                        },
                        data: {
                            type: Buffer
                        },
                        contentType: {
                            type: String,
                            trim: true
                        }
                    },
                    valueBuy: {
                        type: Number,
                        required: true,
                    },
                    valueSell: {
                        type: Number,
                        required: true,
                    },
                    coin: {
                        type: String,
                        required: true,
                        trim: true
                    }
                }
            }
        ],
    }
)

export default model('Trade', TradeSchema)